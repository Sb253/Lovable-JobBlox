
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Building2, ChevronDown } from "lucide-react";
import { useTenant } from '../../contexts/TenantContext';
import { isMultiTenantMode, TENANT_CONFIG } from '../../config/tenant-mode';

export const TenantHeader: React.FC = () => {
  const { currentTenant, availableTenants, switchTenant } = useTenant();
  const [debugMode, setDebugMode] = useState(false);

  // Show debug toggle only in development
  const showDebugToggle = TENANT_CONFIG.enableDebugToggle && import.meta.env.DEV;

  if (!currentTenant) return null;

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        {currentTenant.logo ? (
          <img 
            src={currentTenant.logo} 
            alt={`${currentTenant.name} Logo`} 
            className="h-8 w-8 object-contain"
          />
        ) : (
          <Building2 className="h-8 w-8 text-primary" />
        )}
        <div className="flex flex-col">
          <span className="font-semibold">{currentTenant.name}</span>
          <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs">
              {TENANT_CONFIG.mode}
            </Badge>
            {import.meta.env.DEV && (
              <Badge variant="secondary" className="text-xs">
                {currentTenant.id}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Tenant Switcher - Only show in multi-tenant mode */}
      {isMultiTenantMode() && availableTenants.length > 1 && (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              Switch Tenant
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {availableTenants.map((tenant) => (
              <DropdownMenuItem
                key={tenant.id}
                onClick={() => switchTenant(tenant.id)}
                className={tenant.id === currentTenant.id ? 'bg-accent' : ''}
              >
                <Building2 className="h-4 w-4 mr-2" />
                {tenant.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )}

      {/* Debug Toggle - Development only */}
      {showDebugToggle && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setDebugMode(!debugMode)}
          className="text-xs"
        >
          Debug: {debugMode ? 'ON' : 'OFF'}
        </Button>
      )}
    </div>
  );
};
