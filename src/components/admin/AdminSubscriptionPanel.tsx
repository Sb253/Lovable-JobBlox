
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Crown, Users, Search, Filter, TrendingUp, DollarSign } from "lucide-react";

interface Tenant {
  id: string;
  name: string;
  plan: string;
  status: 'active' | 'trial' | 'suspended';
  revenue: number;
  clients: number;
  lastActive: string;
  addOns: string[];
}

export const AdminSubscriptionPanel = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPlan, setFilterPlan] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Mock tenant data
  const mockTenants: Tenant[] = [
    {
      id: 'tenant-001',
      name: 'Acme Construction Co.',
      plan: 'professional',
      status: 'active',
      revenue: 799,
      clients: 15,
      lastActive: '2024-01-15',
      addOns: ['advanced-reporting', 'ai-features']
    },
    {
      id: 'tenant-002',
      name: 'BuildRight LLC',
      plan: 'enterprise',
      status: 'active',
      revenue: 1999,
      clients: 45,
      lastActive: '2024-01-14',
      addOns: ['advanced-reporting', 'ai-features', 'white-label']
    },
    {
      id: 'tenant-003',
      name: 'QuickFix Solutions',
      plan: 'basic',
      status: 'trial',
      revenue: 0,
      clients: 3,
      lastActive: '2024-01-13',
      addOns: []
    }
  ];

  const filteredTenants = mockTenants.filter(tenant => {
    const matchesSearch = tenant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = filterPlan === 'all' || tenant.plan === filterPlan;
    const matchesStatus = filterStatus === 'all' || tenant.status === filterStatus;
    return matchesSearch && matchesPlan && matchesStatus;
  });

  const totalRevenue = mockTenants.reduce((sum, tenant) => sum + tenant.revenue, 0);
  const activeTenants = mockTenants.filter(t => t.status === 'active').length;

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'basic': return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
      case 'professional': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'enterprise': return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'trial': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'suspended': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Crown className="h-8 w-8 text-purple-600" />
            Tenant Subscriptions
          </h1>
          <p className="text-muted-foreground">
            Manage tenant subscriptions and monitor platform usage
          </p>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">${totalRevenue}</p>
                <p className="text-sm text-muted-foreground">Monthly Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{activeTenants}</p>
                <p className="text-sm text-muted-foreground">Active Tenants</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Crown className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">{mockTenants.filter(t => t.plan === 'enterprise').length}</p>
                <p className="text-sm text-muted-foreground">Enterprise</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{Math.round(totalRevenue / activeTenants)}</p>
                <p className="text-sm text-muted-foreground">Avg Revenue</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="glass">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tenants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass"
              />
            </div>
            
            <Select value={filterPlan} onValueChange={setFilterPlan}>
              <SelectTrigger className="w-full md:w-48 glass">
                <SelectValue placeholder="Filter by plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Plans</SelectItem>
                <SelectItem value="basic">Basic</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterStatus} onValueChange={setFilterStatus}>
              <SelectTrigger className="w-full md:w-48 glass">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="trial">Trial</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tenants List */}
      <div className="grid grid-cols-1 gap-4">
        {filteredTenants.map(tenant => (
          <Card key={tenant.id} className="glass">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{tenant.name}</h3>
                    <Badge className={getPlanColor(tenant.plan)}>
                      {tenant.plan.charAt(0).toUpperCase() + tenant.plan.slice(1)}
                    </Badge>
                    <Badge className={getStatusColor(tenant.status)}>
                      {tenant.status.charAt(0).toUpperCase() + tenant.status.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Revenue</p>
                      <p className="font-medium">${tenant.revenue}/mo</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Clients</p>
                      <p className="font-medium">{tenant.clients}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Add-ons</p>
                      <p className="font-medium">{tenant.addOns.length}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Last Active</p>
                      <p className="font-medium">{tenant.lastActive}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="glass">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="glass">
                    Manage
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
