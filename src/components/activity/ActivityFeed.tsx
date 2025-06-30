
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Activity, Filter, RefreshCw } from "lucide-react";

export const ActivityFeed = () => {
  const [activities] = useState([
    {
      id: 1,
      user: 'John Smith',
      avatar: null,
      action: 'created a new job',
      target: 'Kitchen Renovation - 123 Main St',
      time: '2 minutes ago',
      type: 'job'
    },
    {
      id: 2,
      user: 'Sarah Johnson',
      avatar: null,
      action: 'updated invoice',
      target: 'INV-001 - $2,500.00',
      time: '15 minutes ago',
      type: 'invoice'
    },
    {
      id: 3,
      user: 'Mike Davis',
      avatar: null,
      action: 'completed job',
      target: 'Bathroom Repair - 456 Oak Ave',
      time: '1 hour ago',
      type: 'job'
    },
    {
      id: 4,
      user: 'Emily Wilson',
      avatar: null,
      action: 'added new customer',
      target: 'ABC Construction Co.',
      time: '2 hours ago',
      type: 'customer'
    },
    {
      id: 5,
      user: 'John Smith',
      avatar: null,
      action: 'processed payment',
      target: 'INV-002 - $1,800.00',
      time: '3 hours ago',
      type: 'payment'
    },
    {
      id: 6,
      user: 'Sarah Johnson',
      avatar: null,
      action: 'scheduled job',
      target: 'Plumbing Fix - 789 Pine St',
      time: '4 hours ago',
      type: 'schedule'
    }
  ]);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'job': return '💼';
      case 'invoice': return '📄';
      case 'customer': return '👤';
      case 'payment': return '💰';
      case 'schedule': return '📅';
      default: return '📋';
    }
  };

  const getActivityColor = (type: string) => {
    switch (type) {
      case 'job': return 'bg-blue-100 text-blue-800';
      case 'invoice': return 'bg-green-100 text-green-800';
      case 'customer': return 'bg-purple-100 text-purple-800';
      case 'payment': return 'bg-yellow-100 text-yellow-800';
      case 'schedule': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Activity className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Activity Feed</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Activity</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
          <TabsTrigger value="financial">Financial</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar || undefined} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{activity.user}</span>
                        <span className="text-sm text-muted-foreground">{activity.action}</span>
                        <Badge className={`text-xs ${getActivityColor(activity.type)}`}>
                          {activity.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.target}</p>
                      <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
                    </div>
                    <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="jobs">
          <Card>
            <CardHeader>
              <CardTitle>Job Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.filter(a => a.type === 'job' || a.type === 'schedule').map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar || undefined} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{activity.user}</span>
                        <span className="text-sm text-muted-foreground">{activity.action}</span>
                        <Badge className={`text-xs ${getActivityColor(activity.type)}`}>
                          {activity.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.target}</p>
                      <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
                    </div>
                    <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="financial">
          <Card>
            <CardHeader>
              <CardTitle>Financial Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.filter(a => a.type === 'invoice' || a.type === 'payment').map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar || undefined} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{activity.user}</span>
                        <span className="text-sm text-muted-foreground">{activity.action}</span>
                        <Badge className={`text-xs ${getActivityColor(activity.type)}`}>
                          {activity.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.target}</p>
                      <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
                    </div>
                    <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activities.filter(a => a.type === 'customer').map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={activity.avatar || undefined} />
                      <AvatarFallback>{activity.user.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{activity.user}</span>
                        <span className="text-sm text-muted-foreground">{activity.action}</span>
                        <Badge className={`text-xs ${getActivityColor(activity.type)}`}>
                          {activity.type}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{activity.target}</p>
                      <p className="text-xs text-muted-foreground mt-2">{activity.time}</p>
                    </div>
                    <div className="text-2xl">{getActivityIcon(activity.type)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
