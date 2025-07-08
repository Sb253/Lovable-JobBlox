
export type TenantMode = 'single' | 'multi';

export interface TenantConfig {
  mode: TenantMode;
  defaultTenantId: string;
  enableDebugToggle: boolean;
  subdomainEnabled: boolean;
  pathPrefixEnabled: boolean;
}

// Get tenant mode from environment or default to single
const getTenantMode = (): TenantMode => {
  const mode = import.meta.env.VITE_TENANT_MODE as TenantMode;
  return mode === 'multi' ? 'multi' : 'single';
};

export const TENANT_CONFIG: TenantConfig = {
  mode: getTenantMode(),
  defaultTenantId: 'acme-corp',
  enableDebugToggle: import.meta.env.DEV,
  subdomainEnabled: true,
  pathPrefixEnabled: true,
};

export const isSingleTenantMode = () => TENANT_CONFIG.mode === 'single';
export const isMultiTenantMode = () => TENANT_CONFIG.mode === 'multi';
