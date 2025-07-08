
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useTenant } from '../../contexts/TenantContext';
import { isSingleTenantMode, isMultiTenantMode } from '../../config/tenant-mode';

interface TenantRouteProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export const TenantRoute: React.FC<TenantRouteProps> = ({ children, requireAuth = false }) => {
  const { tenantId: urlTenantId } = useParams();
  const { tenantId: contextTenantId, isLoading, currentTenant } = useTenant();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading tenant...</p>
        </div>
      </div>
    );
  }

  // In multi-tenant mode, validate URL tenant matches context
  if (isMultiTenantMode() && urlTenantId && urlTenantId !== contextTenantId) {
    return <Navigate to={`/t/${contextTenantId}/dashboard`} replace />;
  }

  // In single-tenant mode, redirect tenant-prefixed URLs to clean URLs
  if (isSingleTenantMode() && urlTenantId) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!currentTenant) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tenant Not Found</h1>
          <p className="text-muted-foreground">The requested tenant could not be found.</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
