
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Monitor, Activity, AlertTriangle } from "lucide-react";

export const SystemHealthTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Monitor className="h-5 w-5" />
            System Health
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Database</span>
              <Badge className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>API Services</span>
              <Badge className="bg-green-100 text-green-800">Healthy</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Background Jobs</span>
              <Badge className="bg-green-100 text-green-800">Running</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Performance Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Response Time</span>
              <span className="font-medium">120ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span>CPU Usage</span>
              <span className="font-medium">23%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Memory Usage</span>
              <span className="font-medium">45%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Recent Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              No critical alerts
            </div>
            <div className="text-xs text-green-600">
              All systems operational
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
