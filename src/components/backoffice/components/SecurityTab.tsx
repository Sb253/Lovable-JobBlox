
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Database, Bell } from "lucide-react";

export const SecurityTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Security Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>SSL Status</span>
              <Badge className="bg-green-100 text-green-800">Active</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>2FA Enabled</span>
              <Badge className="bg-green-100 text-green-800">Yes</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Failed Logins (24h)</span>
              <span className="font-medium">3</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data Protection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">Backup Now</Button>
            <Button variant="outline" className="w-full">Encryption Status</Button>
            <Button variant="outline" className="w-full">Audit Logs</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Security Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-sm text-muted-foreground">
              No security incidents
            </div>
            <div className="text-xs text-green-600">
              All security checks passed
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
