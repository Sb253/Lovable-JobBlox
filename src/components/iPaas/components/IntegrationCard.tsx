
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  status: 'connected' | 'available' | 'coming-soon';
  category: string;
  onConnect?: () => void;
}

export const IntegrationCard: React.FC<IntegrationCardProps> = ({
  name,
  description,
  icon: Icon,
  status,
  category,
  onConnect
}) => {
  const getStatusBadge = () => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-green-100 text-green-800">Connected</Badge>;
      case 'available':
        return <Badge variant="outline">Available</Badge>;
      case 'coming-soon':
        return <Badge variant="secondary">Coming Soon</Badge>;
      default:
        return null;
    }
  };

  const getActionButton = () => {
    switch (status) {
      case 'connected':
        return <Button variant="outline" size="sm">Configure</Button>;
      case 'available':
        return <Button size="sm" onClick={onConnect}>Connect</Button>;
      case 'coming-soon':
        return <Button variant="ghost" size="sm" disabled>Notify Me</Button>;
      default:
        return null;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon className="h-6 w-6" />
            <CardTitle className="text-lg">{name}</CardTitle>
          </div>
          {getStatusBadge()}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">{category}</span>
          {getActionButton()}
        </div>
      </CardContent>
    </Card>
  );
};
