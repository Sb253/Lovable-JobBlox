
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TouchFriendlyFormProps {
  title: string;
  onSubmit: (data: any) => void;
  onCancel?: () => void;
  children?: React.ReactNode;
  className?: string;
}

export const TouchFriendlyForm = ({ 
  title, 
  onSubmit, 
  onCancel, 
  children, 
  className 
}: TouchFriendlyFormProps) => {
  return (
    <Card className={cn("mx-4 mb-20", className)}>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {children}
        
        {/* Action Buttons - Fixed at bottom on mobile */}
        <div className="sticky bottom-0 bg-white dark:bg-gray-900 p-4 -mx-4 -mb-6 border-t flex gap-3">
          {onCancel && (
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1 h-12 text-base"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
          <Button 
            type="submit" 
            className="flex-1 h-12 text-base"
            onClick={onSubmit}
          >
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Enhanced form components with better touch targets
export const TouchInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    className={cn("h-12 text-base", className)}
    {...props}
  />
));

export const TouchTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<typeof Textarea>
>(({ className, ...props }, ref) => (
  <Textarea
    ref={ref}
    className={cn("min-h-24 text-base", className)}
    {...props}
  />
));

export const TouchSelect = ({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder = "Select an option",
  className 
}: {
  label: string;
  options: Array<{ value: string; label: string }>;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}) => (
  <div className={cn("space-y-2", className)}>
    <Label className="text-base">{label}</Label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full h-12 px-3 border border-input bg-background text-base rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

TouchInput.displayName = "TouchInput";
TouchTextarea.displayName = "TouchTextarea";
