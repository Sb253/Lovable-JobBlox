
import React from 'react';
import { useAuth } from './AuthProvider';
import { useDemo } from './DemoProvider';
import { LoginForm } from './LoginForm';
import { DemoModeToggle } from './DemoModeToggle';
import { ResponsiveLayout } from '../layout/ResponsiveLayout';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogOut, Zap } from "lucide-react";

export const EnhancedProtectedLayout = () => {
  const { user, loading, signOut } = useAuth();
  const { isDemoMode, enableDemoMode, disableDemoMode } = useDemo();

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  // If in demo mode, show the app directly
  if (isDemoMode) {
    return (
      <>
        {/* Demo Mode Header */}
        <div className="fixed top-0 left-0 right-0 bg-orange-100 border-b border-orange-200 px-4 py-2 z-50">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-2">
              <Badge className="bg-orange-200 text-orange-800 hover:bg-orange-300">
                <Zap className="h-3 w-3 mr-1" />
                Demo Mode Active
              </Badge>
              <span className="text-sm text-orange-700">
                Exploring with sample data
              </span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={disableDemoMode}
              className="border-orange-300 text-orange-700 hover:bg-orange-200"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Exit Demo
            </Button>
          </div>
        </div>
        
        {/* Add top padding to account for demo header */}
        <div className="pt-12">
          <ResponsiveLayout />
        </div>
      </>
    );
  }

  // If not authenticated and not in demo mode, show login with demo option
  if (!user) {
    return (
      <div>
        <LoginForm />
        <div className="fixed bottom-4 right-4">
          <DemoModeToggle onEnableDemo={enableDemoMode} />
        </div>
      </div>
    );
  }

  // If authenticated, show the main app
  return <ResponsiveLayout />;
};
