
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { createMenuGroups } from "../sidebar/MegaMenuConfig";
import { SidebarSection } from "../sidebar/MegaMenuConfig";

interface HeaderMegaMenuProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
  sections: SidebarSection[];
}

export const HeaderMegaMenu: React.FC<HeaderMegaMenuProps> = ({
  onSectionChange,
  activeSection,
  sections
}) => {
  const menuGroups = createMenuGroups(sections);

  const handleSectionClick = (sectionId: string) => {
    console.log('HeaderMegaMenu: Section clicked:', sectionId);
    onSectionChange(sectionId);
  };

  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList className="space-x-1">
        {menuGroups.map((group) => {
          if (!group.items || group.items.length === 0) return null;
          
          const GroupIcon = group.icon;
          const hasActiveSection = group.items.some(item => item.id === activeSection);
          
          return (
            <NavigationMenuItem key={group.label}>
              <NavigationMenuTrigger
                className={cn(
                  "glass-subtle text-white/80 hover:text-white hover:bg-white/10 data-[state=open]:bg-white/10 px-4 py-2",
                  hasActiveSection && "bg-white/20 text-white"
                )}
              >
                <GroupIcon className="h-4 w-4 mr-2" />
                <span className="hidden xl:inline">{group.label.replace(/[📊💰🔧👥📦⚙️💬]/g, '').trim()}</span>
                <ChevronDown className="h-3 w-3 ml-1" />
              </NavigationMenuTrigger>
              
              <NavigationMenuContent 
                className="glass-strong border-white/20 p-4 w-80 z-50"
              >
                <div className="grid gap-2">
                  <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/10">
                    <GroupIcon className="h-5 w-5 text-white" />
                    <h3 className="font-semibold text-white">{group.label.replace(/[📊💰🔧👥📦⚙️💬]/g, '').trim()}</h3>
                  </div>
                  
                  <div className="grid gap-1 max-h-80 overflow-y-auto">
                    {group.items.map((section) => {
                      const Icon = section.icon;
                      const isActive = activeSection === section.id;
                      
                      return (
                        <Button
                          key={section.id}
                          variant="ghost"
                          className={cn(
                            "justify-start gap-3 h-auto py-2 text-left text-white/80 hover:text-white hover:bg-white/10 w-full",
                            isActive && "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                          onClick={() => handleSectionClick(section.id)}
                        >
                          <Icon className="h-4 w-4 flex-shrink-0" />
                          <div className="flex flex-col items-start">
                            <span className="text-sm font-medium">{section.label}</span>
                          </div>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
