
import React from 'react';
import { IntegrationStats } from './components/IntegrationStats';
import { IntegrationCategory } from './components/IntegrationCategory';
import { integrationCategories } from './data/integrationData';

export const AdvancedIntegrationsHub = () => {
  const handleConnect = (integrationName: string) => {
    console.log('Connecting to:', integrationName);
    // TODO: Implement connection logic
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Advanced Integrations Hub</h2>
        <p className="text-muted-foreground">
          Connect your favorite tools and services to create a unified workflow
        </p>
      </div>

      <IntegrationStats />

      <div className="space-y-8">
        {integrationCategories.map((category) => (
          <IntegrationCategory
            key={category.title}
            title={category.title}
            integrations={category.integrations}
            onConnect={handleConnect}
          />
        ))}
      </div>
    </div>
  );
};
