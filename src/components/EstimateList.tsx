
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Calendar, DollarSign, User, FileText, Send, Eye } from "lucide-react";

interface Estimate {
  id: string;
  title: string;
  customer: string;
  amount: number;
  status: 'draft' | 'sent' | 'approved' | 'rejected' | 'expired';
  createdDate: string;
  expiryDate: string;
  description: string;
  items: number;
}

export const EstimateList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [estimates] = useState<Estimate[]>([
    {
      id: 'EST-001',
      title: 'Kitchen Renovation Estimate',
      customer: 'John Smith',
      amount: 15000,
      status: 'sent',
      createdDate: '2024-01-15',
      expiryDate: '2024-02-15',
      description: 'Complete kitchen renovation including cabinets and appliances',
      items: 12
    },
    {
      id: 'EST-002',
      title: 'Bathroom Remodel Quote',
      customer: 'ABC Construction',
      amount: 8500,
      status: 'approved',
      createdDate: '2024-01-10',
      expiryDate: '2024-02-10',
      description: 'Master bathroom renovation with luxury fixtures',
      items: 8
    },
    {
      id: 'EST-003',
      title: 'Roof Repair Estimate',
      customer: 'Sarah Johnson',
      amount: 3200,
      status: 'draft',
      createdDate: '2024-01-18',
      expiryDate: '2024-02-18',
      description: 'Roof leak repair and gutter replacement',
      items: 5
    }
  ]);

  const filteredEstimates = estimates.filter(estimate =>
    estimate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estimate.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estimate.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Estimate['status']) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'expired': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalValue = estimates.reduce((sum, estimate) => sum + estimate.amount, 0);
  const approvedValue = estimates
    .filter(e => e.status === 'approved')
    .reduce((sum, estimate) => sum + estimate.amount, 0);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Estimates</h1>
          <p className="text-muted-foreground">Create and manage project estimates</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Estimate
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Total Estimates</p>
                <p className="text-2xl font-bold">{estimates.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-green-600" />
              <div>
                <p className="text-sm text-muted-foreground">Approved Value</p>
                <p className="text-2xl font-bold text-green-600">${approvedValue.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <div>
                <p className="text-sm text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold">{estimates.filter(e => e.status === 'sent').length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search estimates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredEstimates.map((estimate) => (
          <Card key={estimate.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{estimate.title}</h3>
                    <Badge className={getStatusColor(estimate.status)}>
                      {estimate.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Customer: {estimate.customer}
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        ID: {estimate.id}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Created: {new Date(estimate.createdDate).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Expires: {new Date(estimate.expiryDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{estimate.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{estimate.items} items</p>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    ${estimate.amount.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  View
                </Button>
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                {estimate.status === 'draft' && (
                  <Button size="sm">
                    <Send className="h-4 w-4 mr-1" />
                    Send
                  </Button>
                )}
                {estimate.status === 'approved' && (
                  <Button size="sm">
                    Convert to Job
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
