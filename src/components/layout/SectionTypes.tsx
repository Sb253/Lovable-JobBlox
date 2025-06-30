
import { 
  Home, Users, Briefcase, Calendar, Clock, FileText, Receipt, 
  CreditCard, UserCheck, Package, Truck, Settings, PieChart,
  Map, Bell, MessageSquare, Camera, Shield, CheckSquare,
  Building, Wrench, DollarSign, TrendingUp, Crown, Database,
  BarChart3, Calculator, Zap, UserCog, User, HelpCircle,
  Key, Code, Star, PlayCircle, Activity, Plug
} from "lucide-react";

export interface Section {
  id: string;
  title: string;
  icon: any;
  category: string;
  description?: string;
  requiresOwnerAccess?: boolean;
}

export const sections: Section[] = [
  // Core Business
  { id: 'home', title: 'Dashboard', icon: Home, category: 'core' },
  { id: 'customers', title: 'Customers', icon: Users, category: 'core' },
  { id: 'customer-form', title: 'Add Customer', icon: Users, category: 'core' },
  { id: 'jobs', title: 'Jobs', icon: Briefcase, category: 'core' },
  { id: 'schedule', title: 'Schedule', icon: Calendar, category: 'core' },
  
  // Operations
  { id: 'time-tracking', title: 'Time Tracking', icon: Clock, category: 'operations' },
  { id: 'estimates', title: 'Estimates', icon: FileText, category: 'operations' },
  { id: 'invoices', title: 'Invoices', icon: Receipt, category: 'operations' },
  { id: 'expenses', title: 'Expenses', icon: CreditCard, category: 'operations' },
  
  // Team & Resources
  { id: 'team-management', title: 'Team', icon: UserCheck, category: 'team' },
  { id: 'inventory', title: 'Inventory', icon: Package, category: 'team' },
  { id: 'equipment', title: 'Equipment', icon: Wrench, category: 'team' },
  { id: 'vehicles', title: 'Vehicles', icon: Truck, category: 'team' },
  
  // Advanced Features  
  { id: 'pipeline', title: 'Sales Pipeline', icon: TrendingUp, category: 'advanced' },
  { id: 'communication', title: 'Communication', icon: MessageSquare, category: 'advanced' },
  { id: 'reviews', title: 'Reviews', icon: CheckSquare, category: 'advanced' },
  { id: 'photos', title: 'Photos', icon: Camera, category: 'advanced' },
  { id: 'client-appointment', title: 'Appointments', icon: Calendar, category: 'advanced' },
  
  // Analytics & Reports
  { id: 'goals', title: 'KPI Dashboard', icon: BarChart3, category: 'analytics' },
  { id: 'reports', title: 'Reports Center', icon: PieChart, category: 'analytics' },
  { id: 'profit-analysis', title: 'Profit Analysis', icon: Calculator, category: 'analytics' },
  { id: 'tax-financial', title: 'Tax & Financial', icon: DollarSign, category: 'analytics' },
  { id: 'activity-feed', title: 'Activity Feed', icon: Activity, category: 'analytics' },
  
  // Management
  { id: 'branch-management', title: 'Multi-Branch', icon: Building, category: 'management' },
  { id: 'location-management', title: 'Locations', icon: Map, category: 'management' },
  { id: 'safety', title: 'Safety', icon: Shield, category: 'management' },
  { id: 'quality', title: 'Quality Control', icon: CheckSquare, category: 'management' },
  
  // Account & Profile
  { id: 'profile', title: 'Profile', icon: User, category: 'account' },
  { id: 'billing', title: 'Billing', icon: Star, category: 'account' },
  { id: 'onboarding', title: 'Onboarding', icon: PlayCircle, category: 'account' },
  
  // Support & Resources
  { id: 'help-center', title: 'Help Center', icon: HelpCircle, category: 'support' },
  { id: 'api-docs', title: 'API Documentation', icon: Code, category: 'support' },
  
  // Integrations & Tools
  { id: 'integrations', title: 'Integrations', icon: Plug, category: 'tools' },
  { id: 'notifications', title: 'Notifications', icon: Bell, category: 'tools' },
  { id: 'map-view', title: 'Map View', icon: Map, category: 'tools' },
  { id: 'back-office', title: 'Settings', icon: Settings, category: 'tools' },
  
  // Admin (Owner Access Required)
  { id: 'admin-panel', title: 'Admin Panel', icon: Crown, category: 'admin', requiresOwnerAccess: true },
  { id: 'user-management', title: 'User Management', icon: UserCog, category: 'admin', requiresOwnerAccess: true },
  { id: 'system-settings', title: 'System Settings', icon: Database, category: 'admin', requiresOwnerAccess: true },
  
  // Auth & Recovery
  { id: 'password-recovery', title: 'Password Recovery', icon: Key, category: 'auth' },
];

export const sectionCategories = {
  core: 'Core Business',
  operations: 'Operations',
  team: 'Team & Resources', 
  advanced: 'Advanced Features',
  analytics: 'Analytics & Reports',
  management: 'Management',
  account: 'Account & Profile',
  support: 'Support & Resources',
  admin: 'Administration',
  tools: 'Tools & Settings',
  auth: 'Authentication'
};
