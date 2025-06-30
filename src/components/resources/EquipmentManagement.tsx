
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Wrench, Calendar, AlertTriangle, CheckCircle } from "lucide-react";

export const EquipmentManagement = () => {
  const equipment = [
    {
      id: 1,
      name: 'DeWalt Drill',
      category: 'Power Tools',
      status: 'available',
      assignedTo: null,
      lastMaintenance: '2024-01-01',
      nextMaintenance: '2024-04-01'
    },
    {
      id: 2,
      name: 'Hydraulic Jack',
      category: 'Heavy Equipment', 
      status: 'in-use',
      assignedTo: 'John Smith',
      lastMaintenance: '2024-01-15',
      nextMaintenance: '2024-07-15'
    },
    {
      id: 3,
      name: 'Ladder (20ft)',
      category: 'Safety Equipment',
      status: 'maintenance',
      assignedTo: null,
      lastMaintenance: '2024-01-10',
      nextMaintenance: '2024-01-20'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 text-green-800';
      case 'in-use': return 'bg-blue-100 text-blue-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'out-of-order': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Wrench className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Equipment Management</h1>
        </div>
        <Button>
          <Wrench className="h-4 w-4 mr-2" />
          Add Equipment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Available</p>
                <p className="text-2xl font-bold">
                  {equipment.filter(e => e.status === 'available').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Wrench className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">In Use</p>
                <p className="text-2xl font-bold">
                  {equipment.filter(e => e.status === 'in-use').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Maintenance</p>
                <p className="text-2xl font-bold">
                  {equipment.filter(e => e.status === 'maintenance').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Due Service</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="equipment" className="space-y-4">
        <TabsList>
          <TabsTrigger value="equipment">Equipment List</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance Schedule</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
        </TabsList>

        <TabsContent value="equipment">
          <Card>
            <CardHeader>
              <CardTitle>Equipment Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipment.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      {item.assignedTo && (
                        <p className="text-sm text-blue-600">Assigned to: {item.assignedTo}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right text-sm">
                        <p>Last Service: {item.lastMaintenance}</p>
                        <p>Next Service: {item.nextMaintenance}</p>
                      </div>
                      <Badge className={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="maintenance">
          <Card>
            <CardHeader>
              <CardTitle>Maintenance Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {equipment.filter(item => item.status === 'maintenance' || 
                  new Date(item.nextMaintenance) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
                ).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Next maintenance: {item.nextMaintenance}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Schedule Service
                    </Button>
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
