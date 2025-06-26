
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Wrench, DollarSign } from "lucide-react";

interface ActivityItem {
  id: string;
  type: 'job' | 'payment' | 'customer' | 'estimate';
  title: string;
  description: string;
  time: string;
  status: 'completed' | 'pending' | 'in-progress';
}

const ActivityIcon = ({ type }: { type: ActivityItem['type'] }) => {
  switch (type) {
    case 'job':
      return <Wrench className="h-4 w-4" />;
    case 'payment':
      return <DollarSign className="h-4 w-4" />;
    case 'customer':
      return <User className="h-4 w-4" />;
    case 'estimate':
      return <Clock className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const StatusBadge = ({ status }: { status: ActivityItem['status'] }) => {
  const variants = {
    completed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    'in-progress': 'bg-blue-100 text-blue-800',
  };

  return (
    <Badge variant="secondary" className={variants[status]}>
      {status.replace('-', ' ')}
    </Badge>
  );
};

export const RecentActivity = () => {
  const activities: ActivityItem[] = [
    {
      id: '1',
      type: 'job',
      title: 'Kitchen Renovation Completed',
      description: 'Job #1234 for John Smith finished successfully',
      time: '2 hours ago',
      status: 'completed',
    },
    {
      id: '2',
      type: 'payment',
      title: 'Payment Received',
      description: '$2,500 payment from ABC Corp processed',
      time: '4 hours ago',
      status: 'completed',
    },
    {
      id: '3',
      type: 'customer',
      title: 'New Customer Added',
      description: 'Sarah Johnson added to customer database',
      time: '6 hours ago',
      status: 'completed',
    },
    {
      id: '4',
      type: 'estimate',
      title: 'Estimate Pending Approval',
      description: 'Bathroom remodel estimate awaiting customer response',
      time: '1 day ago',
      status: 'pending',
    },
    {
      id: '5',
      type: 'job',
      title: 'Plumbing Repair In Progress',
      description: 'Emergency plumbing job at Downtown Office',
      time: '1 day ago',
      status: 'in-progress',
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                <ActivityIcon type={activity.type} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {activity.title}
                  </p>
                  <StatusBadge status={activity.status} />
                </div>
                <p className="text-sm text-gray-500 mt-1">
                  {activity.description}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
