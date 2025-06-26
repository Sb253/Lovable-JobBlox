
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Users, Calendar, FileText, Wrench, Receipt } from "lucide-react";

interface QuickActionProps {
  onSectionChange: (section: string) => void;
}

export const QuickActions = ({ onSectionChange }: QuickActionProps) => {
  const actions = [
    {
      title: 'New Customer',
      description: 'Add a new customer to your database',
      icon: <Users className="h-5 w-5" />,
      action: () => onSectionChange('customer-form'),
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      title: 'Create Job',
      description: 'Schedule a new job or service',
      icon: <Wrench className="h-5 w-5" />,
      action: () => onSectionChange('job-form'),
      color: 'bg-green-500 hover:bg-green-600',
    },
    {
      title: 'New Estimate',
      description: 'Create an estimate for a customer',
      icon: <FileText className="h-5 w-5" />,
      action: () => onSectionChange('estimates'),
      color: 'bg-purple-500 hover:bg-purple-600',
    },
    {
      title: 'Schedule View',
      description: 'View and manage your schedule',
      icon: <Calendar className="h-5 w-5" />,
      action: () => onSectionChange('schedule'),
      color: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      title: 'New Invoice',
      description: 'Create and send an invoice',
      icon: <Receipt className="h-5 w-5" />,
      action: () => onSectionChange('invoices'),
      color: 'bg-red-500 hover:bg-red-600',
    },
    {
      title: 'View Pipeline',
      description: 'Manage your sales pipeline',
      icon: <Plus className="h-5 w-5" />,
      action: () => onSectionChange('pipeline'),
      color: 'bg-teal-500 hover:bg-teal-600',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="outline"
              className="h-auto p-4 flex flex-col items-start space-y-2 hover:shadow-md transition-shadow"
              onClick={action.action}
            >
              <div className={`p-2 rounded-lg text-white ${action.color}`}>
                {action.icon}
              </div>
              <div className="text-left">
                <h3 className="font-medium text-sm">{action.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {action.description}
                </p>
              </div>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
