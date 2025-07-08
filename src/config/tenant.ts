
interface TenantConfig {
  companyName: string;
  companyLogo?: string;
}

export const getAppName = () => 'JobBlox';

export const getCurrentTenant = (): TenantConfig => {
  const saved = localStorage.getItem('companySettings');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      return {
        companyName: data.name || 'JobBlox',
        companyLogo: data.logo || null
      };
    } catch (error) {
      console.error('Error parsing company settings:', error);
    }
  }
  
  return {
    companyName: 'JobBlox'
  };
};
