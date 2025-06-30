
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Plus, User, DollarSign } from "lucide-react";

export const PipelineManagement = () => {
  const pipelineStages = [
    { name: 'Leads', count: 15, value: 45000 },
    { name: 'Qualified', count: 8, value: 32000 },
    { name: 'Proposal', count: 5, value: 28000 },
    { name: 'Negotiation', count: 3, value: 18000 },
    { name: 'Closed Won', count: 2, value: 12000 }
  ];

  const leads = [
    { id: 1, name: 'Kitchen Renovation', customer: 'John Smith', value: 15000, stage: 'Proposal', probability: 75 },
    { id: 2, name: 'Bathroom Remodel', customer: 'Sarah Johnson', value: 8500, stage: 'Qualified', probability: 50 },
    { id: 3, name: 'Office Renovation', customer: 'ABC Corp', value: 25000, stage: 'Negotiation', probability: 90 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <TrendingUp className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Sales Pipeline</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Lead
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {pipelineStages.map((stage, index) => (
          <Card key={stage.name} className="border-t-4 border-t-blue-500">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{stage.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{stage.count}</span>
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <DollarSign className="h-4 w-4 mr-1" />
                  ${stage.value.toLocaleString()}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Active Opportunities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {leads.map((lead) => (
              <div key={lead.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-medium">{lead.name}</h4>
                  <p className="text-sm text-muted-foreground">Customer: {lead.customer}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold">${lead.value.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{lead.probability}% probability</p>
                  </div>
                  <Badge variant="outline">{lead.stage}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
