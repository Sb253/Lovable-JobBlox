
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Package, Plus, Crown, Zap, BarChart3, Globe, Palette } from "lucide-react";

interface TenantSubscriptionManagerProps {
  tenant: {
    id: string;
    name: string;
    plan: string;
    status: string;
    addOns: string[];
    availableAddOns: Array<{
      id: string;
      name: string;
      price: number;
    }>;
  };
}

export const TenantSubscriptionManager = ({ tenant }: TenantSubscriptionManagerProps) => {
  const [enabledAddOns, setEnabledAddOns] = useState<string[]>(tenant.addOns);
  const [silenceMode, setSilenceMode] = useState(true); // Silenced for now

  const addOnIcons = {
    'advanced-reporting': BarChart3,
    'ai-features': Zap,
    'white-label': Palette,
    'api-access': Globe
  };

  const toggleAddOn = (addOnId: string) => {
    if (silenceMode) return; // Silenced functionality
    
    setEnabledAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    );
  };

  const calculateMonthlyCost = () => {
    return enabledAddOns.reduce((total, addOnId) => {
      const addOn = tenant.availableAddOns.find(a => a.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Add-ons & Features</h1>
          <p className="text-muted-foreground">
            Enhance your subscription with additional features
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="glass">
            <Crown className="h-3 w-3 mr-1" />
            {tenant.plan.charAt(0).toUpperCase() + tenant.plan.slice(1)} Plan
          </Badge>
        </div>
      </div>

      {silenceMode && (
        <Card className="glass border-amber-200 dark:border-amber-800">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
              <Package className="h-5 w-5" />
              <div>
                <p className="font-medium">Feature Management Coming Soon</p>
                <p className="text-sm text-muted-foreground">
                  Add-on management and subscription upgrades will be available in the next release.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Current Add-ons */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Active Add-ons
          </CardTitle>
        </CardHeader>
        <CardContent>
          {enabledAddOns.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enabledAddOns.map(addOnId => {
                const addOn = tenant.availableAddOns.find(a => a.id === addOnId);
                const Icon = addOnIcons[addOnId as keyof typeof addOnIcons] || Package;
                
                return addOn ? (
                  <div key={addOn.id} className="glass-subtle p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                          <Icon className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <p className="font-medium">{addOn.name}</p>
                          <p className="text-sm text-muted-foreground">${addOn.price}/month</p>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                        Active
                      </Badge>
                    </div>
                  </div>
                ) : null;
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No add-ons currently active</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Available Add-ons */}
      <Card className="glass">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Available Add-ons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {tenant.availableAddOns.map(addOn => {
              const Icon = addOnIcons[addOn.id as keyof typeof addOnIcons] || Package;
              const isEnabled = enabledAddOns.includes(addOn.id);
              
              return (
                <div key={addOn.id} className="glass-subtle p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{addOn.name}</h3>
                          {isEnabled && (
                            <Badge size="sm" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                              Active
                            </Badge>
                          )}
                        </div>
                        <p className="text-2xl font-bold text-primary">${addOn.price}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={() => toggleAddOn(addOn.id)}
                        disabled={silenceMode}
                        className="data-[state=checked]:bg-green-500"
                      />
                      {!silenceMode && (
                        <Button 
                          variant={isEnabled ? "destructive" : "default"}
                          size="sm"
                          onClick={() => toggleAddOn(addOn.id)}
                        >
                          {isEnabled ? 'Remove' : 'Add'}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Cost Summary */}
      <Card className="glass border-blue-200 dark:border-blue-800">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Add-on Cost</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                ${calculateMonthlyCost()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Next Billing</p>
              <p className="font-medium">March 15, 2024</p>
            </div>
          </div>
          
          <Separator className="my-4" />
          
          <div className="flex items-center justify-between text-sm">
            <span>Changes will be prorated on your next bill</span>
            {!silenceMode && (
              <Button variant="outline" size="sm" className="glass">
                Review Changes
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
