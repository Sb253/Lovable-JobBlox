
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreditCard, BarChart3, FileText } from "lucide-react";

export const BillingTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CreditCard className="h-5 w-5" />
            Subscription
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>Plan</span>
              <Badge>Enterprise</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span>Next Billing</span>
              <span className="font-medium">Jan 15</span>
            </div>
            <Button variant="outline" className="w-full">Manage Plan</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Usage Analytics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span>API Calls</span>
              <span className="font-medium">1.2M / 5M</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Storage</span>
              <span className="font-medium">23GB / 100GB</span>
            </div>
            <Button variant="outline" className="w-full">View Details</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Invoices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Button variant="outline" className="w-full">Download Latest</Button>
            <Button variant="outline" className="w-full">Payment History</Button>
            <Button variant="outline" className="w-full">Update Billing</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
