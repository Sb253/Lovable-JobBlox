
import React from 'react';

interface PlaceholderSectionProps {
  sectionName: string;
}

export const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({ sectionName }) => (
  <div className="p-6">
    <div className="text-center text-muted-foreground">
      <h2 className="text-2xl font-semibold mb-2">{sectionName}</h2>
      <p>This section is under development.</p>
    </div>
  </div>
);
