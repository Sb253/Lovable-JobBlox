
import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SidebarGroup } from "./MegaMenuConfig";

interface MegaMenuNavigationProps {
  menuGroups: SidebarGroup[];
  openGroups: string[];
  activeSection: string;
  onToggleGroup: (groupLabel: string) => void;
  onSectionChange: (sectionId: string) => void;
}

export const MegaMenuNavigation = ({
  menuGroups,
  openGroups,
  activeSection,
  onToggleGroup,
  onSectionChange
}: MegaMenuNavigationProps) => {
  return (
    <ScrollArea className="flex-1 px-2">
      <div className="space-y-2">
        {menuGroups.map((group) => {
          if (!group.items || group.items.length === 0) return null;
          
          const isOpen = openGroups.includes(group.label);
          const GroupIcon = group.icon;
          const hasActiveSection = group.items.some(item => item.id === activeSection);
          
          console.log(`Group: ${group.label}, isOpen: ${isOpen}, hasActiveSection: ${hasActiveSection}`);
          
          return (
            <Collapsible 
              key={group.label} 
              open={isOpen} 
              onOpenChange={() => {
                console.log(`Collapsible onOpenChange called for: ${group.label}`);
                onToggleGroup(group.label);
              }}
            >
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-between p-3 h-auto font-medium text-left text-slate-300 hover:text-white hover:bg-slate-800",
                    hasActiveSection && "bg-slate-800 text-white"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <GroupIcon className="h-4 w-4" />
                    <span className="text-sm">{group.label}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronRight className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
              
              <CollapsibleContent className="ml-4 mt-1 space-y-1">
                {group.items.map((section) => {
                  const Icon = section.icon;
                  const isActive = activeSection === section.id;
                  
                  return (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start gap-3 text-sm h-9 text-slate-400 hover:text-white hover:bg-slate-800",
                        isActive && "bg-blue-600 text-white hover:bg-blue-700"
                      )}
                      onClick={() => {
                        console.log('MegaMenuNavigation: Section clicked:', section.id);
                        onSectionChange(section.id);
                      }}
                    >
                      <Icon className="h-4 w-4" />
                      {section.label}
                    </Button>
                  );
                })}
              </CollapsibleContent>
            </Collapsible>
          );
        })}
      </div>
    </ScrollArea>
  );
};
