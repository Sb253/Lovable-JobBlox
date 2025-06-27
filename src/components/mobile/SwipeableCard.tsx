
import React, { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SwipeableCardProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  leftAction?: {
    icon: React.ReactNode;
    label: string;
    color: string;
  };
  rightAction?: {
    icon: React.ReactNode;
    label: string;
    color: string;
  };
  className?: string;
}

export const SwipeableCard = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  leftAction,
  rightAction,
  className
}: SwipeableCardProps) => {
  const [swipeX, setSwipeX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX.current;
    
    // Limit swipe distance
    const maxSwipe = 100;
    const limitedDelta = Math.max(-maxSwipe, Math.min(maxSwipe, deltaX));
    
    setSwipeX(limitedDelta);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    
    const threshold = 50;
    
    if (swipeX > threshold && onSwipeRight) {
      onSwipeRight();
    } else if (swipeX < -threshold && onSwipeLeft) {
      onSwipeLeft();
    }
    
    // Reset position
    setSwipeX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const deltaX = currentX - startX.current;
    
    const maxSwipe = 100;
    const limitedDelta = Math.max(-maxSwipe, Math.min(maxSwipe, deltaX));
    
    setSwipeX(limitedDelta);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    
    const threshold = 50;
    
    if (swipeX > threshold && onSwipeRight) {
      onSwipeRight();
    } else if (swipeX < -threshold && onSwipeLeft) {
      onSwipeLeft();
    }
    
    setSwipeX(0);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background Actions */}
      {(leftAction || rightAction) && (
        <div className="absolute inset-0 flex">
          {rightAction && (
            <div 
              className={cn(
                "flex items-center justify-center w-20 transition-opacity",
                rightAction.color,
                swipeX > 0 ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="flex flex-col items-center gap-1">
                {rightAction.icon}
                <span className="text-xs text-white">{rightAction.label}</span>
              </div>
            </div>
          )}
          
          <div className="flex-1" />
          
          {leftAction && (
            <div 
              className={cn(
                "flex items-center justify-center w-20 transition-opacity",
                leftAction.color,
                swipeX < 0 ? "opacity-100" : "opacity-0"
              )}
            >
              <div className="flex flex-col items-center gap-1">
                {leftAction.icon}
                <span className="text-xs text-white">{leftAction.label}</span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Main Card */}
      <Card
        ref={cardRef}
        className={cn(
          "relative transition-transform duration-200 cursor-grab active:cursor-grabbing",
          isDragging && "transition-none",
          className
        )}
        style={{
          transform: `translateX(${swipeX}px)`
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <CardContent className="select-none">
          {children}
        </CardContent>
      </Card>
    </div>
  );
};
