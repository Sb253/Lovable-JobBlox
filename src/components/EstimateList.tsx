
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Calendar, DollarSign, User, FileText, Send, Edit, Trash2 } from "lucide-react";

interface Estimate {
  id: string;
  title: string;
  customer: string;
  amount: number;
  status: 'draft' | 'sent' | 'accepted' | 'rejected' | 'expired';
  validUntil: string;
  createdAt: string;
  description: string;
}

export const EstimateList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [estimates] = useState<Estimate[]>([
    {
      id: '1',
      title: 'Kitchen Renovation Quote',
      customer: 'John Smith',
      amount: 15000,
      status: 'sent',
      validUntil: '2024-02-15',
      createdAt: '2024-01-15',
      description: 'Complete kitchen renovation including cabinets, countertops, and appliances'
    },
    {
      id: '2',
      title: 'Bathroom Repair Estimate',
      customer: 'ABC Construction',
      amount: 5000,
      status: 'accepted',
      validUntil: '2024-02-20',
      createdAt: '2024-01-10',
      description: 'Bathroom plumbing and tile work'
    },
    {
      id: '3',
      title: 'Roof Inspection Quote',
      customer: 'Sarah Johnson',
      amount: 800,
      status: 'draft',
      validUntil: '2024-02-25',
      createdAt: '2024-01-12',
      description: 'Comprehensive roof inspection and minor repairs'
    }
  ]);

  const filteredEstimates = estimates.filter(estimate =>
    estimate.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    estimate.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Estimate['status']) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'expired': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Estimates</h1>
          <p className="text-muted-foreground">Manage quotes and estimates</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Estimate
        </Button>
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
                    <h3 className="text-lg font-semibold">{estimate.title}</h3>
                    <Badge className={getStatusColor(estimate.status)}>
                      {estimate.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Customer: {estimate.customer}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Valid until: {new Date(estimate.validUntil).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Amount: ${estimate.amount.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Created: {new Date(estimate.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2">{estimate.description}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                {estimate.status === 'draft' && (
                  <Button size="sm">
                    <Send className="h-4 w-4 mr-1" />
                    Send
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <FileText className="h-4 w-4 mr-1" />
                  View PDF
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
