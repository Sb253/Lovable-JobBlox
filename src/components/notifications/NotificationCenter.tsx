
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Bell, BellRing, Check, X, Settings, Mail, Smartphone, AlertTriangle } from "lucide-react";

export const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New job assigned', message: 'You have been assigned to Job #J-001', time: '2 min ago', read: false, type: 'job' },
    { id: 2, title: 'Payment received', message: 'Invoice #INV-001 has been paid', time: '1 hour ago', read: false, type: 'payment' },
    { id: 3, title: 'Team member added', message: 'Sarah Johnson joined your team', time: '3 hours ago', read: true, type: 'team' },
    { id: 4, title: 'Reminder: Upcoming job', message: 'Job at 123 Main St starts in 30 minutes', time: '1 day ago', read: true, type: 'reminder' }
  ]);

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    jobReminders: true,
    paymentAlerts: true,
    teamUpdates: false,
    marketingEmails: false
  });

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'job': return '💼';
      case 'payment': return '💰';
      case 'team': return '👥';
      case 'reminder': return '⏰';
      default: return '📢';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl font-bold">Notifications</h1>
          {unreadCount > 0 && (
            <Badge variant="destructive">{unreadCount} unread</Badge>
          )}
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={markAllAsRead}>
            <Check className="h-4 w-4 mr-2" />
            Mark All Read
          </Button>
          <Button variant="outline">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="unread">Unread ({unreadCount})</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <Card key={notification.id} className={`transition-all ${!notification.read ? 'border-blue-200 bg-blue-50/50' : ''}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{getTypeIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className={`font-semibold ${!notification.read ? 'text-blue-900' : ''}`}>
                            {notification.title}
                          </h3>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {!notification.read && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => markAsRead(notification.id)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      )}
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="unread">
          <div className="space-y-3">
            {notifications.filter(n => !n.read).map((notification) => (
              <Card key={notification.id} className="border-blue-200 bg-blue-50/50">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">{getTypeIcon(notification.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold text-blue-900">{notification.title}</h3>
                          <div className="w-2 h-2 bg-blue-600 rounded-full" />
                        </div>
                        <p className="text-muted-foreground text-sm mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => markAsRead(notification.id)}
                      >
                        <Check className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => deleteNotification(notification.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Notifications
                </h3>
                <div className="space-y-3 ml-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Job Reminders</label>
                      <p className="text-sm text-muted-foreground">Get reminded about upcoming jobs</p>
                    </div>
                    <Switch 
                      checked={settings.jobReminders}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, jobReminders: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Payment Alerts</label>
                      <p className="text-sm text-muted-foreground">Notifications when payments are received</p>
                    </div>
                    <Switch 
                      checked={settings.paymentAlerts}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, paymentAlerts: checked }))}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Team Updates</label>
                      <p className="text-sm text-muted-foreground">Updates about team member activities</p>
                    </div>
                    <Switch 
                      checked={settings.teamUpdates}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, teamUpdates: checked }))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center">
                  <Smartphone className="h-5 w-5 mr-2" />
                  Push Notifications
                </h3>
                <div className="space-y-3 ml-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Enable Push Notifications</label>
                      <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                    </div>
                    <Switch 
                      checked={settings.pushNotifications}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, pushNotifications: checked }))}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Marketing
                </h3>
                <div className="space-y-3 ml-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="font-medium">Marketing Emails</label>
                      <p className="text-sm text-muted-foreground">Product updates and promotional content</p>
                    </div>
                    <Switch 
                      checked={settings.marketingEmails}
                      onCheckedChange={(checked) => setSettings(prev => ({ ...prev, marketingEmails: checked }))}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
