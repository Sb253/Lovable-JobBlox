
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Square, Clock, Calendar, User, Briefcase } from "lucide-react";

interface TimeEntry {
  id: string;
  jobTitle: string;
  customer: string;
  employee: string;
  startTime: string;
  endTime?: string;
  duration: number;
  status: 'active' | 'paused' | 'completed';
  description: string;
  hourlyRate: number;
}

export const TimeTracking = () => {
  const [activeTimer, setActiveTimer] = useState<string | null>('1');
  const [timeEntries] = useState<TimeEntry[]>([
    {
      id: '1',
      jobTitle: 'Kitchen Renovation',
      customer: 'John Smith',
      employee: 'Mike Johnson',
      startTime: '2024-01-20T09:00:00',
      duration: 180, // minutes
      status: 'active',
      description: 'Installing kitchen cabinets',
      hourlyRate: 75
    },
    {
      id: '2',
      jobTitle: 'Bathroom Repair',
      customer: 'ABC Construction',
      employee: 'Sarah Wilson',
      startTime: '2024-01-20T08:00:00',
      endTime: '2024-01-20T12:00:00',
      duration: 240,
      status: 'completed',
      description: 'Plumbing repair and tile work',
      hourlyRate: 80
    },
    {
      id: '3',
      jobTitle: 'Roof Inspection',
      customer: 'Sarah Johnson',
      employee: 'Tom Davis',
      startTime: '2024-01-20T14:00:00',
      duration: 90,
      status: 'paused',
      description: 'Safety inspection and documentation',
      hourlyRate: 65
    }
  ]);

  const formatDuration = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const calculateEarnings = (duration: number, rate: number) => {
    return ((duration / 60) * rate).toFixed(2);
  };

  const getStatusColor = (status: TimeEntry['status']) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleTimerAction = (id: string, action: 'start' | 'pause' | 'stop') => {
    console.log(`Timer ${action} for entry ${id}`);
    // Timer logic would be implemented here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Time Tracking</h1>
          <p className="text-muted-foreground">Track work hours and manage timesheets</p>
        </div>
        <Button className="flex items-center gap-2">
          <Play className="h-4 w-4" />
          Start New Timer
        </Button>
      </div>

      {/* Active Timer Card */}
      {activeTimer && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Clock className="h-5 w-5" />
              Active Timer
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Kitchen Renovation</h3>
                <p className="text-muted-foreground">John Smith • Mike Johnson</p>
                <p className="text-sm text-muted-foreground mt-1">Installing kitchen cabinets</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-mono font-bold text-green-600">3:00:00</div>
                <div className="text-sm text-muted-foreground">$225.00 earned</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button size="sm" variant="outline">
                <Pause className="h-4 w-4 mr-1" />
                Pause
              </Button>
              <Button size="sm" variant="outline">
                <Square className="h-4 w-4 mr-1" />
                Stop
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Time Entries List */}
      <div className="grid gap-4">
        {timeEntries.map((entry) => (
          <Card key={entry.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{entry.jobTitle}</h3>
                    <Badge className={getStatusColor(entry.status)}>
                      {entry.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Customer: {entry.customer}
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-4 w-4" />
                        Employee: {entry.employee}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Duration: {formatDuration(entry.duration)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Started: {new Date(entry.startTime).toLocaleString()}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2">{entry.description}</p>
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-semibold">
                    ${calculateEarnings(entry.duration, entry.hourlyRate)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    @ ${entry.hourlyRate}/hr
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {entry.status === 'paused' && (
                  <Button 
                    size="sm" 
                    onClick={() => handleTimerAction(entry.id, 'start')}
                  >
                    <Play className="h-4 w-4 mr-1" />
                    Resume
                  </Button>
                )}
                {entry.status === 'active' && entry.id !== activeTimer && (
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => handleTimerAction(entry.id, 'pause')}
                  >
                    <Pause className="h-4 w-4 mr-1" />
                    Pause
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
