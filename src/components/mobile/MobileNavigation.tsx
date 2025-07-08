
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Menu, Home, Users, Briefcase, Calendar, Settings, Bell, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  sections: Array<{
    id: string;
    label: string; 
    icon: any;
  }>;
}

export const MobileNavigation = ({ activeSection, onSectionChange, sections }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Main navigation items for bottom tab bar
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'settings', label: 'More', icon: Menu },
  ];

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'settings') {
      setIsOpen(true);
    } else {
      onSectionChange(sectionId);
      setIsOpen(false);
    }
  };

  const handleMenuItemClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="glass-card border-t">
          <div className="flex justify-around items-center py-2 px-4 safe-area-inset-bottom">
            {mainNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "flex flex-col items-center gap-1 h-auto py-2 px-3 min-w-[60px]",
                    isActive && "text-primary bg-primary/10"
                  )}
                  onClick={() => handleSectionClick(item.id)}
                >
                  <Icon className="h-5 w-5" />
                  <span className="text-xs">{item.label}</span>
                  {item.id === 'notifications' && (
                    <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs bg-red-500">
                      3
                    </Badge>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Full Menu Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="glass-strong h-[80vh]">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Navigation Menu</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                Close
              </Button>
            </div>

            <div className="flex-1 overflow-auto">
              <div className="grid grid-cols-2 gap-3">
                {sections.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  
                  return (
                    <Button
                      key={section.id}
                      variant={isActive ? "default" : "outline"}
                      className={cn(
                        "glass-subtle h-auto p-4 flex flex-col items-center gap-2 text-center",
                        isActive && "bg-primary text-primary-foreground"
                      )}
                      onClick={() => handleMenuItemClick(section.id)}
                    >
                      <Icon className="h-6 w-6" />
                      <span className="text-sm">{section.label}</span>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
