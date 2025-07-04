
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Bell, Database } from "lucide-react";

export const SettingsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            General Settings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">System Configuration</Button>
            <Button variant="outline" className="w-full">Environment Variables</Button>
            <Button variant="outline" className="w-full">Feature Flags</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">Email Settings</Button>
            <Button variant="outline" className="w-full">Alert Rules</Button>
            <Button variant="outline" className="w-full">Notification Templates</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Data Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">Backup Settings</Button>
            <Button variant="outline" className="w-full">Data Retention</Button>
            <Button variant="outline" className="w-full">Export Data</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
