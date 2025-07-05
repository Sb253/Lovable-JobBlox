
import React from 'react';
import { MobileOptimizedDashboard } from './MobileOptimizedDashboard';
import { useResponsiveBreakpoints } from '../../hooks/useResponsiveBreakpoints';

interface ResponsiveDashboardProps {
  onSectionChange: (section: string) => void;
}

export const ResponsiveDashboard = ({ onSectionChange }: ResponsiveDashboardProps) => {
  const { isMobile } = useResponsiveBreakpoints();

  // Always use mobile-optimized dashboard for mobile-first approach
  return <MobileOptimizedDashboard onSectionChange={onSectionChange} />;
};
