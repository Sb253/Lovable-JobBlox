
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Calendar, MapPin, DollarSign, User } from "lucide-react";

interface Job {
  id: string;
  title: string;
  customer: string;
  address: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  value: number;
  scheduledDate: string;
  assignedTo: string;
  description: string;
}

export const JobList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs] = useState<Job[]>([
    {
      id: '1',
      title: 'Kitchen Renovation',
      customer: 'John Smith',
      address: '123 Main St, Anytown, USA',
      status: 'in-progress',
      priority: 'high',
      value: 15000,
      scheduledDate: '2024-01-20',
      assignedTo: 'Mike Johnson',
      description: 'Complete kitchen renovation including cabinets, countertops, and appliances'
    },
    {
      id: '2',
      title: 'Bathroom Repair',
      customer: 'ABC Construction',
      address: '456 Business Ave, City, USA',
      status: 'scheduled',
      priority: 'medium',
      value: 5000,
      scheduledDate: '2024-01-25',
      assignedTo: 'Sarah Wilson',
      description: 'Fix plumbing issues and tile replacement'
    },
    {
      id: '3',
      title: 'Roof Inspection',
      customer: 'Sarah Johnson',
      address: '789 Oak Street, Town, USA',
      status: 'completed',
      priority: 'low',
      value: 500,
      scheduledDate: '2024-01-15',
      assignedTo: 'Tom Davis',
      description: 'Annual roof inspection and maintenance'
    }
  ]);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Job['status']) => {
    switch (status) {
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'in-progress': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: Job['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleNewJob = () => {
    const event = new CustomEvent('sectionChange', { detail: 'job-form' });
    window.dispatchEvent(event);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Jobs</h1>
          <p className="text-muted-foreground">Manage your job assignments and tracking</p>
        </div>
        <Button onClick={handleNewJob} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Job
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredJobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                  <div className="flex gap-2 mb-3">
                    <Badge className={getStatusColor(job.status)}>
                      {job.status.replace('-', ' ')}
                    </Badge>
                    <Badge className={getPriorityColor(job.priority)}>
                      {job.priority} priority
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">
                    ${job.value.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Customer: {job.customer}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {job.address}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    Scheduled: {new Date(job.scheduledDate).toLocaleDateString()}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Assigned to: {job.assignedTo}
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground mb-4">{job.description}</p>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  Edit Job
                </Button>
                {job.status === 'scheduled' && (
                  <Button size="sm">
                    Start Job
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
