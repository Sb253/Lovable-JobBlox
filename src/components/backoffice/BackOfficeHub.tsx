
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { BackOfficeStats } from './components/BackOfficeStats';
import { BackOfficeTabs } from './components/BackOfficeTabs';

export const BackOfficeHub = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Back Office Management</h1>
          <p className="text-muted-foreground">
            Comprehensive administrative control center
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-800">
            <CheckCircle className="h-3 w-3 mr-1" />
            System Healthy
          </Badge>
        </div>
      </div>

      <BackOfficeStats />
      <BackOfficeTabs />
    </div>
  );
};
