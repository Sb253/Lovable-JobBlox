
import { LucideIcon, Users, Wrench, DollarSign, Package, MessageSquare, MapPin } from "lucide-react";

export interface SidebarSection {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface MenuGroup {
  id: string;
  label: string;
  icon: LucideIcon;
  sections: SidebarSection[];
  badge?: string;
  defaultOpen?: boolean;
}

export const createMenuGroups = (sections: SidebarSection[]): MenuGroup[] => [
  {
    id: 'customers',
    label: 'Customer Management',
    icon: Users,
    sections: sections.filter(s => 
      ['customers', 'customer-form', 'pipeline', 'client-appointment', 'communication', 'reviews'].includes(s.id)
    ),
    defaultOpen: true
  },
  {
    id: 'jobs',
    label: 'Job Operations',
    icon: Wrench,
    sections: sections.filter(s => 
      ['jobs', 'job-form', 'schedule', 'time-tracking', 'photos', 'safety', 'quality'].includes(s.id)
    )
  },
  {
    id: 'financial',
    label: 'Financial Management',
    icon: DollarSign,
    sections: sections.filter(s => 
      ['estimates', 'invoices', 'expenses', 'goals', 'tax-financial', 'payment-integration', 'profit-analysis'].includes(s.id)
    )
  },
  {
    id: 'resources',
    label: 'Team & Resources',
    icon: Package,
    sections: sections.filter(s => 
      ['team-management', 'hr-features', 'subcontractor-management', 'materials-services', 'inventory', 'equipment', 'vehicles', 'advanced-inventory', 'employee-locations', 'radius-assignment', 'location-management', 'branch-management'].includes(s.id)
    )
  },
  {
    id: 'operations',
    label: 'Operations & Location',
    icon: MapPin,
    sections: sections.filter(s => 
      ['map-view', 'location-management', 'branch-management'].includes(s.id)
    )
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: MessageSquare,
    sections: sections.filter(s => 
      ['team-chat', 'notifications'].includes(s.id)
    )
  }
];
