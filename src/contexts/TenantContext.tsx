
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { TENANT_CONFIG, isSingleTenantMode } from '../config/tenant-mode';

export interface Tenant {
  id: string;
  name: string;
  logo?: string;
  subdomain?: string;
  features: {
    kanban: boolean;
    advancedReporting: boolean;
    multiUser: boolean;
  };
}

interface TenantContextType {
  currentTenant: Tenant | null;
  tenantId: string;
  isLoading: boolean;
  switchTenant: (tenantId: string) => void;
  availableTenants: Tenant[];
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const useTenant = () => {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenant must be used within a TenantProvider');
  }
  return context;
};

// Mock tenant data
const mockTenants: Tenant[] = [
  {
    id: 'acme-corp',
    name: 'Acme Corporation',
    subdomain: 'acme',
    features: {
      kanban: true,
      advancedReporting: true,
      multiUser: true,
    }
  },
  {
    id: 'beta-test',
    name: 'Beta Test Company',
    subdomain: 'beta',
    features: {
      kanban: false,
      advancedReporting: false,
      multiUser: true,
    }
  }
];

const getTenantFromUrl = (): string => {
  if (isSingleTenantMode()) {
    return TENANT_CONFIG.defaultTenantId;
  }

  // Try subdomain first
  if (TENANT_CONFIG.subdomainEnabled) {
    const hostname = window.location.hostname;
    const subdomain = hostname.split('.')[0];
    const tenant = mockTenants.find(t => t.subdomain === subdomain);
    if (tenant) return tenant.id;
  }

  // Try path prefix
  if (TENANT_CONFIG.pathPrefixEnabled) {
    const pathMatch = window.location.pathname.match(/^\/t\/([^\/]+)/);
    if (pathMatch) return pathMatch[1];
  }

  return TENANT_CONFIG.defaultTenantId;
};

interface TenantProviderProps {
  children: ReactNode;
}

export const TenantProvider: React.FC<TenantProviderProps> = ({ children }) => {
  const [currentTenant, setCurrentTenant] = useState<Tenant | null>(null);
  const [tenantId, setTenantId] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  const switchTenant = (newTenantId: string) => {
    if (isSingleTenantMode()) {
      console.warn('Tenant switching is disabled in single-tenant mode');
      return;
    }
    
    setTenantId(newTenantId);
    const tenant = mockTenants.find(t => t.id === newTenantId);
    setCurrentTenant(tenant || null);
    
    // Update URL if using path prefix
    if (TENANT_CONFIG.pathPrefixEnabled) {
      const newPath = `/t/${newTenantId}/dashboard`;
      window.history.pushState({}, '', newPath);
    }
  };

  useEffect(() => {
    const resolvedTenantId = getTenantFromUrl();
    setTenantId(resolvedTenantId);
    
    const tenant = mockTenants.find(t => t.id === resolvedTenantId);
    setCurrentTenant(tenant || {
      id: resolvedTenantId,
      name: 'Default Tenant',
      features: {
        kanban: true,
        advancedReporting: true,
        multiUser: true,
      }
    });
    
    setIsLoading(false);

    // Debug logging
    if (import.meta.env.DEV) {
      console.log('Tenant Context:', {
        mode: TENANT_CONFIG.mode,
        tenantId: resolvedTenantId,
        tenant: tenant,
        url: window.location.href
      });
    }
  }, []);

  const value = {
    currentTenant,
    tenantId,
    isLoading,
    switchTenant,
    availableTenants: isSingleTenantMode() ? [] : mockTenants,
  };

  return (
    <TenantContext.Provider value={value}>
      {children}
    </TenantContext.Provider>
  );
};
