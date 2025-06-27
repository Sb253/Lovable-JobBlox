
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Briefcase, DollarSign, Plus, ArrowRight } from "lucide-react";
import { SwipeableCard } from "./SwipeableCard";

interface ResponsiveDashboardProps {
  onSectionChange: (section: string) => void;
}

export const ResponsiveDashboard = ({ onSectionChange }: ResponsiveDashboardProps) => {
  const stats = [
    { label: "Active Projects", value: "12", change: "+2", icon: Briefcase, color: "text-blue-600" },
    { label: "Total Customers", value: "48", change: "+5", icon: Users, color: "text-green-600" },
    { label: "Monthly Revenue", value: "$24,500", change: "+12%", icon: DollarSign, color: "text-purple-600" },
    { label: "Growth Rate", value: "8.2%", change: "+1.2%", icon: TrendingUp, color: "text-orange-600" }
  ];

  const quickActions = [
    { label: "New Customer", section: "customers", color: "bg-blue-600" },
    { label: "Create Job", section: "jobs", color: "bg-green-600" },
    { label: "Add Expense", section: "expenses", color: "bg-purple-600" },
    { label: "New Invoice", section: "invoices", color: "bg-orange-600" }
  ];

  const recentActivity = [
    { action: "New customer added", time: "2 hours ago", type: "customer" },
    { action: "Invoice #INV-001 paid", time: "4 hours ago", type: "payment" },
    { action: "Job completed", time: "1 day ago", type: "job" },
    { action: "Expense submitted", time: "2 days ago", type: "expense" }
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg mx-4">
        <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
        <p className="opacity-90">Here's what's happening with your business today.</p>
      </div>

      {/* Stats Grid - Swipeable on mobile */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Overview</h2>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                    <Badge variant="outline" className="text-xs">
                      {stat.change}
                    </Badge>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              className={`${action.color} h-16 flex flex-col gap-1`}
              onClick={() => onSectionChange(action.section)}
            >
              <Plus className="h-5 w-5" />
              <span className="text-sm">{action.label}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Recent Activity - Swipeable Cards */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Recent Activity</h2>
          <Button variant="ghost" size="sm">
            View All
            <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        <div className="space-y-2">
          {recentActivity.map((activity, index) => (
            <SwipeableCard
              key={index}
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
              onSwipeLeft={() => console.log('More actions for', activity.action)}
              onSwipeRight={() => console.log('View details for', activity.action)}
            >
              <div className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-sm">{activity.action}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
                <Badge variant="outline" className="text-xs">
                  {activity.type}
                </Badge>
              </div>
            </SwipeableCard>
          ))}
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="px-4 pb-4">
        <div className="bg-muted/50 p-4 rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            💡 Swipe cards left/right for actions, use bottom tabs to navigate
          </p>
        </div>
      </div>
    </div>
  );
};
