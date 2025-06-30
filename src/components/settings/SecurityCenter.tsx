
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, Key, AlertTriangle, Eye, EyeOff, Check, X, Smartphone, Globe } from "lucide-react";

export const SecurityCenter = () => {
  const [showApiKey, setShowApiKey] = useState(false);
  const [securitySettings, setSecuritySettings] = useState({
    twoFactorEnabled: false,
    loginNotifications: true,
    deviceTracking: true,
    sessionTimeout: 30,
    requirePasswordChange: false
  });

  const securityEvents = [
    { id: 1, event: 'Successful login', device: 'Chrome on Windows', location: 'New York, NY', time: '2 minutes ago', severity: 'low' },
    { id: 2, event: 'Password changed', device: 'Mobile App', location: 'New York, NY', time: '1 day ago', severity: 'medium' },
    { id: 3, event: 'Failed login attempt', device: 'Unknown', location: 'Los Angeles, CA', time: '3 days ago', severity: 'high' },
    { id: 4, event: 'New device login', device: 'Safari on Mac', location: 'New York, NY', time: '1 week ago', severity: 'medium' }
  ];

  const activeSessions = [
    { id: 1, device: 'Chrome on Windows', location: 'New York, NY', lastActive: 'Active now', current: true },
    { id: 2, device: 'Mobile App (iOS)', location: 'New York, NY', lastActive: '2 hours ago', current: false },
    { id: 3, device: 'Safari on Mac', location: 'New York, NY', lastActive: '1 day ago', current: false }
  ];

  const apiKeys = [
    { id: 1, name: 'Production API', key: 'sk_live_...7f8g9h', created: '2024-01-15', lastUsed: '2 hours ago', status: 'active' },
    { id: 2, name: 'Development API', key: 'sk_test_...3d4e5f', created: '2024-01-10', lastUsed: '1 day ago', status: 'active' },
    { id: 3, name: 'Mobile App API', key: 'sk_mobile_...1a2b3c', created: '2024-01-01', lastUsed: 'Never', status: 'inactive' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold">Security Center</h1>
        </div>
        <Badge className="bg-green-100 text-green-800">
          Security Score: 85/100
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="sessions">Active Sessions</TabsTrigger>
          <TabsTrigger value="api-keys">API Keys</TabsTrigger>
          <TabsTrigger value="activity">Security Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-green-600" />
                  Account Security
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Two-Factor Auth</span>
                    {securitySettings.twoFactorEnabled ? (
                      <Check className="h-4 w-4 text-green-600" />
                    ) : (
                      <X className="h-4 w-4 text-red-600" />
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Strong Password</span>
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Login Notifications</span>
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <Smartphone className="h-5 w-5 mr-2 text-blue-600" />
                  Active Devices
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{activeSessions.length}</div>
                  <p className="text-sm text-muted-foreground">devices logged in</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    Manage Devices
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-orange-600" />
                  Security Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">
                    {securityEvents.filter(e => e.severity === 'high').length}
                  </div>
                  <p className="text-sm text-muted-foreground">high priority alerts</p>
                  <Button variant="outline" size="sm" className="mt-3">
                    View Activity
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Security Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {!securitySettings.twoFactorEnabled && (
                  <div className="flex items-start space-x-3 p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-yellow-800">Enable Two-Factor Authentication</h4>
                      <p className="text-sm text-yellow-700 mt-1">Add an extra layer of security to your account</p>
                      <Button size="sm" className="mt-2">
                        Enable 2FA
                      </Button>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start space-x-3 p-4 border border-blue-200 bg-blue-50 rounded-lg">
                  <Key className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <h4 className="font-medium text-blue-800">Regular Password Updates</h4>
                    <p className="text-sm text-blue-700 mt-1">Consider changing your password every 90 days</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Change Password
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="authentication">
          <Card>
            <CardHeader>
              <CardTitle>Authentication Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Require a second form of authentication</p>
                </div>
                <Switch
                  checked={securitySettings.twoFactorEnabled}
                  onCheckedChange={(checked) => 
                    setSecuritySettings(prev => ({ ...prev, twoFactorEnabled: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Login Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get notified of new login attempts</p>
                </div>
                <Switch
                  checked={securitySettings.loginNotifications}
                  onCheckedChange={(checked) => 
                    setSecuritySettings(prev => ({ ...prev, loginNotifications: checked }))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base font-medium">Device Tracking</Label>
                  <p className="text-sm text-muted-foreground">Track devices used to access your account</p>
                </div>
                <Switch
                  checked={securitySettings.deviceTracking}
                  onCheckedChange={(checked) => 
                    setSecuritySettings(prev => ({ ...prev, deviceTracking: checked }))
                  }
                />
              </div>

              <div className="space-y-2">
                <Label>Session Timeout (minutes)</Label>
                <Input
                  type="number"
                  value={securitySettings.sessionTimeout}
                  onChange={(e) => 
                    setSecuritySettings(prev => ({ ...prev, sessionTimeout: parseInt(e.target.value) }))
                  }
                  className="w-32"
                />
                <p className="text-sm text-muted-foreground">Automatically log out after this period of inactivity</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sessions">
          <Card>
            <CardHeader>
              <CardTitle>Active Sessions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activeSessions.map((session) => (
                  <div key={session.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Smartphone className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">{session.device}</h4>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Globe className="h-4 w-4 mr-1" />
                            {session.location}
                          </span>
                          <span>{session.lastActive}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {session.current && (
                        <Badge className="bg-green-100 text-green-800">
                          Current Session
                        </Badge>
                      )}
                      {!session.current && (
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Revoke
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <Button variant="outline" className="w-full">
                  Revoke All Other Sessions
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="api-keys">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>API Keys</CardTitle>
                <Button>
                  <Key className="h-4 w-4 mr-2" />
                  Generate New Key
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium">{apiKey.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <code className="text-sm bg-muted px-2 py-1 rounded">
                          {showApiKey ? apiKey.key : '••••••••••••••••'}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-2">
                        <span>Created: {apiKey.created}</span>
                        <span>Last used: {apiKey.lastUsed}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant={apiKey.status === 'active' ? 'default' : 'secondary'}>
                        {apiKey.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        Delete
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card>
            <CardHeader>
              <CardTitle>Security Activity Log</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {securityEvents.map((event) => (
                  <div key={event.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                      <Shield className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{event.event}</h4>
                        <Badge className={getSeverityColor(event.severity)}>
                          {event.severity}
                        </Badge>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <span>{event.device}</span>
                        <span>{event.location}</span>
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
