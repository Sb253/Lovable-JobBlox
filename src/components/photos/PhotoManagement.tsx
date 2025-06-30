
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera, Upload, Image, Folder, Download } from "lucide-react";

export const PhotoManagement = () => {
  const photoCategories = [
    { name: 'Before/After', count: 45, size: '125 MB' },
    { name: 'Progress', count: 32, size: '89 MB' },
    { name: 'Damage', count: 18, size: '67 MB' },
    { name: 'Materials', count: 23, size: '45 MB' }
  ];

  const recentPhotos = [
    { id: 1, name: 'Kitchen_Before_001.jpg', job: 'Kitchen Renovation', date: '2024-01-15', size: '2.3 MB', category: 'Before/After' },
    { id: 2, name: 'Bathroom_Progress_005.jpg', job: 'Bathroom Remodel', date: '2024-01-14', size: '1.8 MB', category: 'Progress' },
    { id: 3, name: 'Plumbing_Damage_002.jpg', job: 'Plumbing Repair', date: '2024-01-13', size: '3.1 MB', category: 'Damage' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Camera className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Photo Management</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload
          </Button>
          <Button>
            <Camera className="h-4 w-4 mr-2" />
            Take Photo
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {photoCategories.map((category) => (
          <Card key={category.name}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Folder className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">{category.name}</p>
                  <p className="text-2xl font-bold">{category.count}</p>
                  <p className="text-xs text-muted-foreground">{category.size}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recent">Recent Photos</TabsTrigger>
          <TabsTrigger value="by-job">By Job</TabsTrigger>
          <TabsTrigger value="by-category">By Category</TabsTrigger>
        </TabsList>

        <TabsContent value="recent">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Image className="h-5 w-5 mr-2" />
                Recent Photos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {recentPhotos.map((photo) => (
                  <Card key={photo.id} className="overflow-hidden">
                    <div className="h-48 bg-muted flex items-center justify-center">
                      <Image className="h-16 w-16 text-muted-foreground" />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium text-sm mb-1">{photo.name}</h4>
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <p>Job: {photo.job}</p>
                        <p>Date: {photo.date}</p>
                        <div className="flex items-center justify-between">
                          <span>{photo.size}</span>
                          <Badge variant="outline" className="text-xs">
                            {photo.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <Button variant="outline" size="sm" className="flex-1">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-job">
          <Card>
            <CardHeader>
              <CardTitle>Photos by Job</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Folder className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Organize by Job</h3>
                <p className="text-muted-foreground">
                  Photos are automatically organized by job for easy access
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="by-category">
          <Card>
            <CardHeader>
              <CardTitle>Photos by Category</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {photoCategories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Folder className="h-8 w-8 text-blue-600" />
                      <div>
                        <h4 className="font-medium">{category.name}</h4>
                        <p className="text-sm text-muted-foreground">{category.count} photos • {category.size}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      View All
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
