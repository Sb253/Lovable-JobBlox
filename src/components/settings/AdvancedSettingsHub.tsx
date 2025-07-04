
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { 
  Settings, 
  Building, 
  Users, 
  Shield, 
  Bell, 
  Palette, 
  Globe, 
  Database,
  Mail,
  Smartphone,
  Monitor,
  Zap,
  FileText,
  Clock,
  MapPin,
  CreditCard,
  Workflow,
  Activity
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const AdvancedSettingsHub = () => {
  const { toast } = useToast();
  const [settings, setSettings] = useState({
    company: {
      name: 'JobBlox Construction',
      address: '123 Main St, City, State 12345',
      phone: '(555) 123-4567',
      email: 'info@jobblox.com',
      website: 'www.jobblox.com',
      timezone: 'America/New_York',
      businessHours: '8:00 AM - 6:00 PM',
      logo: null
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true,
      webhookNotifications: true,
      digestFrequency: 'daily'
    },
    security: {
      twoFactorAuth: true,
      sessionTimeout: 30,
      passwordComplexity: 'high',
      auditLogging: true,
      ipWhitelist: '',
      apiRateLimit: 1000
    },
    system: {
      maintenanceMode: false,
      debugMode: false,
      logLevel: 'info',
      backupFrequency: 'daily',
      dataRetention: 365,
      cacheTimeout: 3600
    },
    integrations: {
      autoSync: true,
      syncInterval: 15,
      retryAttempts: 3,
      webhookTimeout: 30,
      rateLimitBypass: false
    },
    ui: {
      theme: 'system',
      compactMode: false,
      showWelcomeMessage: true,
      defaultDashboard: 'overview',
      itemsPerPage: 25
    }
  });

  const handleSave = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `${section} settings have been updated successfully.`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Advanced Settings</h1>
          <p className="text-muted-foreground">
            Configure all aspects of your platform
          </p>
        </div>
        <Button>
          <Activity className="h-4 w-4 mr-2" />
          System Status
        </Button>
      </div>

      <Tabs defaultValue="company" className="space-y-4">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="system">System</TabsTrigger>
          <TabsTrigger value="ui">Interface</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="company" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input
                    id="companyName"
                    value={settings.company.name}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      company: { ...prev.company, name: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="companyPhone">Phone Number</Label>
                  <Input
                    id="companyPhone"
                    value={settings.company.phone}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      company: { ...prev.company, phone: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="companyEmail">Email Address</Label>
                  <Input
                    id="companyEmail"
                    type="email"
                    value={settings.company.email}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      company: { ...prev.company, email: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="companyWebsite">Website</Label>
                  <Input
                    id="companyWebsite"
                    value={settings.company.website}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      company: { ...prev.company, website: e.target.value }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select
                    value={settings.company.timezone}
                    onValueChange={(value) => setSettings(prev => ({
                      ...prev,
                      company: { ...prev.company, timezone: value }
                    }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time</SelectItem>
                      <SelectItem value="America/Chicago">Central Time</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="businessHours">Business Hours</Label>
                  <Input
                    id="businessHours"
                    value={settings.company.businessHours}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      company: { ...prev.company, businessHours: e.target.value }
                    }))}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="companyAddress">Address</Label>
                <Textarea
                  id="companyAddress"
                  value={settings.company.address}
                  onChange={(e) => setSettings(prev => ({
                    ...prev,
                    company: { ...prev.company, address: e.target.value }
                  }))}
                />
              </div>
              <Button onClick={() => handleSave('Company')}>
                Save Company Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  User Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Allow User Registration</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Email Verification Required</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Admin Approval Required</Label>
                  <Switch />
                </div>
                <div>
                  <Label htmlFor="defaultRole">Default User Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Access Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Role-Based Access Control</Label>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Department Restrictions</Label>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <Label>IP Address Restrictions</Label>
                  <Switch />
                </div>
                <Button className="w-full">Manage Permissions</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  Authentication
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Two-Factor Authentication</Label>
                  <Switch 
                    checked={settings.security.twoFactorAuth}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, twoFactorAuth: checked }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                  <Input
                    id="sessionTimeout"
                    type="number"
                    value={settings.security.sessionTimeout}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, sessionTimeout: parseInt(e.target.value) }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="passwordComplexity">Password Complexity</Label>
                  <Select
                    value={settings.security.passwordComplexity}
                    onValueChange={(value) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, passwordComplexity: value }
                    }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Security Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Audit Logging</Label>
                  <Switch 
                    checked={settings.security.auditLogging}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, auditLogging: checked }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="apiRateLimit">API Rate Limit (per hour)</Label>
                  <Input
                    id="apiRateLimit"
                    type="number"
                    value={settings.security.apiRateLimit}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, apiRateLimit: parseInt(e.target.value) }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="ipWhitelist">IP Whitelist</Label>
                  <Textarea
                    id="ipWhitelist"
                    placeholder="Enter IP addresses, one per line"
                    value={settings.security.ipWhitelist}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      security: { ...prev.security, ipWhitelist: e.target.value }
                    }))}
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Email Notifications</Label>
                    <Switch 
                      checked={settings.notifications.emailNotifications}
                      onCheckedChange={(checked) => setSettings(prev => ({
                        ...prev,
                        notifications: { ...prev.notifications, emailNotifications: checked }
                      }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>SMS Notifications</Label>
                    <Switch 
                      checked={settings.notifications.smsNotifications}
                      onCheckedChange={(checked) => setSettings(prev => ({
                        ...prev,
                        notifications: { ...prev.notifications, smsNotifications: checked }
                      }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Push Notifications</Label>
                    <Switch 
                      checked={settings.notifications.pushNotifications}
                      onCheckedChange={(checked) => setSettings(prev => ({
                        ...prev,
                        notifications: { ...prev.notifications, pushNotifications: checked }
                      }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Webhook Notifications</Label>
                    <Switch 
                      checked={settings.notifications.webhookNotifications}
                      onCheckedChange={(checked) => setSettings(prev => ({
                        ...prev,
                        notifications: { ...prev.notifications, webhookNotifications: checked }
                      }))}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="digestFrequency">Digest Frequency</Label>
                    <Select
                      value={settings.notifications.digestFrequency}
                      onValueChange={(value) => setSettings(prev => ({
                        ...prev,
                        notifications: { ...prev.notifications, digestFrequency: value }
                      }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="realtime">Real-time</SelectItem>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">Configure Email Templates</Button>
                  <Button variant="outline" className="w-full">Test Notifications</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Integration Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label>Auto-Sync Enabled</Label>
                    <Switch 
                      checked={settings.integrations.autoSync}
                      onCheckedChange={(checked) => setSettings(prev => ({
                        ...prev,
                        integrations: { ...prev.integrations, autoSync: checked }
                      }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="syncInterval">Sync Interval (minutes)</Label>
                    <Input
                      id="syncInterval"
                      type="number"
                      value={settings.integrations.syncInterval}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        integrations: { ...prev.integrations, syncInterval: parseInt(e.target.value) }
                      }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="retryAttempts">Retry Attempts</Label>
                    <Input
                      id="retryAttempts"
                      type="number"
                      value={settings.integrations.retryAttempts}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        integrations: { ...prev.integrations, retryAttempts: parseInt(e.target.value) }
                      }))}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="webhookTimeout">Webhook Timeout (seconds)</Label>
                    <Input
                      id="webhookTimeout"
                      type="number"
                      value={settings.integrations.webhookTimeout}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        integrations: { ...prev.integrations, webhookTimeout: parseInt(e.target.value) }
                      }))}
                    />
                  </div>
                  <Button className="w-full">Configure Webhooks</Button>
                  <Button variant="outline" className="w-full">API Documentation</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  System Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Maintenance Mode</Label>
                  <Switch 
                    checked={settings.system.maintenanceMode}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      system: { ...prev.system, maintenanceMode: checked }
                    }))}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <Label>Debug Mode</Label>
                  <Switch 
                    checked={settings.system.debugMode}
                    onCheckedChange={(checked) => setSettings(prev => ({
                      ...prev,
                      system: { ...prev.system, debugMode: checked }
                    }))}
                  />
                </div>
                <div>
                  <Label htmlFor="logLevel">Log Level</Label>
                  <Select
                    value={settings.system.logLevel}
                    onValueChange={(value) => setSettings(prev => ({
                      ...prev,
                      system: { ...prev.system, logLevel: value }
                    }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="error">Error</SelectItem>
                      <SelectItem value="warn">Warning</SelectItem>
                      <SelectItem value="info">Info</SelectItem>
                      <SelectItem value="debug">Debug</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Data Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="backupFrequency">Backup Frequency</Label>
                  <Select
                    value={settings.system.backupFrequency}
                    onValueChange={(value) => setSettings(prev => ({
                      ...prev,
                      system: { ...prev.system, backupFrequency: value }
                    }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Hourly</SelectItem>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dataRetention">Data Retention (days)</Label>
                  <Input
                    id="dataRetention"
                    type="number"
                    value={settings.system.dataRetention}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      system: { ...prev.system, dataRetention: parseInt(e.target.value) }
                    }))}
                  />
                </div>
                <Button className="w-full">Create Backup Now</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ui" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                User Interface
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="theme">Theme</Label>
                    <Select
                      value={settings.ui.theme}
                      onValueChange={(value) => setSettings(prev => ({
                        ...prev,
                        ui: { ...prev.ui, theme: value }
                      }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Compact Mode</Label>
                    <Switch 
                      checked={settings.ui.compactMode}
                      onCheckedChange={(checked) => setSettings(prev => ({
                        ...prev,
                        ui: { ...prev.ui, compactMode: checked }
                      }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label>Show Welcome Message</Label>
                    <Switch 
                      checked={settings.ui.showWelcomeMessage}
                      onCheckedChange={(checked) => setSettings(prev => ({
                        ...prev,
                        ui: { ...prev.ui, showWelcomeMessage: checked }
                      }))}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="defaultDashboard">Default Dashboard</Label>
                    <Select
                      value={settings.ui.defaultDashboard}
                      onValueChange={(value) => setSettings(prev => ({
                        ...prev,
                        ui: { ...prev.ui, defaultDashboard: value }
                      }))}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="overview">Overview</SelectItem>
                        <SelectItem value="analytics">Analytics</SelectItem>
                        <SelectItem value="projects">Projects</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="itemsPerPage">Items Per Page</Label>
                    <Input
                      id="itemsPerPage"
                      type="number"
                      value={settings.ui.itemsPerPage}
                      onChange={(e) => setSettings(prev => ({
                        ...prev,
                        ui: { ...prev.ui, itemsPerPage: parseInt(e.target.value) }
                      }))}
                    />
                  </div>
                  <Button className="w-full">Customize Dashboard</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="cacheTimeout">Cache Timeout (seconds)</Label>
                  <Input
                    id="cacheTimeout"
                    type="number"
                    value={settings.system.cacheTimeout}
                    onChange={(e) => setSettings(prev => ({
                      ...prev,
                      system: { ...prev.system, cacheTimeout: parseInt(e.target.value) }
                    }))}
                  />
                </div>
                <Button className="w-full">Clear Cache</Button>
                <Button variant="outline" className="w-full">Performance Report</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  System Logs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">View System Logs</Button>
                <Button variant="outline" className="w-full">Download Logs</Button>
                <Button variant="outline" className="w-full">Clear Logs</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
