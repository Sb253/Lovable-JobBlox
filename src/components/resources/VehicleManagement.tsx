
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Truck, MapPin, Fuel, Calendar, AlertTriangle } from "lucide-react";

export const VehicleManagement = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Service Van #1',
      make: 'Ford',
      model: 'Transit',
      year: 2022,
      license: 'ABC-123',
      status: 'active',
      assignedTo: 'John Smith',
      mileage: 45230,
      lastService: '2024-01-01',
      nextService: '2024-04-01'
    },
    {
      id: 2,
      name: 'Pickup Truck #1', 
      make: 'Chevrolet',
      model: 'Silverado',
      year: 2021,
      license: 'XYZ-789',
      status: 'maintenance',
      assignedTo: null,
      mileage: 62100,
      lastService: '2024-01-10',
      nextService: '2024-01-25'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'out-of-service': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Truck className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Vehicle Management</h1>
        </div>
        <Button>
          <Truck className="h-4 w-4 mr-2" />
          Add Vehicle
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Vehicles</p>
                <p className="text-2xl font-bold">{vehicles.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <MapPin className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Active</p>
                <p className="text-2xl font-bold">
                  {vehicles.filter(v => v.status === 'active').length}
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
                <p className="text-sm font-medium text-muted-foreground">In Maintenance</p>
                <p className="text-2xl font-bold">
                  {vehicles.filter(v => v.status === 'maintenance').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Fuel className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Avg Mileage</p>
                <p className="text-2xl font-bold">
                  {Math.round(vehicles.reduce((sum, v) => sum + v.mileage, 0) / vehicles.length).toLocaleString()}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="fleet" className="space-y-4">
        <TabsList>
          <TabsTrigger value="fleet">Fleet Overview</TabsTrigger>
          <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
          <TabsTrigger value="tracking">GPS Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="fleet">
          <Card>
            <CardHeader>
              <CardTitle>Vehicle Fleet</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{vehicle.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {vehicle.year} {vehicle.make} {vehicle.model} • {vehicle.license}
                      </p>
                      <p className="text-sm">Mileage: {vehicle.mileage.toLocaleString()} miles</p>
                      {vehicle.assignedTo && (
                        <p className="text-sm text-blue-600">Assigned to: {vehicle.assignedTo}</p>
                      )}
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right text-sm">
                        <p>Last Service: {vehicle.lastService}</p>
                        <p>Next Service: {vehicle.nextService}</p>
                      </div>
                      <Badge className={getStatusColor(vehicle.status)}>
                        {vehicle.status}
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
                {vehicles.map((vehicle) => (
                  <div key={vehicle.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{vehicle.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Next service due: {vehicle.nextService}
                      </p>
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

        <TabsContent value="tracking">
          <Card>
            <CardHeader>
              <CardTitle>GPS Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <MapPin className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">GPS Tracking Integration</h3>
                <p className="text-muted-foreground">
                  Connect your GPS tracking system to monitor vehicle locations in real-time
                </p>
                <Button className="mt-4">
                  Configure GPS Integration
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
