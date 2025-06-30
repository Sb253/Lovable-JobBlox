
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Upload, Building2, Save, Palette, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getAppName, getCurrentTenant, DEFAULT_TENANT_CONFIG } from '../config/tenant';

export const CompanySettings = () => {
  const { toast } = useToast();
  const appName = getAppName(); // Always "JobBlox"
  
  const [companyData, setCompanyData] = useState(() => {
    const tenant = getCurrentTenant();
    return {
      name: tenant.companyName,
      address: tenant.contactInfo.address,
      phone: tenant.contactInfo.phone,
      email: tenant.contactInfo.email,
      website: tenant.contactInfo.website,
      logo: tenant.companyLogo || null,
      primaryColor: tenant.primaryColor,
      secondaryColor: tenant.secondaryColor,
    };
  });

  useEffect(() => {
    const savedSettings = localStorage.getItem('companySettings');
    if (savedSettings) {
      try {
        const data = JSON.parse(savedSettings);
        setCompanyData(prev => ({ 
          ...prev, 
          ...data,
          companyName: data.companyName || data.name || prev.name
        }));
      } catch (error) {
        console.error('Error loading company settings:', error);
      }
    }
  }, []);

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCompanyData(prev => ({ ...prev, logo: e.target?.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    const settingsToSave = {
      companyName: companyData.name,
      name: companyData.name, // For backwards compatibility
      businessAddress: companyData.address,
      phone: companyData.phone,
      email: companyData.email,
      website: companyData.website,
      logo: companyData.logo,
      primaryColor: companyData.primaryColor,
      secondaryColor: companyData.secondaryColor,
    };
    
    localStorage.setItem('companySettings', JSON.stringify(settingsToSave));
    
    // Dispatch a custom event to notify other components
    window.dispatchEvent(new Event('storage'));
    
    toast({
      title: "Settings Saved",
      description: "Company settings have been updated successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Building2 className="h-6 w-6" />
        <h2 className="text-2xl font-bold">Company Settings</h2>
      </div>

      {/* Info Banner */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900">Single-Tenant Mode</h3>
              <p className="text-sm text-blue-800 mt-1">
                The platform name "{appName}" is locked system-wide. You can customize your company information below to brand the platform for your organization.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Company Logo */}
        <Card>
          <CardHeader>
            <CardTitle>Company Logo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                {companyData.logo ? (
                  <img src={companyData.logo} alt="Company Logo" className="h-24 w-auto object-contain" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> your logo
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG (MAX. 2MB)</p>
                  </div>
                )}
                <input type="file" className="hidden" onChange={handleLogoUpload} accept="image/*" />
              </label>
            </div>
          </CardContent>
        </Card>

        {/* Branding Colors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Brand Colors
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="primaryColor">Primary Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="primaryColor"
                    type="color"
                    value={companyData.primaryColor}
                    onChange={(e) => setCompanyData(prev => ({ 
                      ...prev, 
                      primaryColor: e.target.value 
                    }))}
                    className="w-16 h-10"
                  />
                  <Input
                    value={companyData.primaryColor}
                    onChange={(e) => setCompanyData(prev => ({ 
                      ...prev, 
                      primaryColor: e.target.value 
                    }))}
                    className="flex-1"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="secondaryColor">Secondary Color</Label>
                <div className="flex gap-2">
                  <Input
                    id="secondaryColor"
                    type="color"
                    value={companyData.secondaryColor}
                    onChange={(e) => setCompanyData(prev => ({ 
                      ...prev, 
                      secondaryColor: e.target.value 
                    }))}
                    className="w-16 h-10"
                  />
                  <Input
                    value={companyData.secondaryColor}
                    onChange={(e) => setCompanyData(prev => ({ 
                      ...prev, 
                      secondaryColor: e.target.value 
                    }))}
                    className="flex-1"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name</Label>
              <Input
                id="companyName"
                value={companyData.name}
                onChange={(e) => setCompanyData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Peak Pros Roofing & Construction"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={companyData.website}
                onChange={(e) => setCompanyData(prev => ({ ...prev, website: e.target.value }))}
                placeholder="www.peakprosroofing.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Business Address</Label>
            <Input
              id="address"
              value={companyData.address}
              onChange={(e) => setCompanyData(prev => ({ ...prev, address: e.target.value }))}
              placeholder="123 Construction Ave, City, State 12345"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={companyData.phone}
                onChange={(e) => setCompanyData(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="(555) 123-4567"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={companyData.email}
                onChange={(e) => setCompanyData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="info@peakprosroofing.com"
              />
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
