
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plug, Search, Check, AlertTriangle, ExternalLink } from "lucide-react";

export const IntegrationsHub = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [integrations] = useState([
    {
      id: 'quickbooks',
      name: 'QuickBooks Online',
      description: 'Sync your financial data with QuickBooks',
      category: 'accounting',
      status: 'connected',
      icon: '📊',
      popular: true
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'Accept payments online',
      category: 'payments',
      status: 'available',
      icon: '💳',
      popular: true
    },
    {
      id: 'gmail',
      name: 'Gmail',
      description: 'Send emails from your Gmail account',
      category: 'communication',
      status: 'connected',
      icon: '📧',
      popular: false
    },
    {
      id: 'zapier',
      name: 'Zapier',
      description: 'Connect with 5000+ apps',
      category: 'automation',
      status: 'available',
      icon: '⚡',
      popular: true
    },
    {
      id: 'slack',
      name: 'Slack',
      description: 'Team communication and notifications',
      category: 'communication',
      status: 'available',
      icon: '💬',
      popular: false
    },
    {
      id: 'google-calendar',
      name: 'Google Calendar',
      description: 'Sync your jobs with Google Calendar',
      category: 'scheduling',
      status: 'connected',
      icon: '📅',
      popular: true
    }
  ]);

  const filteredIntegrations = integrations.filter(integration =>
    integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    integration.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-800">Connected</Badge>;
      case 'available':
        return <Badge variant="outline">Available</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const categories = [
    { id: 'all', name: 'All Integrations', count: integrations.length },
    { id: 'popular', name: 'Popular', count: integrations.filter(i => i.popular).length },
    { id: 'connected', name: 'Connected', count: integrations.filter(i => i.status === 'connected').length },
    { id: 'accounting', name: 'Accounting', count: integrations.filter(i => i.category === 'accounting').length },
    { id: 'payments', name: 'Payments', count: integrations.filter(i => i.category === 'payments').length },
    { id: 'communication', name: 'Communication', count: integrations.filter(i => i.category === 'communication').length }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Plug className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Integrations</h1>
        </div>
        <Button>
          <ExternalLink className="h-4 w-4 mr-2" />
          Browse All
        </Button>
      </div>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList className="grid w-full grid-cols-6">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.name} ({category.count})
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="all">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration) => (
              <Card key={integration.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{integration.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        {integration.popular && (
                          <Badge variant="secondary" className="text-xs mt-1">Popular</Badge>
                        )}
                      </div>
                    </div>
                    {getStatusBadge(integration.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {integration.category}
                    </Badge>
                    {integration.status === 'connected' ? (
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    ) : (
                      <Button size="sm">
                        Connect
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="popular">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.filter(i => i.popular).map((integration) => (
              <Card key={integration.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{integration.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{integration.name}</CardTitle>
                        <Badge variant="secondary" className="text-xs mt-1">Popular</Badge>
                      </div>
                    </div>
                    {getStatusBadge(integration.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{integration.description}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {integration.category}
                    </Badge>
                    {integration.status === 'connected' ? (
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    ) : (
                      <Button size="sm">
                        Connect
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="connected">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Connected Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {integrations.filter(i => i.status === 'connected').map((integration) => (
                    <div key={integration.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="text-2xl">{integration.icon}</div>
                        <div>
                          <h3 className="font-semibold">{integration.name}</h3>
                          <p className="text-sm text-muted-foreground">{integration.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Switch defaultChecked />
                        <Button variant="outline" size="sm">
                          Settings
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          Disconnect
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
