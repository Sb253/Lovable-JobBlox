
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { FileText, Search, Plus, Eye, Edit, Send } from "lucide-react";

export const EstimateList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const estimates = [
    {
      id: 'EST-001',
      customer: 'John Smith',
      project: 'Kitchen Renovation',
      amount: 15000,
      status: 'pending',
      date: '2024-01-15',
      validUntil: '2024-02-15'
    },
    {
      id: 'EST-002', 
      customer: 'Sarah Johnson',
      project: 'Bathroom Remodel',
      amount: 8500,
      status: 'approved',
      date: '2024-01-12',
      validUntil: '2024-02-12'
    },
    {
      id: 'EST-003',
      customer: 'Mike Davis',
      project: 'Plumbing Repair',
      amount: 750,
      status: 'rejected',
      date: '2024-01-10',
      validUntil: '2024-02-10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Estimates</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Estimate
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
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
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {estimates.map((estimate) => (
              <Card key={estimate.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-4">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-lg">{estimate.id}</h3>
                        <Badge className={getStatusColor(estimate.status)}>
                          {estimate.status}
                        </Badge>
                      </div>
                      <h4 className="font-medium">{estimate.project}</h4>
                      <p className="text-sm text-muted-foreground">Customer: {estimate.customer}</p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span>Created: {estimate.date}</span>
                        <span>Valid until: {estimate.validUntil}</span>
                      </div>
                    </div>
                    <div className="text-right space-y-2">
                      <div className="text-2xl font-bold">${estimate.amount.toLocaleString()}</div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button size="sm">
                          <Send className="h-4 w-4 mr-1" />
                          Send
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
