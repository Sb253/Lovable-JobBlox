
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Crown, Key, Shield, Database, Settings, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface OwnerAccessProps {
  onAccessGranted: () => void;
}

export const OwnerAccess = ({ onAccessGranted }: OwnerAccessProps) => {
  const { toast } = useToast();
  const [masterKey, setMasterKey] = useState('');
  const [step, setStep] = useState<'verify' | 'setup'>('verify');

  // Master key for owner access - in production, this would be more secure
  const MASTER_KEY = 'JOBBLOX-OWNER-2024';

  const handleVerifyAccess = () => {
    if (masterKey === MASTER_KEY) {
      toast({
        title: "Owner Access Granted",
        description: "Welcome back, system owner!",
      });
      onAccessGranted();
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid master key. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSetupMode = () => {
    // For first-time setup, allow direct access
    toast({
      title: "Owner Access Granted",
      description: "Setting up system as owner...",
    });
    onAccessGranted();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Crown className="h-12 w-12 text-purple-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-purple-800">
            Owner Access Required
          </CardTitle>
          <p className="text-muted-foreground">
            Administrative privileges needed to continue
          </p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {step === 'verify' ? (
            <>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="masterKey">Master Key</Label>
                  <div className="relative">
                    <Key className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="masterKey"
                      type="password"
                      placeholder="Enter master key"
                      value={masterKey}
                      onChange={(e) => setMasterKey(e.target.value)}
                      className="pl-10"
                      onKeyPress={(e) => e.key === 'Enter' && handleVerifyAccess()}
                    />
                  </div>
                </div>
                
                <Button onClick={handleVerifyAccess} className="w-full">
                  <Shield className="h-4 w-4 mr-2" />
                  Verify Access
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    First Time Setup?
                  </span>
                </div>
              </div>

              <Button 
                variant="outline" 
                onClick={handleSetupMode}
                className="w-full"
              >
                <Settings className="h-4 w-4 mr-2" />
                Initialize as Owner
              </Button>
            </>
          ) : (
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">System Initialization</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Setting up your JobBlox system with owner privileges
                </p>
              </div>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-green-600">
                  <Database className="h-4 w-4" />
                  Database configured
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Users className="h-4 w-4" />
                  User management enabled
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <Shield className="h-4 w-4" />
                  Security policies applied
                </div>
              </div>
              
              <Button onClick={handleSetupMode} className="w-full">
                Complete Setup
              </Button>
            </div>
          )}

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-2">
              <Crown className="h-4 w-4 text-amber-600 mt-0.5" />
              <div className="text-xs text-amber-800">
                <p className="font-medium mb-1">Owner Access Information:</p>
                <p>This grants full administrative control over the system including user management, system settings, and security configuration.</p>
                <p className="mt-2 font-mono text-xs bg-amber-100 p-1 rounded">
                  Master Key: JOBBLOX-OWNER-2024
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
