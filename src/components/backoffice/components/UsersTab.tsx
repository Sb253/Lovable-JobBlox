
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Shield } from "lucide-react";

export const UsersTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            User Management
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full">Add New User</Button>
            <Button variant="outline" className="w-full">Bulk Import Users</Button>
            <Button variant="outline" className="w-full">Export User Data</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Permissions & Roles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full">Manage Roles</Button>
            <Button variant="outline" className="w-full">Permission Matrix</Button>
            <Button variant="outline" className="w-full">Access Logs</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
