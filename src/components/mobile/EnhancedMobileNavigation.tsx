
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Menu, Home, Users, Briefcase, Calendar, Settings, Bell, Search, Plus, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface EnhancedMobileNavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  sections: Array<{
    id: string;
    label: string; 
    icon: any;
  }>;
}

export const EnhancedMobileNavigation = ({ activeSection, onSectionChange, sections }: EnhancedMobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Main navigation items for bottom tab bar - mobile first priority
  const mainNavItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'more', label: 'More', icon: Menu }
  ];

  // Quick access floating action buttons
  const quickActions = [
    { id: 'job-form', label: 'New Job', icon: Plus, color: 'bg-blue-600' },
    { id: 'customer-form', label: 'Add Customer', icon: Users, color: 'bg-green-600' },
    { id: 'time-tracking', label: 'Track Time', icon: Zap, color: 'bg-purple-600' },
    { id: 'photos', label: 'Take Photo', icon: Camera, color: 'bg-orange-600' }
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

  // Filter sections based on search
  const filteredSections = sections.filter(section =>
    section.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group sections for better organization
  const groupedSections = {
    'Core': filteredSections.filter(s => ['home', 'dashboard', 'quick-actions'].includes(s.id)),
    'Operations': filteredSections.filter(s => ['jobs', 'customers', 'schedule', 'time-tracking', 'photos'].includes(s.id)),
    'Financial': filteredSections.filter(s => ['estimates', 'invoices', 'expenses', 'profit-analysis'].includes(s.id)),
    'Team': filteredSections.filter(s => ['team-management', 'inventory', 'equipment', 'vehicles'].includes(s.id)),
    'Reports': filteredSections.filter(s => ['reports', 'analytics', 'map-view'].includes(s.id)),
    'Settings': filteredSections.filter(s => ['company-settings', 'back-office', 'mobile-settings'].includes(s.id))
  };

  return (
    <>
      {/* Floating Action Button for Quick Actions */}
      <div className="fixed bottom-20 right-4 z-40 md:hidden">
        <div className="flex flex-col gap-2">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Button
                key={action.id}
                size="icon"
                className={`${action.color} h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110`}
                onClick={() => handleSectionClick(action.id)}
                title={action.label}
              >
                <Icon className="h-5 w-5 text-white" />
              </Button>
            );
          })}
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t border-border z-50 safe-area-inset-bottom">
        <div className="flex items-center justify-around px-2 py-2 h-16">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id || (item.id === 'home' && activeSection === 'dashboard');
            
            return (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                className={cn(
                  "flex flex-col items-center gap-1 h-auto py-2 px-3 min-w-0 flex-1",
                  isActive && "text-primary bg-primary/10"
                )}
                onClick={() => handleSectionClick(item.id)}
              >
                <Icon className={cn("h-5 w-5", isActive && "text-primary")} />
                <span className={cn("text-xs truncate", isActive && "text-primary font-medium")}>{item.label}</span>
                {item.id === 'more' && (
                  <div className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full" />
                )}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Enhanced Mobile Menu Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="bottom" className="h-[85vh] p-0">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Navigation</h2>
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                ✕
              </Button>
            </div>

            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>

            {/* Grouped Navigation */}
            <ScrollArea className="flex-1 px-4">
              <div className="space-y-6 py-4">
                {Object.entries(groupedSections).map(([groupName, groupSections]) => (
                  groupSections.length > 0 && (
                    <div key={groupName}>
                      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                        {groupName}
                      </h3>
                      <div className="grid grid-cols-1 gap-2">
                        {groupSections.map((section) => {
                          const Icon = section.icon;
                          const isActive = activeSection === section.id;
                          
                          return (
                            <Button
                              key={section.id}
                              variant={isActive ? "default" : "ghost"}
                              className="justify-start gap-3 h-12 text-left"
                              onClick={() => handleSheetSectionClick(section.id)}
                            >
                              <Icon className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{section.label}</span>
                              {isActive && (
                                <div className="ml-auto h-2 w-2 bg-primary-foreground rounded-full" />
                              )}
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  )
                ))}

                {/* Quick Actions Section */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-3">
                    Quick Actions
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {quickActions.map((action) => {
                      const Icon = action.icon;
                      return (
                        <Button
                          key={action.id}
                          variant="outline"
                          className={`justify-start gap-3 h-12 ${action.color.replace('bg-', 'border-')} hover:${action.color}`}
                          onClick={() => handleSheetSectionClick(action.id)}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="truncate">{action.label}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollArea>

            {/* Footer with notifications */}
            <div className="p-4 border-t bg-muted/50">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-12"
                onClick={() => handleSheetSectionClick('notifications')}
              >
                <Bell className="h-4 w-4" />
                Notifications
                <Badge variant="destructive" className="ml-auto">3</Badge>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
