
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RefreshCw, TrendingUp, Users, Briefcase, DollarSign, Plus, ArrowRight, Clock, MapPin } from "lucide-react";
import { SwipeableCard } from "./SwipeableCard";
import { cn } from "@/lib/utils";

interface MobileOptimizedDashboardProps {
  onSectionChange: (section: string) => void;
}

export const MobileOptimizedDashboard = ({ onSectionChange }: MobileOptimizedDashboardProps) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handlePullToRefresh = async () => {
    setIsRefreshing(true);
    // Simulate refresh
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsRefreshing(false);
  };

  const stats = [
    { label: "Active Jobs", value: "8", change: "+2", icon: Briefcase, color: "text-blue-600", bgColor: "bg-blue-50" },
    { label: "Customers", value: "24", change: "+3", icon: Users, color: "text-green-600", bgColor: "bg-green-50" },
    { label: "Revenue", value: "$12,500", change: "+8%", icon: DollarSign, color: "text-purple-600", bgColor: "bg-purple-50" },
    { label: "Growth", value: "12.5%", change: "+2.1%", icon: TrendingUp, color: "text-orange-600", bgColor: "bg-orange-50" }
  ];

  const quickActions = [
    { id: 'job-form', label: 'New Job', icon: Plus, color: 'bg-blue-600', description: 'Create a new job quickly' },
    { id: 'customer-form', label: 'Add Customer', icon: Users, color: 'bg-green-600', description: 'Register new customer' },
    { id: 'time-tracking', label: 'Track Time', icon: Clock, color: 'bg-purple-600', description: 'Start time tracking' },
    { id: 'photos', label: 'Job Photos', icon: Camera, color: 'bg-orange-600', description: 'Document job progress' }
  ];

  const recentActivity = [
    { 
      id: 1,
      title: "New customer inquiry", 
      subtitle: "Kitchen remodel project", 
      time: "2 mins ago", 
      type: "customer",
      location: "Downtown Area",
      priority: "high"
    },
    { 
      id: 2,
      title: "Job completed", 
      subtitle: "Bathroom renovation - Johnson", 
      time: "1 hour ago", 
      type: "job",
      location: "Maple Street",
      priority: "normal"
    },
    { 
      id: 3,
      title: "Invoice payment received", 
      subtitle: "$4,500 - Project #2401", 
      time: "3 hours ago", 
      type: "payment",
      location: "Online",
      priority: "normal"
    },
    { 
      id: 4,
      title: "Team check-in", 
      subtitle: "Mike reported from Oak Avenue", 
      time: "5 hours ago", 
      type: "team",
      location: "Oak Avenue",
      priority: "low"
    }
  ];

  const todaysTasks = [
    { id: 1, task: "Site inspection - Wilson Project", time: "9:00 AM", completed: true },
    { id: 2, task: "Material delivery - Downtown", time: "11:30 AM", completed: false },
    { id: 3, task: "Client meeting - New project", time: "2:00 PM", completed: false },
    { id: 4, task: "Team standup meeting", time: "4:00 PM", completed: false }
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Pull-to-refresh indicator */}
      {isRefreshing && (
        <div className="flex items-center justify-center py-4">
          <RefreshCw className="h-6 w-6 animate-spin text-primary" />
          <span className="ml-2 text-sm text-muted-foreground">Refreshing...</span>
        </div>
      )}

      {/* Welcome Header with pull-to-refresh */}
      <div 
        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mx-4 cursor-pointer"
        onTouchStart={(e) => {
          // Simple pull-to-refresh implementation
          const startY = e.touches[0].clientY;
          const handleTouchMove = (moveEvent: TouchEvent) => {
            const currentY = moveEvent.touches[0].clientY;
            if (currentY - startY > 100) {
              handlePullToRefresh();
              document.removeEventListener('touchmove', handleTouchMove);
            }
          };
          document.addEventListener('touchmove', handleTouchMove);
          document.addEventListener('touchend', () => {
            document.removeEventListener('touchmove', handleTouchMove);
          }, { once: true });
        }}
      >
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold">Good morning! 👋</h1>
          <Badge variant="secondary" className="bg-white/20 text-white">
            Live
          </Badge>
        </div>
        <p className="opacity-90 text-sm">You have 3 jobs scheduled today</p>
      </div>

      {/* Stats Grid - Touch optimized */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Today's Overview</h2>
          <Button variant="ghost" size="sm" onClick={() => onSectionChange('analytics')}>
            View All
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className={`absolute top-0 right-0 w-16 h-16 ${stat.bgColor} rounded-full -mr-8 -mt-8 opacity-50`} />
                  <div className="flex items-center justify-between mb-3">
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                    <Badge variant="outline" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions - Enhanced for mobile */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Card
                key={index}
                className="cursor-pointer hover:shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => onSectionChange(action.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className={`${action.color} h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-medium text-sm">{action.label}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{action.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Today's Tasks */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Today's Tasks</h2>
          <Button variant="ghost" size="sm" onClick={() => onSectionChange('schedule')}>
            View Schedule
          </Button>
        </div>
        <div className="space-y-2">
          {todaysTasks.map((task) => (
            <SwipeableCard
              key={task.id}
              leftAction={{
                icon: <ArrowRight className="h-4 w-4" />,
                label: "Details",
                color: "bg-blue-500"
              }}
              rightAction={{
                icon: <Plus className="h-4 w-4" />,
                label: task.completed ? "Undo" : "Complete",
                color: task.completed ? "bg-gray-500" : "bg-green-500"
              }}
              onSwipeLeft={() => console.log('View task details:', task.id)}
              onSwipeRight={() => console.log('Toggle task completion:', task.id)}
            >
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  <div className={cn(
                    "h-3 w-3 rounded-full",
                    task.completed ? "bg-green-500" : "bg-gray-300"
                  )} />
                  <div>
                    <p className={cn(
                      "font-medium text-sm",
                      task.completed && "line-through text-muted-foreground"
                    )}>
                      {task.task}
                    </p>
                    <p className="text-xs text-muted-foreground">{task.time}</p>
                  </div>
                </div>
              </div>
            </SwipeableCard>
          ))}
        </div>
      </div>

      {/* Recent Activity - Swipeable Cards */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <Button variant="ghost" size="sm" onClick={() => onSectionChange('notifications')}>
            View All
          </Button>
        </div>
        <div className="space-y-2">
          {recentActivity.map((activity) => (
            <SwipeableCard
              key={activity.id}
              leftAction={{
                icon: <Plus className="h-4 w-4" />,
                label: "More",
                color: "bg-blue-500"
              }}
              rightAction={{
                icon: <ArrowRight className="h-4 w-4" />,
                label: "View",
                color: "bg-green-500"
              }}
              onSwipeLeft={() => console.log('More actions for', activity.title)}
              onSwipeRight={() => console.log('View details for', activity.title)}
            >
              <div className="flex items-center justify-between py-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm truncate">{activity.title}</p>
                    <Badge 
                      variant="outline" 
                      className={cn(
                        "text-xs",
                        activity.priority === 'high' && "border-red-200 text-red-700",
                        activity.priority === 'normal' && "border-blue-200 text-blue-700",
                        activity.priority === 'low' && "border-gray-200 text-gray-700"
                      )}
                    >
                      {activity.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{activity.subtitle}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-muted-foreground">{activity.time}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{activity.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwipeableCard>
          ))}
        </div>
      </div>

      {/* Navigation Hint for first-time users */}
      <div className="px-4 pb-4">
        <div className="bg-muted/50 p-4 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            💡 Swipe cards for quick actions • Use bottom tabs to navigate • Pull down to refresh
          </p>
        </div>
      </div>
    </div>
  );
};
