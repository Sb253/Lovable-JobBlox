
import React from 'react';
import { IntegrationCard } from './IntegrationCard';
import { LucideIcon } from "lucide-react";

interface Integration {
  name: string;
  description: string;
  icon: LucideIcon;
  status: 'connected' | 'available' | 'coming-soon';
}

interface IntegrationCategoryProps {
  title: string;
  integrations: Integration[];
  onConnect: (integrationName: string) => void;
}

export const IntegrationCategory: React.FC<IntegrationCategoryProps> = ({
  title,
  integrations,
  onConnect
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {integrations.map((integration) => (
          <IntegrationCard
            key={integration.name}
            name={integration.name}
            description={integration.description}
            icon={integration.icon}
            status={integration.status}
            category={title}
            onConnect={() => onConnect(integration.name)}
          />
        ))}
      </div>
    </div>
  );
};
