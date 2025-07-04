import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Search, 
  Star, 
  Calendar, 
  Mail, 
  Camera,
  Home,
  FileText,
  Truck,
  Zap,
  MessageSquare,
  Building,
  CheckCircle,
  AlertCircle,
  Settings,
  Cloud,
  Users,
  MapPin,
  Phone,
  FileImage,
  Bot,
  Globe,
  Database,
  CreditCard,
  ExternalLink,
  Play,
  Pause,
  RotateCcw
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: any;
  connected: boolean;
  category: string;
  features: string[];
  apiKey?: string;
  status: 'active' | 'inactive' | 'error';
  lastSync?: string;
  connectionUrl?: string;
}

export const AdvancedIntegrationsHub = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIntegration, setSelectedIntegration] = useState<Integration | null>(null);
  const [apiKeyInput, setApiKeyInput] = useState('');
  const [isConnecting, setIsConnecting] = useState(false);

  const [integrations, setIntegrations] = useState<Integration[]>([
    // Sales, CRM & Lead Management
    { 
      id: 'salesrabbit', 
      name: 'SalesRabbit', 
      description: 'Door-to-door sales management and lead tracking', 
      icon: Users, 
      connected: false, 
      category: 'sales-crm', 
      features: ['Lead tracking', 'Door-to-door sales', 'Territory management'], 
      status: 'inactive' 
    },
    { 
      id: 'thumbtack', 
      name: 'Thumbtack', 
      description: 'Lead generation and customer matching service', 
      icon: Star, 
      connected: false, 
      category: 'sales-crm', 
      features: ['Lead generation', 'Customer matching', 'Quote requests'], 
      status: 'inactive' 
    },
    { 
      id: 'angi', 
      name: 'Angi', 
      description: 'Home services lead generation and reviews', 
      icon: Home, 
      connected: false, 
      category: 'sales-crm', 
      features: ['Lead generation', 'Customer reviews', 'Service requests'], 
      status: 'inactive' 
    },
    { 
      id: 'facebook-leads', 
      name: 'Facebook Lead Ads', 
      description: 'Social media lead generation and advertising', 
      icon: Users, 
      connected: false, 
      category: 'sales-crm', 
      features: ['Lead generation', 'Social advertising', 'Campaign management'], 
      status: 'inactive' 
    },
    { 
      id: 'google-local-services', 
      name: 'Google Local Services Ads', 
      description: 'Local advertising and lead generation', 
      icon: Search, 
      connected: false, 
      category: 'sales-crm', 
      features: ['Local advertising', 'Lead generation', 'Service visibility'], 
      status: 'inactive' 
    },

    // Project & Field Management
    { 
      id: 'companycam', 
      name: 'CompanyCam', 
      description: 'Photo documentation and project tracking', 
      icon: Camera, 
      connected: true, 
      category: 'project-field', 
      features: ['Photo organization', 'Project timeline', 'Client sharing'], 
      status: 'active',
      lastSync: '2 hours ago',
      apiKey: 'cc-key-***********'
    },
    { 
      id: 'eagleview', 
      name: 'EagleView', 
      description: 'Aerial imagery and property analysis', 
      icon: MapPin, 
      connected: false, 
      category: 'project-field', 
      features: ['Aerial imagery', 'Property analysis', 'Measurement tools'], 
      status: 'inactive' 
    },
    { 
      id: 'roofr', 
      name: 'Roofr', 
      description: 'Roofing measurement and estimation tool', 
      icon: Home, 
      connected: false, 
      category: 'project-field', 
      features: ['Roof measurements', 'Material estimates', 'Proposal generation'], 
      status: 'inactive' 
    },
    { 
      id: 'photo-id', 
      name: 'PHOTO iD by U Scope', 
      description: 'Professional photo documentation system', 
      icon: FileImage, 
      connected: false, 
      category: 'project-field', 
      features: ['Photo documentation', 'Before/after shots', 'Professional reporting'], 
      status: 'inactive' 
    },
    { 
      id: 'beacon-pro', 
      name: 'Beacon PRO+', 
      description: 'Material ordering and inventory management', 
      icon: Truck, 
      connected: false, 
      category: 'project-field', 
      features: ['Material ordering', 'Inventory tracking', 'Pricing updates'], 
      status: 'inactive' 
    },
    { 
      id: 'qxo', 
      name: 'QXO (formerly Beacon)', 
      description: 'Building materials and supply chain management', 
      icon: Building, 
      connected: false, 
      category: 'project-field', 
      features: ['Material sourcing', 'Supply chain', 'Bulk ordering'], 
      status: 'inactive' 
    },
    { 
      id: 'roof-hub', 
      name: 'Roof Hub by SRS Distribution', 
      description: 'Roofing materials and distribution network', 
      icon: Home, 
      connected: false, 
      category: 'project-field', 
      features: ['Roofing materials', 'Distribution network', 'Inventory management'], 
      status: 'inactive' 
    },
    { 
      id: 'roofle', 
      name: 'Roofle', 
      description: 'Comprehensive roofing project management', 
      icon: Home, 
      connected: false, 
      category: 'project-field', 
      features: ['Project management', 'Material tracking', 'Job scheduling'], 
      status: 'inactive' 
    },
    { 
      id: 'hover', 
      name: 'Hover', 
      description: '3D property measurements and estimates', 
      icon: Home, 
      connected: false, 
      category: 'project-field', 
      features: ['3D measurements', 'Automated estimates', 'Material calculations'], 
      status: 'inactive' 
    },
    { 
      id: 'google-calendar', 
      name: 'Google Calendar', 
      description: 'Calendar synchronization and scheduling', 
      icon: Calendar, 
      connected: true, 
      category: 'project-field', 
      features: ['Schedule sync', 'Appointment booking', 'Team calendars'], 
      status: 'active',
      lastSync: '1 hour ago',
      apiKey: 'gcal-key-***********'
    },
    { 
      id: 'google-maps', 
      name: 'Google Maps', 
      description: 'Mapping and location services', 
      icon: MapPin, 
      connected: true, 
      category: 'project-field', 
      features: ['Route optimization', 'Location tracking', 'Address validation'], 
      status: 'active',
      lastSync: '30 minutes ago',
      apiKey: 'gmap-key-***********'
    },

    // Communication & Reviews
    { 
      id: 'gmail', 
      name: 'Gmail', 
      description: 'Email communication and management', 
      icon: Mail, 
      connected: true, 
      category: 'communication', 
      features: ['Email management', 'Communication tracking', 'Contact sync'], 
      status: 'active',
      lastSync: '15 minutes ago',
      apiKey: 'gmail-key-***********'
    },
    { 
      id: 'mailchimp', 
      name: 'Mailchimp', 
      description: 'Email marketing and customer communication', 
      icon: Mail, 
      connected: false, 
      category: 'communication', 
      features: ['Email campaigns', 'Customer lists', 'Marketing automation'], 
      status: 'inactive' 
    },
    { 
      id: 'google-contacts', 
      name: 'Google Contacts', 
      description: 'Contact management and synchronization', 
      icon: Users, 
      connected: true, 
      category: 'communication', 
      features: ['Contact sync', 'Address book', 'Customer management'], 
      status: 'active',
      lastSync: '45 minutes ago',
      apiKey: 'gcontacts-key-***********'
    },
    { 
      id: 'openphone', 
      name: 'OpenPhone', 
      description: 'Business phone and communication system', 
      icon: Phone, 
      connected: false, 
      category: 'communication', 
      features: ['Business phone', 'SMS messaging', 'Call management'], 
      status: 'inactive' 
    },
    { 
      id: 'microsoft-outlook', 
      name: 'Microsoft Outlook', 
      description: 'Email and calendar management', 
      icon: Mail, 
      connected: false, 
      category: 'communication', 
      features: ['Email management', 'Calendar sync', 'Contact management'], 
      status: 'inactive' 
    },

    // Document Management & Storage
    { 
      id: 'dropbox', 
      name: 'Dropbox', 
      description: 'Cloud file storage and sharing', 
      icon: Cloud, 
      connected: false, 
      category: 'document-storage', 
      features: ['File storage', 'Document sharing', 'Version control'], 
      status: 'inactive' 
    },
    { 
      id: 'google-drive', 
      name: 'Google Drive', 
      description: 'Cloud storage and collaboration', 
      icon: Cloud, 
      connected: true, 
      category: 'document-storage', 
      features: ['File storage', 'Real-time collaboration', 'Document sharing'], 
      status: 'active',
      lastSync: '20 minutes ago',
      apiKey: 'gdrive-key-***********'
    },
    { 
      id: 'docusign', 
      name: 'DocuSign', 
      description: 'Electronic signature and document management', 
      icon: FileText, 
      connected: true, 
      category: 'document-storage', 
      features: ['E-signatures', 'Document templates', 'Workflow automation'], 
      status: 'active',
      lastSync: '1 hour ago',
      apiKey: 'ds-key-***********'
    },
    { 
      id: 'forms-integration', 
      name: 'Form Integrations', 
      description: 'Jotform, Gravity Forms, Google Forms, etc.', 
      icon: FileText, 
      connected: false, 
      category: 'document-storage', 
      features: ['Form submissions', 'Lead capture', 'Contact forms'], 
      status: 'inactive' 
    },
    { 
      id: 'calendly', 
      name: 'Calendly', 
      description: 'Appointment scheduling and booking', 
      icon: Calendar, 
      connected: true, 
      category: 'document-storage', 
      features: ['Appointment booking', 'Schedule sync', 'Availability management'], 
      status: 'active',
      lastSync: '35 minutes ago',
      apiKey: 'cal-key-***********'
    },

    // Automation Platforms
    { 
      id: 'zapier', 
      name: 'Zapier', 
      description: 'Workflow automation between apps', 
      icon: Zap, 
      connected: true, 
      category: 'automation', 
      features: ['App connections', 'Automated workflows', 'Data sync'], 
      status: 'active',
      lastSync: '10 minutes ago',
      apiKey: 'zap-key-***********'
    },
    { 
      id: 'leadsbridge', 
      name: 'LeadsBridge', 
      description: 'Marketing automation and lead management', 
      icon: Bot, 
      connected: false, 
      category: 'automation', 
      features: ['Lead automation', 'Marketing sync', 'Data integration'], 
      status: 'inactive' 
    },

    // Other / Miscellaneous
    { 
      id: 'hailtrace', 
      name: 'HailTrace', 
      description: 'Weather and hail damage tracking', 
      icon: Cloud, 
      connected: false, 
      category: 'miscellaneous', 
      features: ['Weather tracking', 'Hail damage reports', 'Insurance claims'], 
      status: 'inactive' 
    },
    { 
      id: 'hubspot', 
      name: 'HubSpot', 
      description: 'CRM and marketing automation platform', 
      icon: Building, 
      connected: true, 
      category: 'miscellaneous', 
      features: ['CRM management', 'Marketing automation', 'Lead scoring'], 
      status: 'active',
      lastSync: '25 minutes ago',
      apiKey: 'hub-key-***********'
    },
    { 
      id: 'mysalesman', 
      name: 'mySalesman', 
      description: 'Sales management and tracking', 
      icon: Users, 
      connected: false, 
      category: 'miscellaneous', 
      features: ['Sales tracking', 'Performance metrics', 'Commission management'], 
      status: 'inactive' 
    },
    { 
      id: 'xero', 
      name: 'Xero', 
      description: 'Accounting and financial management', 
      icon: FileText, 
      connected: false, 
      category: 'miscellaneous', 
      features: ['Accounting', 'Financial reporting', 'Invoice management'], 
      status: 'inactive' 
    }
  ]);

  const categories = [
    { id: 'all', label: 'All Integrations', count: integrations.length },
    { id: 'sales-crm', label: 'Sales, CRM & Lead Management', count: integrations.filter(i => i.category === 'sales-crm').length },
    { id: 'project-field', label: 'Project & Field Management', count: integrations.filter(i => i.category === 'project-field').length },
    { id: 'communication', label: 'Communication & Reviews', count: integrations.filter(i => i.category === 'communication').length },
    { id: 'document-storage', label: 'Document Management & Storage', count: integrations.filter(i => i.category === 'document-storage').length },
    { id: 'automation', label: 'Automation Platforms', count: integrations.filter(i => i.category === 'automation').length },
    { id: 'miscellaneous', label: 'Other / Miscellaneous', count: integrations.filter(i => i.category === 'miscellaneous').length }
  ];

  const filteredIntegrations = integrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleConnect = async (integration: Integration) => {
    setIsConnecting(true);
    
    // Simulate API connection
    setTimeout(() => {
      setIntegrations(prev => 
        prev.map(int => 
          int.id === integration.id 
            ? { ...int, connected: true, status: 'active', apiKey: apiKeyInput || 'key-***********', lastSync: 'Just now' }
            : int
        )
      );
      
      setSelectedIntegration(null);
      setApiKeyInput('');
      setIsConnecting(false);
      
      toast({
        title: "Integration Connected",
        description: `Successfully connected to ${integration.name}`,
      });
    }, 2000);
  };

  const handleDisconnect = (integrationId: string) => {
    setIntegrations(prev => 
      prev.map(integration => 
        integration.id === integrationId 
          ? { ...integration, connected: false, status: 'inactive', apiKey: undefined, lastSync: undefined }
          : integration
      )
    );
    
    toast({
      title: "Integration Disconnected",
      description: `Successfully disconnected integration`,
    });
  };

  const handleSync = (integrationId: string) => {
    setIntegrations(prev => 
      prev.map(integration => 
        integration.id === integrationId 
          ? { ...integration, lastSync: 'Just now' }
          : integration
      )
    );
    
    toast({
      title: "Sync Complete",
      description: "Data synchronized successfully",
    });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case 'inactive':
        return <Badge variant="outline">Inactive</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800">Error</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Advanced Integrations Hub</h1>
          <p className="text-muted-foreground">
            Connect and manage all your construction business tools
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-blue-100 text-blue-800">
            {integrations.filter(i => i.connected).length} / {integrations.length} Connected
          </Badge>
          <Button>
            <ExternalLink className="h-4 w-4 mr-2" />
            Browse Marketplace
          </Button>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search integrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="space-y-4">
        <TabsList className="grid w-full grid-cols-7">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-xs">
              {category.label.split(' ')[0]} ({category.count})
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value={selectedCategory}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration) => {
              const IconComponent = integration.icon;
              return (
                <Card key={integration.id} className="hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-8 w-8 text-blue-600" />
                        <div>
                          <CardTitle className="text-lg">{integration.name}</CardTitle>
                          <p className="text-sm text-muted-foreground">
                            {integration.description}
                          </p>
                        </div>
                      </div>
                      {integration.connected ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      {getStatusBadge(integration.status)}
                      {integration.lastSync && (
                        <span className="text-xs text-muted-foreground">
                          Synced {integration.lastSync}
                        </span>
                      )}
                    </div>
                    
                    <div className="text-xs text-muted-foreground">
                      <strong>Features:</strong> {integration.features.join(', ')}
                    </div>
                    
                    {integration.connected ? (
                      <div className="flex gap-2">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleSync(integration.id)}
                          className="flex-1"
                        >
                          <RotateCcw className="h-3 w-3 mr-1" />
                          Sync
                        </Button>
                        <Button 
                          size="sm" 
                          variant="outline"
                          className="flex-1"
                        >
                          <Settings className="h-3 w-3 mr-1" />
                          Config
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          onClick={() => handleDisconnect(integration.id)}
                        >
                          Disconnect
                        </Button>
                      </div>
                    ) : (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full" 
                            onClick={() => setSelectedIntegration(integration)}
                          >
                            Connect Integration
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2">
                              <integration.icon className="h-5 w-5" />
                              Connect {integration.name}
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="apiKey">API Key / Access Token</Label>
                              <Input
                                id="apiKey"
                                type="password"
                                value={apiKeyInput}
                                onChange={(e) => setApiKeyInput(e.target.value)}
                                placeholder={`Enter your ${integration.name} API key`}
                              />
                            </div>
                            
                            <div className="text-sm text-muted-foreground">
                              <p><strong>This integration provides:</strong></p>
                              <ul className="list-disc list-inside mt-2">
                                {integration.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button 
                                onClick={() => handleConnect(integration)}
                                disabled={!apiKeyInput || isConnecting}
                                className="flex-1"
                              >
                                {isConnecting ? 'Connecting...' : 'Connect'}
                              </Button>
                              <Button 
                                variant="outline" 
                                onClick={() => {
                                  setSelectedIntegration(null);
                                  setApiKeyInput('');
                                }}
                              >
                                Cancel
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
