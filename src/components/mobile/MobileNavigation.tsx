
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
    { id: 'more', label: 'More', icon: Menu }
  ];

  const handleSectionClick = (sectionId: string) => {
    if (sectionId === 'more') {
      setIsOpen(true);
    } else {
      onSectionChange(sectionId);
      setIsOpen(false);
    }
  };

  const handleSheetSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  // Group sections for the sheet menu
  const groupedSections = {
    'Core': sections.filter(s => ['home', 'customers', 'jobs', 'schedule'].includes(s.id)),
    'Operations': sections.filter(s => ['time-tracking', 'estimates', 'invoices', 'expenses'].includes(s.id)),
    'Team': sections.filter(s => ['team-management', 'inventory', 'equipment', 'vehicles'].includes(s.id)),
    'Reports': sections.filter(s => ['goals', 'profit-analysis', 'tax-financial'].includes(s.id)),
    'Settings': sections.filter(s => ['notifications', 'back-office', 'admin-panel'].includes(s.id))
  };

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-border z-50">
        <div className="flex items-center justify-around px-2 py-2">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id || (item.id === 'more' && !mainNavItems.some(nav => nav.id === activeSection));
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={cn(
                  "flex flex-col items-center gap-1 h-auto py-2 px-3 min-w-0",
                  isActive && "text-primary"
                )}
                onClick={() => handleSectionClick(item.id)}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs truncate">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="h-[80vh]">
          <div className="space-y-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                ✕
              </Button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg bg-background"
              />
            </div>

            {/* Grouped Navigation */}
            <div className="space-y-6 overflow-y-auto max-h-[60vh]">
              {Object.entries(groupedSections).map(([groupName, groupSections]) => (
                <div key={groupName}>
                  {groupSections.length > 0 && (
                    <>
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                        {groupName}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {groupSections.map((section) => {
                          const Icon = section.icon;
                          const isActive = activeSection === section.id;
                          
                          return (
                            <Button
                              key={section.id}
                              variant={isActive ? "default" : "ghost"}
                              className="justify-start gap-3 h-12"
                              onClick={() => handleSheetSectionClick(section.id)}
                            >
                              <Icon className="h-4 w-4" />
                              <span className="truncate">{section.label}</span>
                            </Button>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              ))}

              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 gap-2 mt-2">
                  <Button variant="outline" className="justify-start gap-3">
                    <Bell className="h-4 w-4" />
                    Notifications
                    <Badge variant="secondary" className="ml-auto">3</Badge>
                  </Button>
                  <Button variant="outline" className="justify-start gap-3">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Spacer for bottom navigation */}
      <div className="md:hidden h-16" />
    </>
  );
};
