
interface TenantConfig {
  companyName: string;
  companyLogo?: string;
  contactInfo: {
    address: string;
    phone: string;
    email: string;
    website: string;
  };
  primaryColor: string;
  secondaryColor: string;
}

export const DEFAULT_TENANT_CONFIG: TenantConfig = {
  companyName: 'JobBlox',
  contactInfo: {
    address: '123 Business Street, City, State 12345',
    phone: '(555) 123-4567',
    email: 'info@jobblox.com',
    website: 'www.jobblox.com'
  },
  primaryColor: '#3B82F6',
  secondaryColor: '#8B5CF6'
};

export const getAppName = () => 'JobBlox';

export const getCurrentTenant = (): TenantConfig => {
  const saved = localStorage.getItem('companySettings');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      return {
        companyName: data.name || data.companyName || 'JobBlox',
        companyLogo: data.logo || null,
        contactInfo: {
          address: data.businessAddress || data.address || DEFAULT_TENANT_CONFIG.contactInfo.address,
          phone: data.phone || DEFAULT_TENANT_CONFIG.contactInfo.phone,
          email: data.email || DEFAULT_TENANT_CONFIG.contactInfo.email,
          website: data.website || DEFAULT_TENANT_CONFIG.contactInfo.website
        },
        primaryColor: data.primaryColor || DEFAULT_TENANT_CONFIG.primaryColor,
        secondaryColor: data.secondaryColor || DEFAULT_TENANT_CONFIG.secondaryColor
      };
    } catch (error) {
      console.error('Error parsing company settings:', error);
    }
  }
  
  return DEFAULT_TENANT_CONFIG;
};
