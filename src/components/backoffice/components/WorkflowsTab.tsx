
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Workflow, Activity } from "lucide-react";

export const WorkflowsTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Workflow className="h-5 w-5" />
            Automation Workflows
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Button className="w-full">Create New Workflow</Button>
            <Button variant="outline" className="w-full">Import Template</Button>
            <Button variant="outline" className="w-full">Workflow Analytics</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Workflow Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Active Workflows</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Executions Today</span>
              <span className="font-medium">247</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Success Rate</span>
              <span className="font-medium">98.4%</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
