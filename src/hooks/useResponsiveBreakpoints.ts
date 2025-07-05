
import { useState, useEffect } from 'react';

export interface ResponsiveBreakpoints {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLargeDesktop: boolean;
  currentBreakpoint: 'mobile' | 'tablet' | 'desktop' | 'large-desktop';
}

export const useResponsiveBreakpoints = (): ResponsiveBreakpoints => {
  const [breakpoints, setBreakpoints] = useState<ResponsiveBreakpoints>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isLargeDesktop: false,
    currentBreakpoint: 'desktop'
  });

  useEffect(() => {
    const updateBreakpoints = () => {
      const width = window.innerWidth;
      
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024 && width < 1440;
      const isLargeDesktop = width >= 1440;
      
      let currentBreakpoint: 'mobile' | 'tablet' | 'desktop' | 'large-desktop' = 'desktop';
      
      if (isMobile) currentBreakpoint = 'mobile';
      else if (isTablet) currentBreakpoint = 'tablet';
      else if (isDesktop) currentBreakpoint = 'desktop';
      else if (isLargeDesktop) currentBreakpoint = 'large-desktop';

      setBreakpoints({
        isMobile,
        isTablet,
        isDesktop,
        isLargeDesktop,
        currentBreakpoint
      });
    };

    // Initial check
    updateBreakpoints();

    // Listen for resize events
    window.addEventListener('resize', updateBreakpoints);
    
    // Listen for orientation changes (mobile specific)
    window.addEventListener('orientationchange', updateBreakpoints);

    return () => {
      window.removeEventListener('resize', updateBreakpoints);
      window.removeEventListener('orientationchange', updateBreakpoints);
    };
  }, []);

  return breakpoints;
};
