
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Play, Pause, Square, Timer } from "lucide-react";

export const TimeTracking = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');

  const timeEntries = [
    { id: 1, job: 'Kitchen Renovation', date: '2024-01-15', duration: '4h 30m', status: 'completed' },
    { id: 2, job: 'Plumbing Repair', date: '2024-01-15', duration: '2h 15m', status: 'in-progress' },
    { id: 3, job: 'Bathroom Install', date: '2024-01-14', duration: '6h 45m', status: 'completed' }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Time Tracking</h1>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Timer className="h-5 w-5 mr-2" />
            Current Timer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <div className="text-6xl font-mono font-bold">{currentTime}</div>
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => setIsTracking(!isTracking)}
                variant={isTracking ? "destructive" : "default"}
              >
                {isTracking ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isTracking ? 'Pause' : 'Start'}
              </Button>
              <Button variant="outline">
                <Square className="h-4 w-4 mr-2" />
                Stop
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Recent Time Entries</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {timeEntries.map((entry) => (
              <div key={entry.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">{entry.job}</h4>
                  <p className="text-sm text-muted-foreground">{entry.date}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-lg font-semibold">
                    <Clock className="h-4 w-4 mr-1" />
                    {entry.duration}
                  </div>
                  <Badge variant={entry.status === 'completed' ? 'default' : 'secondary'}>
                    {entry.status}
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
