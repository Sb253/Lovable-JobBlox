
import React from 'react';
import { createSectionRegistry } from './sections/SectionFactory';

interface SectionRegistryProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export const SectionRegistry: React.FC<SectionRegistryProps> = ({ activeSection, onSectionChange }) => {
  const sectionRegistry = createSectionRegistry();
  const component = sectionRegistry[activeSection as keyof typeof sectionRegistry];
  
  if (component) {
    return (
      <React.Suspense fallback={
        <div className="flex items-center justify-center min-h-96">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </div>
      }>
        {component}
      </React.Suspense>
    );
  }
  
  return (
    <div className="p-6">
      <div className="text-center text-muted-foreground">
        <h2 className="text-2xl font-semibold mb-2">Section Not Found</h2>
        <p>The section "{activeSection}" could not be found.</p>
      </div>
    </div>
  );
};

export { createSectionRegistry };
