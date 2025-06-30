// Single-tenant configuration for JobBlox
// This file manages company branding while keeping JobBlox as the locked app name

export interface TenantConfig {
  tenantId: string;
  companyName: string;
  companyLogo?: string;
  primaryColor: string;
  secondaryColor: string;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
    address: string;
  };
}

// Default configuration for Peak Pros Roofing & Construction
export const DEFAULT_TENANT_CONFIG: TenantConfig = {
  tenantId: 'peak-pros',
  companyName: 'Peak Pros Roofing & Construction',
  companyLogo: undefined, // Can be set via company settings
  primaryColor: '#3B82F6',
  secondaryColor: '#8B5CF6',
  contactInfo: {
    phone: '(555) 123-4567',
    email: 'info@peakprosroofing.com',
    website: 'www.peakprosroofing.com',
    address: '123 Construction Ave, City, State 12345'
  }
};

// App branding - LOCKED to JobBlox
export const APP_BRANDING = {
  appName: 'JobBlox',
  appVersion: '2.0.0',
  appDescription: 'Complete Construction Management Platform'
} as const;

// Single tenant mode - always return the same tenant
export const getCurrentTenant = (): TenantConfig => {
  // Try to get saved company settings from localStorage
  const savedSettings = localStorage.getItem('companySettings');
  if (savedSettings) {
    try {
      const settings = JSON.parse(savedSettings);
      return {
        ...DEFAULT_TENANT_CONFIG,
        companyName: settings.companyName || settings.name || DEFAULT_TENANT_CONFIG.companyName,
        companyLogo: settings.logo,
        primaryColor: settings.primaryColor || DEFAULT_TENANT_CONFIG.primaryColor,
        secondaryColor: settings.secondaryColor || DEFAULT_TENANT_CONFIG.secondaryColor,
        contactInfo: {
          phone: settings.phone || DEFAULT_TENANT_CONFIG.contactInfo.phone,
          email: settings.email || DEFAULT_TENANT_CONFIG.contactInfo.email,
          website: settings.website || DEFAULT_TENANT_CONFIG.contactInfo.website,
          address: settings.businessAddress || DEFAULT_TENANT_CONFIG.contactInfo.address
        }
      };
    } catch (error) {
      console.error('Error parsing company settings:', error);
    }
  }
  
  return DEFAULT_TENANT_CONFIG;
};

// Utility to get app name (always JobBlox)
export const getAppName = () => APP_BRANDING.appName;

// Utility to get company name (configurable)
export const getCompanyName = () => getCurrentTenant().companyName;
