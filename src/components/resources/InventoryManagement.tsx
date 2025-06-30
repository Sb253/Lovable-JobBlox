
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Package, Search, Plus, AlertTriangle, TrendingDown } from "lucide-react";

export const InventoryManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const inventoryItems = [
    { id: 1, name: 'PVC Pipes (2")', category: 'Plumbing', quantity: 25, minStock: 10, unit: 'pieces', cost: 15.50 },
    { id: 2, name: 'Wire Nuts', category: 'Electrical', quantity: 5, minStock: 20, unit: 'boxes', cost: 8.99 },
    { id: 3, name: 'Drywall Screws', category: 'Hardware', quantity: 150, minStock: 50, unit: 'pieces', cost: 0.12 },
    { id: 4, name: 'Paint (White)', category: 'Materials', quantity: 3, minStock: 5, unit: 'gallons', cost: 45.00 }
  ];

  const lowStockItems = inventoryItems.filter(item => item.quantity <= item.minStock);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Package className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Inventory Management</h1>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Item
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Items</p>
                <p className="text-2xl font-bold">{inventoryItems.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
                <p className="text-2xl font-bold">{lowStockItems.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <TrendingDown className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                <p className="text-2xl font-bold">
                  ${inventoryItems.reduce((sum, item) => sum + (item.quantity * item.cost), 0).toFixed(2)}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Package className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Categories</p>
                <p className="text-2xl font-bold">
                  {new Set(inventoryItems.map(item => item.category)).size}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {lowStockItems.length > 0 && (
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2" />
              Low Stock Alert
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span className="text-red-700">{item.name}</span>
                  <Badge variant="destructive">
                    {item.quantity} {item.unit} remaining
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search inventory..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {inventoryItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="font-semibold">{item.quantity} {item.unit}</p>
                    <p className="text-sm text-muted-foreground">${item.cost} each</p>
                  </div>
                  <Badge variant={item.quantity <= item.minStock ? 'destructive' : 'default'}>
                    {item.quantity <= item.minStock ? 'Low Stock' : 'In Stock'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
