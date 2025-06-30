
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, AlertTriangle, CheckCircle, FileText, Users } from "lucide-react";

export const SafetyManagement = () => {
  const safetyReports = [
    { id: 1, type: 'Incident', title: 'Minor Cut on Hand', severity: 'low', date: '2024-01-15', status: 'resolved' },
    { id: 2, type: 'Near Miss', title: 'Ladder Slipped', severity: 'medium', date: '2024-01-12', status: 'investigating' },
    { id: 3, type: 'Hazard', title: 'Exposed Wiring', severity: 'high', date: '2024-01-10', status: 'pending' }
  ];

  const safetyProtocols = [
    { id: 1, title: 'PPE Requirements', status: 'active', lastUpdated: '2024-01-01' },
    { id: 2, title: 'Ladder Safety', status: 'active', lastUpdated: '2024-01-01' },
    { id: 3, title: 'Chemical Handling', status: 'active', lastUpdated: '2024-01-01' }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-green-600" />
          <h1 className="text-3xl font-bold">Safety Management</h1>
        </div>
        <Button>
          <AlertTriangle className="h-4 w-4 mr-2" />
          Report Incident
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Days Without Incident</p>
                <p className="text-2xl font-bold">45</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Open Reports</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Protocols</p>
                <p className="text-2xl font-bold">{safetyProtocols.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Users className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Trained Staff</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="reports" className="space-y-4">
        <TabsList>
          <TabsTrigger value="reports">Safety Reports</TabsTrigger>
          <TabsTrigger value="protocols">Safety Protocols</TabsTrigger>
          <TabsTrigger value="training">Training Records</TabsTrigger>
        </TabsList>

        <TabsContent value="reports">
          <Card>
            <CardHeader>
              <CardTitle>Recent Safety Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{report.title}</h4>
                        <Badge className={getSeverityColor(report.severity)}>
                          {report.severity}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{report.type} • {report.date}</p>
                    </div>
                    <Badge variant={report.status === 'resolved' ? 'default' : 'secondary'}>
                      {report.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="protocols">
          <Card>
            <CardHeader>
              <CardTitle>Safety Protocols</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {safetyProtocols.map((protocol) => (
                  <div key={protocol.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{protocol.title}</h4>
                      <p className="text-sm text-muted-foreground">Last updated: {protocol.lastUpdated}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-100 text-green-800">
                        {protocol.status}
                      </Badge>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
