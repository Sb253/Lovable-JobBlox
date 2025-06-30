
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, Mail, Phone, Send, Inbox } from "lucide-react";

export const CommunicationHub = () => {
  const messages = [
    { id: 1, type: 'email', from: 'John Smith', subject: 'Kitchen Renovation Update', time: '2 hours ago', status: 'unread' },
    { id: 2, type: 'sms', from: 'Sarah Johnson', message: 'What time will you arrive?', time: '1 hour ago', status: 'read' },
    { id: 3, type: 'call', from: 'Mike Davis', duration: '5:30', time: '30 min ago', status: 'missed' }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="h-4 w-4" />;
      case 'sms': return <MessageSquare className="h-4 w-4" />;
      case 'call': return <Phone className="h-4 w-4" />;
      default: return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-blue-100 text-blue-800';
      case 'missed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MessageSquare className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">Communication Hub</h1>
        </div>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          New Message
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Inbox className="h-8 w-8 text-blue-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Unread</p>
                <p className="text-2xl font-bold">
                  {messages.filter(m => m.status === 'unread').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Mail className="h-8 w-8 text-green-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Emails</p>
                <p className="text-2xl font-bold">
                  {messages.filter(m => m.type === 'email').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <MessageSquare className="h-8 w-8 text-purple-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">SMS</p>
                <p className="text-2xl font-bold">
                  {messages.filter(m => m.type === 'sms').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <Phone className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-muted-foreground">Calls</p>
                <p className="text-2xl font-bold">
                  {messages.filter(m => m.type === 'call').length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Messages</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="sms">SMS</TabsTrigger>
          <TabsTrigger value="calls">Calls</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <Card>
            <CardHeader>
              <CardTitle>Recent Communications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-muted rounded-full">
                        {getTypeIcon(message.type)}
                      </div>
                      <div>
                        <h4 className="font-medium">{message.from}</h4>
                        <p className="text-sm text-muted-foreground">
                          {message.subject || message.message || `Call duration: ${message.duration}`}
                        </p>
                        <p className="text-xs text-muted-foreground">{message.time}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(message.status)}>
                      {message.status}
                    </Badge>
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
