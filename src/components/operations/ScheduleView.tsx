
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, User, Plus, Filter } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const ScheduleView = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const scheduleItems = [
    {
      id: 1,
      title: 'Kitchen Renovation',
      customer: 'John Smith',
      time: '9:00 AM - 2:00 PM',
      location: '123 Main St',
      status: 'confirmed',
      technician: 'Mike Davis'
    },
    {
      id: 2,
      title: 'Plumbing Repair',
      customer: 'Sarah Johnson',
      time: '2:30 PM - 4:00 PM', 
      location: '456 Oak Ave',
      status: 'pending',
      technician: 'John Smith'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Schedule</h1>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Job
          </Button>
        </div>
      </div>

      <Tabs defaultValue="day" className="space-y-4">
        <TabsList>
          <TabsTrigger value="day">Day</TabsTrigger>
          <TabsTrigger value="week">Week</TabsTrigger>
          <TabsTrigger value="month">Month</TabsTrigger>
        </TabsList>

        <TabsContent value="day">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg">Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <Calendar className="h-48 w-full" />
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-3 space-y-4">
              {scheduleItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {item.customer}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {item.time}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                          </div>
                        </div>
                        <p className="text-sm">Assigned to: {item.technician}</p>
                      </div>
                      <Badge variant={item.status === 'confirmed' ? 'default' : 'secondary'}>
                        {item.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
