
import { useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { SidebarHeader } from "./sidebar/SidebarHeader";
import { SidebarSearch } from "./sidebar/SidebarSearch";
import { SidebarDashboard } from "./sidebar/SidebarDashboard";
import { SidebarNavigation } from "./sidebar/SidebarNavigation";
import { useSidebarState } from "../hooks/useSidebarState";
import { createMenuGroups, SidebarSection } from "./sidebar/config/menuGroupsConfig";

interface UnifiedSidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  sections: SidebarSection[];
  isVisible?: boolean;
  hasOwnerAccess?: boolean;
}

export const UnifiedSidebar = ({ 
  activeSection, 
  onSectionChange, 
  sections, 
  isVisible = true,
  hasOwnerAccess = false
}: UnifiedSidebarProps) => {
  const {
    isCollapsed,
    searchTerm,
    openGroups,
    setSearchTerm,
    setOpenGroups,
    toggleCollapse,
    toggleGroup
  } = useSidebarState(activeSection);

  // Memoize menu groups
  const menuGroups = useMemo(() => createMenuGroups(sections), [sections]);

  // Filter sections based on search
  const filteredGroups = useMemo(() => 
    menuGroups.map(group => ({
      ...group,
      sections: group.sections.filter(section =>
        section.label.toLowerCase().includes(searchTerm.toLowerCase())
      )
    })).filter(group => group.sections.length > 0),
    [menuGroups, searchTerm]
  );

  const handleSectionClick = (sectionId: string) => {
    console.log('UnifiedSidebar: Section clicked:', sectionId);
    onSectionChange(sectionId);
  };

  // Auto-expand group containing active section
  useEffect(() => {
    const activeGroup = menuGroups.find(group => 
      group.sections.some(section => section.id === activeSection)
    );
    if (activeGroup && !openGroups.includes(activeGroup.id)) {
      setOpenGroups(prev => [...prev, activeGroup.id]);
    }
  }, [activeSection, menuGroups, openGroups, setOpenGroups]);

  if (!isVisible) {
    return null;
  }

  return (
    <div 
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border/40 z-20 transition-all duration-300 ease-in-out",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <SidebarHeader 
        isCollapsed={isCollapsed}
        onToggleCollapse={toggleCollapse}
      />

      <SidebarSearch 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        isCollapsed={isCollapsed}
      />

      <SidebarDashboard 
        activeSection={activeSection}
        onSectionClick={handleSectionClick}
        isCollapsed={isCollapsed}
      />

      <SidebarNavigation
        filteredGroups={filteredGroups}
        openGroups={openGroups}
        activeSection={activeSection}
        onToggleGroup={toggleGroup}
        onSectionClick={handleSectionClick}
        isCollapsed={isCollapsed}
      />
    </div>
  );
};
