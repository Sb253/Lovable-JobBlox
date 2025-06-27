
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Download, Calendar, Check, X, Star } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 29,
    period: "month",
    features: ["Up to 5 projects", "10GB storage", "Email support", "Basic analytics"],
    recommended: false
  },
  {
    name: "Professional",
    price: 79,
    period: "month", 
    features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "API access"],
    recommended: true
  },
  {
    name: "Enterprise",
    price: 199,
    period: "month",
    features: ["Everything in Pro", "Custom integrations", "Dedicated support", "SSO", "Advanced security"],
    recommended: false
  }
];

const invoices = [
  { id: "INV-001", date: "2024-01-01", amount: 79, status: "paid" },
  { id: "INV-002", date: "2024-02-01", amount: 79, status: "paid" },
  { id: "INV-003", date: "2024-03-01", amount: 79, status: "pending" }
];

export const BillingPage = () => {
  const [currentPlan] = useState("Professional");
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Billing & Subscription</h1>
        <p className="text-muted-foreground">Manage your subscription and billing information</p>
      </div>

      <Tabs defaultValue="subscription" className="space-y-6">
        <TabsList>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
          <TabsTrigger value="usage">Usage</TabsTrigger>
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="payment">Payment Methods</TabsTrigger>
        </TabsList>

        <TabsContent value="subscription">
          <div className="space-y-6">
            {/* Current Plan */}
            <Card>
              <CardHeader>
                <CardTitle>Current Plan</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-100 text-blue-800">{currentPlan}</Badge>
                    <span className="text-2xl font-bold">$79</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Change Plan</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Your subscription renews on March 15, 2024
                </p>
              </CardContent>
            </Card>

            {/* Billing Cycle Toggle */}
            <div className="flex justify-center">
              <div className="flex items-center gap-4 p-1 bg-muted rounded-lg">
                <Button
                  variant={billingCycle === "monthly" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setBillingCycle("monthly")}
                >
                  Monthly
                </Button>
                <Button
                  variant={billingCycle === "yearly" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setBillingCycle("yearly")}
                >
                  Yearly
                  <Badge className="ml-2 bg-green-100 text-green-800 text-xs">Save 20%</Badge>
                </Button>
              </div>
            </div>

            {/* Plans */}
            <div className="grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <Card key={plan.name} className={plan.recommended ? "border-primary shadow-lg" : ""}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      {plan.recommended && (
                        <Badge className="bg-primary">
                          <Star className="h-3 w-3 mr-1" />
                          Recommended
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold">
                        ${billingCycle === "yearly" ? Math.round(plan.price * 0.8) : plan.price}
                      </span>
                      <span className="text-muted-foreground">
                        /{billingCycle === "yearly" ? "year" : "month"}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full" 
                      variant={currentPlan === plan.name ? "outline" : "default"}
                      disabled={currentPlan === plan.name}
                    >
                      {currentPlan === plan.name ? "Current Plan" : "Upgrade"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="usage">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Usage This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Projects</span>
                    <span>15 / 25</span>
                  </div>
                  <Progress value={60} />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>Storage</span>
                    <span>45GB / 100GB</span>
                  </div>
                  <Progress value={45} />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span>API Calls</span>
                    <span>8,234 / 50,000</span>
                  </div>
                  <Progress value={16} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="invoices">
          <Card>
            <CardHeader>
              <CardTitle>Invoice History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="font-medium">{invoice.id}</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(invoice.date).toLocaleDateString()}
                        </p>
                      </div>
                      <Badge variant={invoice.status === "paid" ? "default" : "secondary"}>
                        {invoice.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-medium">${invoice.amount}</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payment">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <CreditCard className="h-8 w-8" />
                      <div>
                        <p className="font-medium">•••• •••• •••• 4242</p>
                        <p className="text-sm text-muted-foreground">Expires 12/25</p>
                      </div>
                      <Badge>Default</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
