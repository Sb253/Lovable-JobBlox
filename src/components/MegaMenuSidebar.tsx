
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CollapsedSidebar } from "./CollapsedSidebar";
import { MegaMenuHeader } from "./sidebar/MegaMenuHeader";
import { MegaMenuNavigation } from "./sidebar/MegaMenuNavigation";
import { createMenuGroups, SidebarSection } from "./sidebar/MegaMenuConfig";

interface MegaMenuSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  sections: SidebarSection[];
  isVisible?: boolean;
  collapsed?: boolean;
  onToggleCollapse?: (collapsed: boolean) => void;
}

interface CompanyData {
  name: string;
  logo: string | null;
}

export const MegaMenuSidebar = ({ 
  activeSection, 
  onSectionChange, 
  sections, 
  isVisible = true,
  collapsed = false,
  onToggleCollapse
}: MegaMenuSidebarProps) => {
  const [companyData, setCompanyData] = useState<CompanyData>({
    name: 'JobBlox',
    logo: null
  });
  const [openGroups, setOpenGroups] = useState<string[]>(['Dashboard & Overview']);

  useEffect(() => {
    const savedCompanyData = localStorage.getItem('companySettings');
    if (savedCompanyData) {
      const data = JSON.parse(savedCompanyData);
      setCompanyData({
        name: data.name || 'JobBlox',
        logo: data.logo || null
      });
    }
  }, []);

  const menuGroups = createMenuGroups(sections);

  // Auto-expand group containing active section
  useEffect(() => {
    const activeGroup = menuGroups.find(group => 
      group.items.some(item => item.id === activeSection)
    );
    if (activeGroup && !openGroups.includes(activeGroup.label)) {
      setOpenGroups(prev => [...prev, activeGroup.label]);
    }
  }, [activeSection, menuGroups]);

  if (collapsed) {
    return (
      <CollapsedSidebar 
        activeSection={activeSection}
        onSectionChange={onSectionChange}
        sections={sections}
      />
    );
  }

  const toggleGroup = (groupLabel: string) => {
    console.log('MegaMenuSidebar: Toggling group:', groupLabel);
    setOpenGroups(prev => {
      const newGroups = prev.includes(groupLabel) 
        ? prev.filter(g => g !== groupLabel)
        : [...prev, groupLabel];
      console.log('MegaMenuSidebar: New open groups:', newGroups);
      return newGroups;
    });
  };

  const handleToggleCollapse = () => {
    if (onToggleCollapse) {
      onToggleCollapse(!collapsed);
    }
  };

  const handleSectionChange = (sectionId: string) => {
    console.log('MegaMenuSidebar: Section change requested:', sectionId);
    onSectionChange(sectionId);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-slate-900 border-r border-slate-700 z-40 flex flex-col transition-all duration-300">
      <MegaMenuHeader 
        companyData={companyData}
        onToggleCollapse={handleToggleCollapse}
      />

      <div className="p-2">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start gap-3 text-slate-300 hover:text-white hover:bg-slate-800",
            activeSection === 'dashboard' && "bg-blue-600 text-white hover:bg-blue-700"
          )}
          onClick={() => handleSectionChange('dashboard')}
        >
          <Building2 className="h-5 w-5" />
          <span>Dashboard</span>
        </Button>
      </div>
      
      <MegaMenuNavigation
        menuGroups={menuGroups}
        openGroups={openGroups}
        activeSection={activeSection}
        onToggleGroup={toggleGroup}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
};
