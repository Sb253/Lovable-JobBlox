import React, { useState, useEffect } from 'react';
import { AppHeader } from "../AppHeader";
import { UnifiedSidebar } from "../UnifiedSidebar";
import { SectionRenderer } from "./SectionRenderer";
import { sections, Section } from "./SectionTypes";
import { OwnerAccess } from "../admin/OwnerAccess";
import { useAuth } from "../../contexts/AuthContext";

// Convert Section to SidebarSection format
const mapSectionsToSidebarSections = (sections: Section[]) => {
  return sections.map(section => ({
    id: section.id,
    label: section.title, // Map title to label
    icon: section.icon
  }));
};

export const ResponsiveLayout = () => {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarWidth, setSidebarWidth] = useState(256);
  const [needsOwnerAccess, setNeedsOwnerAccess] = useState(false);
  const [hasOwnerAccess, setHasOwnerAccess] = useState(false);

  // Convert sections for sidebar
  const sidebarSections = mapSectionsToSidebarSections(sections);

  useEffect(() => {
    // Load saved active section
    const savedSection = localStorage.getItem('activeSection');
    if (savedSection && sections.find(s => s.id === savedSection)) {
      setActiveSection(savedSection);
    }

    // Check if user needs owner access for admin functions
    const ownerAccess = localStorage.getItem('ownerAccess') === 'true';
    setHasOwnerAccess(ownerAccess);

    // Listen for sidebar width changes
    const handleSidebarToggle = () => {
      const isCollapsed = JSON.parse(localStorage.getItem('sidebarCollapsed') || 'false');
      setSidebarWidth(isCollapsed ? 64 : 256);
    };

    handleSidebarToggle();
    window.addEventListener('storage', handleSidebarToggle);
    window.addEventListener('sidebarToggle', handleSidebarToggle);

    return () => {
      window.removeEventListener('storage', handleSidebarToggle);
      window.removeEventListener('sidebarToggle', handleSidebarToggle);
    };
  }, []);

  useEffect(() => {
    if (activeSection) {
      localStorage.setItem('activeSection', activeSection);
    }
  }, [activeSection]);

  const handleSectionChange = (section: string) => {
    // Check if section requires owner access
    const adminSections = ['admin-panel', 'user-management', 'system-settings'];
    
    if (adminSections.includes(section) && !hasOwnerAccess) {
      setNeedsOwnerAccess(true);
      return;
    }

    setActiveSection(section);
    const newUrl = section === 'home' ? '/' : `/${section}`;
    window.history.pushState({ section }, '', newUrl);
  };

  const handleOwnerAccessGranted = () => {
    localStorage.setItem('ownerAccess', 'true');
    setHasOwnerAccess(true);
    setNeedsOwnerAccess(false);
    setActiveSection('admin-panel');
  };

  // Handle browser navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const path = window.location.pathname;
      if (path === '/') {
        setActiveSection('home');
      } else {
        const section = path.slice(1);
        if (sections.find(s => s.id === section)) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (needsOwnerAccess) {
    return (
      <OwnerAccess 
        onAccessGranted={handleOwnerAccessGranted}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader onSectionChange={handleSectionChange} />
      
      <div className="flex flex-1">
        <UnifiedSidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          sections={sidebarSections}
          isVisible={true}
          hasOwnerAccess={hasOwnerAccess}
        />

        <main 
          className="flex-1 transition-all duration-300 pt-16" 
          style={{ marginLeft: `${sidebarWidth}px` }}
        >
          <SectionRenderer activeSection={activeSection} />
        </main>
      </div>
    </div>
  );
};
