
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield } from "lucide-react";

interface DemoModeToggleProps {
  onEnableDemo: () => void;
}

export const DemoModeToggle = ({ onEnableDemo }: DemoModeToggleProps) => {
  return (
    <Card className="mt-6 border-orange-200 bg-orange-50/50">
      <CardContent className="pt-6">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-5 w-5 text-orange-600" />
            <Badge variant="outline" className="border-orange-300 text-orange-700">
              Demo Mode Available
            </Badge>
          </div>
          
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Quick Demo Access</h3>
            <p className="text-sm text-gray-600 mb-4">
              Explore the full platform immediately without creating an account. 
              Perfect for testing and demonstrations.
            </p>
          </div>
          
          <Button 
            onClick={onEnableDemo}
            variant="outline"
            className="w-full border-orange-300 text-orange-700 hover:bg-orange-100"
          >
            <Zap className="h-4 w-4 mr-2" />
            Enter Demo Mode
          </Button>
          
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
            <Shield className="h-3 w-3" />
            <span>Production auth system remains secure</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
