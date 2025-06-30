
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckSquare, Star, AlertCircle, TrendingUp } from "lucide-react";

export const QualityControl = () => {
  const qualityChecks = [
    { id: 1, job: 'Kitchen Renovation', score: 9.5, status: 'passed', date: '2024-01-15', inspector: 'John Smith' },
    { id: 2, job: 'Bathroom Remodel', score: 8.2, status: 'passed', date: '2024-01-12', inspector: 'Sarah Johnson' },
    { id: 3, job: 'Plumbing Repair', score: 6.8, status: 'failed', date: '2024-01-10', inspector: 'Mike Davis' }
  ];

  const qualityMetrics = [
    { metric: 'Overall Score', value: '8.5/10', trend: 'up' },
    { metric: 'Pass Rate', value: '87%', trend: 'up' },
    { metric: 'Customer Rating', value: '4.6/5', trend: 'stable' },
    { metric: 'Rework Rate', value: '12%', trend: 'down' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <CheckSquare className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Quality Control</h1>
        </div>
        <Button>
          <CheckSquare className="h-4 w-4 mr-2" />
          New Inspection
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {qualityMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{metric.metric}</p>
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
                <TrendingUp className={`h-8 w-8 ${
                  metric.trend === 'up' ? 'text-green-600' : 
                  metric.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                }`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="inspections" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inspections">Recent Inspections</TabsTrigger>
          <TabsTrigger value="standards">Quality Standards</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="inspections">
          <Card>
            <CardHeader>
              <CardTitle>Quality Inspections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {qualityChecks.map((check) => (
                  <div key={check.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{check.job}</h4>
                      <p className="text-sm text-muted-foreground">Inspector: {check.inspector} • {check.date}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="font-semibold">{check.score}/10</span>
                        </div>
                      </div>
                      <Badge variant={check.status === 'passed' ? 'default' : 'destructive'}>
                        {check.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="standards">
          <Card>
            <CardHeader>
              <CardTitle>Quality Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Workmanship Standards</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    All work must meet industry best practices and local building codes
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Material Quality</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Use only approved materials that meet project specifications
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium">Safety Compliance</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    All safety protocols must be followed during work execution
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
