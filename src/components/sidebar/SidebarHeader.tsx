
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { getAppName, getCurrentTenant } from '../../config/tenant';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({
  isCollapsed,
  onToggleCollapse
}) => {
  const [tenant, setTenant] = useState(getCurrentTenant());
  const appName = getAppName(); // Always "JobBlox"

  useEffect(() => {
    // Listen for company settings changes
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'companySettings') {
        setTenant(getCurrentTenant());
      }
    };

    // Listen for custom storage events
    const handleCustomStorageChange = () => {
      setTenant(getCurrentTenant());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('storage', handleCustomStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('storage', handleCustomStorageChange);
    };
  }, []);

  return (
    <div className="flex items-center justify-between p-4 border-b border-border/40">
      {!isCollapsed && (
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {tenant.companyLogo ? (
            <img 
              src={tenant.companyLogo} 
              alt={`${tenant.companyName} Logo`} 
              className="h-8 w-8 object-contain flex-shrink-0"
            />
          ) : (
            <Building2 className="h-8 w-8 text-primary flex-shrink-0" />
          )}
          <div className="flex flex-col min-w-0">
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent truncate">
              {appName}
            </h1>
            {tenant.companyName !== appName && (
              <span className="text-xs text-muted-foreground truncate">
                {tenant.companyName}
              </span>
            )}
          </div>
        </div>
      )}
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggleCollapse}
        className="h-8 w-8 flex-shrink-0"
      >
        {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </Button>
    </div>
  );
};
