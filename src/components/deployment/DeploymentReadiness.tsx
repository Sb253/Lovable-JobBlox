
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, XCircle, Rocket, Shield, Globe, Smartphone } from "lucide-react";

interface ChecklistItem {
  id: string;
  title: string;
  status: 'complete' | 'warning' | 'error';
  description: string;
  action?: string;
}

export const DeploymentReadiness = () => {
  const checklistItems: ChecklistItem[] = [
    {
      id: 'multi-tenant',
      title: 'Multi-Tenant Architecture',
      status: 'complete',
      description: 'Multi-tenant layout with admin panel implemented'
    },
    {
      id: 'mobile-support',
      title: 'Mobile App Support',
      status: 'complete',
      description: 'Capacitor configured for iOS and Android deployment'
    },
    {
      id: 'glass-morphism',
      title: 'Glass Morphism Design',
      status: 'complete',
      description: 'Glass morphism applied to cards with gradient backgrounds'
    },
    {
      id: 'theme-support',
      title: 'Theme Support',
      status: 'complete',
      description: 'Light and dark theme support with proper color handling'
    },
    {
      id: 'subscription-management',
      title: 'Subscription Management',
      status: 'complete',
      description: 'Tenant subscription and add-on management system'
    },
    {
      id: 'admin-panel',
      title: 'Admin Panel',
      status: 'complete',
      description: 'Admin subscription panel for tenant management'
    },
    {
      id: 'responsive-design',
      title: 'Responsive Design',
      status: 'complete',
      description: 'Mobile-first responsive design implemented'
    },
    {
      id: 'error-handling',
      title: 'Error Handling',
      status: 'warning',
      description: 'Basic error boundaries in place, consider enhanced error tracking',
      action: 'Add comprehensive error monitoring'
    },
    {
      id: 'performance',
      title: 'Performance Optimization',
      status: 'warning',
      description: 'Lazy loading implemented, consider code splitting optimization',
      action: 'Optimize bundle size and loading times'
    },
    {
      id: 'security',
      title: 'Security Measures',
      status: 'warning',
      description: 'Basic authentication implemented, consider additional security layers',
      action: 'Add rate limiting and enhanced security headers'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'complete': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning': return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'error': return <XCircle className="h-5 w-5 text-red-600" />;
      default: return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete': return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'warning': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400';
      case 'error': return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const completeCount = checklistItems.filter(item => item.status === 'complete').length;
  const totalCount = checklistItems.length;
  const readinessPercentage = Math.round((completeCount / totalCount) * 100);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Rocket className="h-8 w-8 text-blue-600" />
            Deployment Readiness
          </h1>
          <p className="text-muted-foreground">
            Pre-deployment checklist and status overview
          </p>
        </div>
        <Badge className="text-lg px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
          {readinessPercentage}% Ready
        </Badge>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">Web</p>
                <p className="text-sm text-muted-foreground">Ready to Deploy</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">Mobile</p>
                <p className="text-sm text-muted-foreground">iOS & Android</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <div>
                <p className="text-2xl font-bold">Multi-Tenant</p>
                <p className="text-sm text-muted-foreground">Architecture Ready</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div>
                <p className="text-2xl font-bold">{completeCount}/{totalCount}</p>
                <p className="text-sm text-muted-foreground">Items Complete</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Deployment Checklist */}
      <Card className="glass">
        <CardHeader>
          <CardTitle>Deployment Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {checklistItems.map(item => (
              <div key={item.id} className="glass-subtle p-4 rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3 flex-1">
                    {getStatusIcon(item.status)}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      {item.action && (
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          Recommended: {item.action}
                        </p>
                      )}
                    </div>
                  </div>
                  {item.status === 'warning' && (
                    <Button variant="outline" size="sm" className="ml-4">
                      Improve
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Deployment Actions */}
      <Card className="glass border-green-200 dark:border-green-800">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">Ready for Deployment</h3>
              <p className="text-sm text-muted-foreground">
                Your application meets the minimum requirements for deployment
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="glass">
                Run Tests
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Rocket className="h-4 w-4 mr-2" />
                Deploy Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
