
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Database, Zap, AlertTriangle } from "lucide-react";

export const IntegrationStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Database className="h-6 w-6 text-blue-600" />
            <div>
              <p className="text-lg font-semibold">47</p>
              <p className="text-sm text-muted-foreground">Total Integrations</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Activity className="h-6 w-6 text-green-600" />
            <div>
              <p className="text-lg font-semibold">12</p>
              <p className="text-sm text-muted-foreground">Active Connections</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <Zap className="h-6 w-6 text-purple-600" />
            <div>
              <p className="text-lg font-semibold">1,247</p>
              <p className="text-sm text-muted-foreground">API Calls Today</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-orange-600" />
            <div>
              <p className="text-lg font-semibold">0</p>
              <p className="text-sm text-muted-foreground">Failed Syncs</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
