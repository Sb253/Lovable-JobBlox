
import React from 'react';
import { StatsCards } from './StatsCards';
import { QuickActions } from './QuickActions';
import { RecentActivity } from './RecentActivity';

interface MainDashboardProps {
  onSectionChange: (section: string) => void;
}

export const MainDashboard = ({ onSectionChange }: MainDashboardProps) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to your multi-branch business management platform
        </p>
      </div>
      
      <StatsCards />
      
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <QuickActions onSectionChange={onSectionChange} />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
};
