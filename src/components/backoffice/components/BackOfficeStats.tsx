
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Database, 
  Activity, 
  TrendingUp, 
  CheckCircle 
} from "lucide-react";

export const BackOfficeStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Users className="h-8 w-8 text-blue-600" />
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-muted-foreground">Active Users</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Database className="h-8 w-8 text-green-600" />
            <div>
              <p className="text-2xl font-bold">12</p>
              <p className="text-sm text-muted-foreground">Integrations</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Activity className="h-8 w-8 text-purple-600" />
            <div>
              <p className="text-2xl font-bold">99.9%</p>
              <p className="text-sm text-muted-foreground">Uptime</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-orange-600" />
            <div>
              <p className="text-2xl font-bold">1.2M</p>
              <p className="text-sm text-muted-foreground">API Calls</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
