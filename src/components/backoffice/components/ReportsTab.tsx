
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Users, Globe } from "lucide-react";

export const ReportsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            System Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">Performance Report</Button>
            <Button variant="outline" className="w-full">Usage Analytics</Button>
            <Button variant="outline" className="w-full">Error Logs</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">Activity Report</Button>
            <Button variant="outline" className="w-full">Access Report</Button>
            <Button variant="outline" className="w-full">Security Report</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="h-5 w-5" />
            Integration Reports
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">Sync Report</Button>
            <Button variant="outline" className="w-full">API Usage</Button>
            <Button variant="outline" className="w-full">Error Analysis</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
