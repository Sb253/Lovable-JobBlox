
import React, { ComponentType } from 'react';
import { useTenant } from '../../contexts/TenantContext';

interface TenantGuardOptions {
  requireFeatures?: string[];
  fallback?: React.ComponentType;
}

export function withTenantGuard<P extends object>(
  WrappedComponent: ComponentType<P>,
  options: TenantGuardOptions = {}
) {
  const TenantGuardedComponent: React.FC<P> = (props) => {
    const { currentTenant, isLoading } = useTenant();
    const { requireFeatures = [], fallback: Fallback } = options;

    if (isLoading) {
      return (
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      );
    }

    if (!currentTenant) {
      if (Fallback) {
        return <Fallback />;
      }
      return (
        <div className="text-center p-6">
          <h2 className="text-xl font-semibold mb-2">Access Denied</h2>
          <p className="text-muted-foreground">Tenant not found or not authorized.</p>
        </div>
      );
    }

    // Check feature requirements
    if (requireFeatures.length > 0) {
      const hasAllFeatures = requireFeatures.every(feature => 
        currentTenant.features[feature as keyof typeof currentTenant.features]
      );

      if (!hasAllFeatures) {
        if (Fallback) {
          return <Fallback />;
        }
        return (
          <div className="text-center p-6">
            <h2 className="text-xl font-semibold mb-2">Feature Not Available</h2>
            <p className="text-muted-foreground">
              This feature is not enabled for your tenant.
            </p>
          </div>
        );
      }
    }

    return <WrappedComponent {...props} />;
  };

  TenantGuardedComponent.displayName = `withTenantGuard(${WrappedComponent.displayName || WrappedComponent.name})`;

  return TenantGuardedComponent;
}
