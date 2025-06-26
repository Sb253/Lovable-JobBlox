
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Wrench, Users, DollarSign } from "lucide-react";

interface ActivityItem {
  id: string;
  type: 'job' | 'customer' | 'payment' | 'system';
  title: string;
  description: string;
  time: string;
  status?: 'completed' | 'pending' | 'in-progress';
}

const activityIcons = {
  job: <Wrench className="h-4 w-4" />,
  customer: <Users className="h-4 w-4" />,
  payment: <DollarSign className="h-4 w-4" />,
  system: <Clock className="h-4 w-4" />,
};

const statusColors = {
  completed: 'bg-green-100 text-green-800',
  pending: 'bg-yellow-100 text-yellow-800',
  'in-progress': 'bg-blue-100 text-blue-800',
};

export const RecentActivity = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'job',
      title: 'Plumbing Repair Completed',
      description: 'Kitchen sink repair at 123 Main St completed by John Smith',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: '2',
      type: 'customer',
      title: 'New Customer Added',
      description: 'Sarah Johnson added as new customer with contact details',
      time: '4 hours ago',
      status: 'completed',
    },
    {
      id: '3',
      type: 'payment',
      title: 'Payment Received',
      description: '$450.00 payment received for Invoice #INV-001',
      time: '6 hours ago',
      status: 'completed',
    },
    {
      id: '4',
      type: 'job',
      title: 'HVAC Maintenance Scheduled',
      description: 'Annual HVAC maintenance scheduled for tomorrow at 10:00 AM',
      time: '1 day ago',
      status: 'pending',
    },
    {
      id: '5',
      type: 'job',
      title: 'Electrical Work In Progress',
      description: 'Rewiring project at 456 Oak Ave currently in progress',
      time: '2 days ago',
      status: 'in-progress',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50">
            <div className="flex-shrink-0 mt-1">
              {activityIcons[activity.type]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground truncate">
                  {activity.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.time}
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                {activity.description}
              </p>
              {activity.status && (
                <Badge 
                  variant="secondary" 
                  className={`mt-2 text-xs ${statusColors[activity.status]}`}
                >
                  {activity.status.replace('-', ' ').toUpperCase()}
                </Badge>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
