
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Wrench, DollarSign, Calendar, MapPin } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  trend: 'up' | 'down' | 'neutral';
}

const StatCard = ({ title, value, change, icon, trend }: StatCardProps) => {
  const trendColor = trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-gray-600';
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${trendColor} flex items-center gap-1`}>
          <TrendingUp className="h-3 w-3" />
          {change} from last month
        </p>
      </CardContent>
    </Card>
  );
};

export const StatsCards = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
      trend: 'up' as const,
    },
    {
      title: "Active Jobs",
      value: "23",
      change: "+12%",
      icon: <Wrench className="h-4 w-4 text-muted-foreground" />,
      trend: 'up' as const,
    },
    {
      title: "Total Customers",
      value: "156",
      change: "+8.2%",
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
      trend: 'up' as const,
    },
    {
      title: "Scheduled Today",
      value: "7",
      change: "+2",
      icon: <Calendar className="h-4 w-4 text-muted-foreground" />,
      trend: 'up' as const,
    },
    {
      title: "Active Branches",
      value: "3",
      change: "No change",
      icon: <MapPin className="h-4 w-4 text-muted-foreground" />,
      trend: 'neutral' as const,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};
