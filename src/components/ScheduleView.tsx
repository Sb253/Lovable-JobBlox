
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronLeft, ChevronRight, Plus, Clock, MapPin, User } from "lucide-react";

interface ScheduleEvent {
  id: string;
  title: string;
  customer: string;
  address: string;
  time: string;
  duration: string;
  status: 'scheduled' | 'in-progress' | 'completed';
  assignedTo: string;
  type: 'job' | 'appointment' | 'meeting';
}

export const ScheduleView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');

  const events: ScheduleEvent[] = [
    {
      id: '1',
      title: 'Kitchen Renovation',
      customer: 'John Smith',
      address: '123 Main St',
      time: '09:00',
      duration: '4 hours',
      status: 'scheduled',
      assignedTo: 'Mike Johnson',
      type: 'job'
    },
    {
      id: '2',
      title: 'Consultation',
      customer: 'ABC Construction',
      address: '456 Business Ave',
      time: '14:00',
      duration: '1 hour',
      status: 'scheduled',
      assignedTo: 'Sarah Wilson',
      type: 'appointment'
    },
    {
      id: '3',
      title: 'Team Meeting',
      customer: 'Internal',
      address: 'Office',
      time: '16:00',
      duration: '30 minutes',
      status: 'scheduled',
      assignedTo: 'All Team',
      type: 'meeting'
    }
  ];

  const getStatusColor = (status: ScheduleEvent['status']) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: ScheduleEvent['type']) => {
    switch (type) {
      case 'job': return 'bg-purple-100 text-purple-800';
      case 'appointment': return 'bg-orange-100 text-orange-800';
      case 'meeting': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const navigateDate = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (view === 'day') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 1 : -1));
    } else if (view === 'week') {
      newDate.setDate(newDate.getDate() + (direction === 'next' ? 7 : -7));
    } else {
      newDate.setMonth(newDate.getMonth() + (direction === 'next' ? 1 : -1));
    }
    setCurrentDate(newDate);
  };

  const formatDateRange = () => {
    const today = new Date(currentDate);
    if (view === 'day') {
      return today.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } else if (view === 'week') {
      const startOfWeek = new Date(today);
      startOfWeek.setDate(today.getDate() - today.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      
      return `${startOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endOfWeek.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
    } else {
      return today.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Schedule</h1>
          <p className="text-muted-foreground">Manage appointments and job scheduling</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          New Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" onClick={() => navigateDate('prev')}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <h2 className="text-lg font-semibold">{formatDateRange()}</h2>
              <Button variant="outline" size="sm" onClick={() => navigateDate('next')}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              {(['day', 'week', 'month'] as const).map(viewType => (
                <Button
                  key={viewType}
                  variant={view === viewType ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setView(viewType)}
                >
                  {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="border-l-4 border-l-blue-500">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Badge className={getStatusColor(event.status)}>
                          {event.status.replace('-', ' ')}
                        </Badge>
                        <Badge className={getTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {event.time} ({event.duration})
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {event.assignedTo}
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {event.customer}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {event.address}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      {event.status === 'scheduled' && (
                        <Button size="sm">
                          Start
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
