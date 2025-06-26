import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Settings, FileText, Database, Shield, Users, Building, Palette, Zap, Brain, BarChart3, Globe, Cog } from "lucide-react";
import { TemplateEditor } from "./TemplateEditor";
import { BusinessIntegrations } from "./BusinessIntegrations";

export const BackOfficeSettings = () => {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Settings className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Back Office Administration</h1>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-8">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="ai-automation">AI & Automation</TabsTrigger>
          <TabsTrigger value="reports-analytics">Reports & Analytics</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="system-admin">System Admin</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="cursor-pointer hover:bg-accent/50" onClick={() => setActiveTab('ai-automation')}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Brain className="h-5 w-5 text-blue-600" />
                  AI & Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Manage AI features, automation, and predictive analytics</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:bg-accent/50" onClick={() => setActiveTab('reports-analytics')}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Reports & Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Advanced reporting, analytics, and business insights</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:bg-accent/50" onClick={() => setActiveTab('integrations')}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Globe className="h-5 w-5 text-purple-600" />
                  Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Connect with external services and manage APIs</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:bg-accent/50" onClick={() => setActiveTab('system-admin')}>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Cog className="h-5 w-5 text-orange-600" />
                  System Admin
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Company settings, branches, users, and system configuration</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="ai-automation" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                AI & Automation Hub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">AI Chat Assistant</h3>
                  <p className="text-sm text-muted-foreground mb-3">Configure and manage AI-powered chat assistance</p>
                  <Button variant="outline" size="sm">Configure AI Chat</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Smart Document Generator</h3>
                  <p className="text-sm text-muted-foreground mb-3">AI-powered document creation and templates</p>
                  <Button variant="outline" size="sm">Manage Documents</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Predictive Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-3">AI-driven business predictions and insights</p>
                  <Button variant="outline" size="sm">View Analytics</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">AI Settings</h3>
                  <p className="text-sm text-muted-foreground mb-3">Configure AI models, prompts, and behavior</p>
                  <Button variant="outline" size="sm">AI Configuration</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports-analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Reports & Analytics Center
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Business Reports</h3>
                  <p className="text-sm text-muted-foreground mb-3">Generate comprehensive business performance reports</p>
                  <Button variant="outline" size="sm">View Reports</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Advanced Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-3">Deep dive analytics and custom dashboards</p>
                  <Button variant="outline" size="sm">Analytics Dashboard</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Map View Analytics</h3>
                  <p className="text-sm text-muted-foreground mb-3">Geographic analysis and location-based insights</p>
                  <Button variant="outline" size="sm">Map Analytics</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Advanced Reporting Tools</h3>
                  <p className="text-sm text-muted-foreground mb-3">Custom report builder and scheduled reports</p>
                  <Button variant="outline" size="sm">Report Builder</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Integrations Manager
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                    <h3 className="font-medium mb-2">QuickBooks Integration</h3>
                    <p className="text-sm text-muted-foreground mb-3">Connect and sync with QuickBooks accounting</p>
                    <Button variant="outline" size="sm">Configure QuickBooks</Button>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                    <h3 className="font-medium mb-2">Accounting Integration</h3>
                    <p className="text-sm text-muted-foreground mb-3">General accounting software connections</p>
                    <Button variant="outline" size="sm">Accounting Setup</Button>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                    <h3 className="font-medium mb-2">API Management</h3>
                    <p className="text-sm text-muted-foreground mb-3">Manage API keys and external connections</p>
                    <Button variant="outline" size="sm">API Settings</Button>
                  </div>
                  <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                    <h3 className="font-medium mb-2">Third-Party Services</h3>
                    <p className="text-sm text-muted-foreground mb-3">Connect with other business tools and services</p>
                    <Button variant="outline" size="sm">Browse Services</Button>
                  </div>
                </div>
                <BusinessIntegrations />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="system-admin" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Cog className="h-5 w-5" />
                System Administration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Company Settings</h3>
                  <p className="text-sm text-muted-foreground mb-3">Manage company information, branding, and general settings</p>
                  <Button variant="outline" size="sm">Company Config</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Branch Management</h3>
                  <p className="text-sm text-muted-foreground mb-3">Configure and manage multiple business locations</p>
                  <Button variant="outline" size="sm">Manage Branches</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">Mobile Settings</h3>
                  <p className="text-sm text-muted-foreground mb-3">Configure mobile app features and settings</p>
                  <Button variant="outline" size="sm">Mobile Config</Button>
                </div>
                <div className="p-4 border rounded-lg hover:bg-accent/50 cursor-pointer">
                  <h3 className="font-medium mb-2">User Management</h3>
                  <p className="text-sm text-muted-foreground mb-3">Manage team members, roles, and permissions</p>
                  <Button variant="outline" size="sm">User Admin</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <TemplateEditor />
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Security Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Access Control</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Manage user permissions and role-based access.
                  </p>
                  <Button variant="outline">Manage Permissions</Button>
                </div>
                <div>
                  <h3 className="font-medium mb-2">API Keys</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Manage API keys for integrations and external services.
                  </p>
                  <Button variant="outline">Manage API Keys</Button>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Audit Logs</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    View system access logs and user activity.
                  </p>
                  <Button variant="outline">View Logs</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">System Maintenance</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Perform system maintenance tasks and updates.
                  </p>
                  <Button variant="outline">System Maintenance</Button>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Performance Monitoring</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Monitor system performance and resource usage.
                  </p>
                  <Button variant="outline">View Performance</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
