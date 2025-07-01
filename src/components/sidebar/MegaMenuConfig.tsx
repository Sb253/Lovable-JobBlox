
import { LucideIcon, 
  Home, BarChart3, Zap, Users, Target, MessageSquare, Star,
  Briefcase, Calendar, Timer, Shield, CheckSquare, Camera,
  DollarSign, FileText, Receipt, CreditCard, TrendingUp, Calculator,
  UserCheck, Package, Truck, Hammer, MapPin, Database,
  Brain, FileCode, PieChart, Settings, Building2, Smartphone,
  PhoneCall, Bell
} from "lucide-react";

export interface SidebarSection {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SidebarGroup {
  label: string;
  items: SidebarSection[];
  icon: LucideIcon;
  defaultOpen?: boolean;
}

export const createMenuGroups = (sections: SidebarSection[]): SidebarGroup[] => [
  {
    label: 'Dashboard & Overview',
    icon: Home,
    defaultOpen: true,
    items: [
      { id: 'dashboard', label: 'Home', icon: Home },
      { id: 'goals', label: 'KPIs', icon: BarChart3 },
      { id: 'quick-actions', label: 'Quick Actions', icon: Zap }
    ]
  },
  {
    label: 'Customer Management 👥',
    icon: Users,
    defaultOpen: false,
    items: [
      { id: 'customers', label: 'Customers', icon: Users },
      { id: 'customer-form', label: 'Customer Intake Form', icon: Users },
      { id: 'client-appointment', label: 'Client Appointment', icon: Calendar },
      { id: 'communication', label: 'Communication', icon: MessageSquare },
      { id: 'reviews', label: 'Reviews', icon: Star }
    ]
  },
  {
    label: 'Job Operations 🔧',
    icon: Briefcase,
    defaultOpen: false,
    items: [
      { id: 'jobs', label: 'Jobs', icon: Briefcase },
      { id: 'job-form', label: 'Job Form', icon: Briefcase },
      { id: 'pipeline', label: 'Pipeline', icon: Target },
      { id: 'schedule', label: 'Schedule', icon: Calendar },
      { id: 'time-tracking', label: 'Time Tracking', icon: Timer },
      { id: 'photos', label: 'Photos', icon: Camera },
      { id: 'safety', label: 'Safety', icon: Shield },
      { id: 'quality', label: 'Quality', icon: CheckSquare }
    ]
  },
  {
    label: 'Financial Management 💰',
    icon: DollarSign,
    defaultOpen: false,
    items: [
      { id: 'estimates', label: 'Estimates', icon: FileText },
      { id: 'invoices', label: 'Invoices', icon: Receipt },
      { id: 'expenses', label: 'Expenses', icon: CreditCard },
      { id: 'goals', label: 'Goals', icon: Target },
      { id: 'tax-financial', label: 'Tax & Financial', icon: Calculator },
      { id: 'financial-analytics', label: 'Financial Analytics', icon: TrendingUp },
      { id: 'payment-integration', label: 'Payment Integration', icon: CreditCard },
      { id: 'profit-analysis', label: 'Profit Analysis', icon: Calculator },
      { id: 'quickbooks-integration', label: 'QuickBooks Integration', icon: Database },
      { id: 'accounting-integration', label: 'Accounting Integration', icon: Database }
    ]
  },
  {
    label: 'Team & Resources 📦',
    icon: UserCheck,
    defaultOpen: false,
    items: [
      { id: 'team-management', label: 'Team Management', icon: UserCheck },
      { id: 'hr-features', label: 'HR Features', icon: Users },
      { id: 'subcontractor-management', label: 'Subcontractor Management', icon: Hammer },
      { id: 'materials-services', label: 'Materials & Services', icon: Package },
      { id: 'inventory', label: 'Inventory', icon: Package },
      { id: 'equipment', label: 'Equipment', icon: Hammer },
      { id: 'vehicles', label: 'Vehicles', icon: Truck },
      { id: 'advanced-inventory', label: 'Advanced Inventory', icon: Package },
      { id: 'employee-locations', label: 'Employee Locations', icon: MapPin },
      { id: 'radius-assignment', label: 'Radius Assignment', icon: MapPin },
      { id: 'location-management', label: 'Location Management', icon: MapPin }
    ]
  },
  {
    label: 'AI & Automation',
    icon: Brain,
    defaultOpen: false,
    items: [
      { id: 'ai-chat', label: 'AI Chat', icon: Brain },
      { id: 'smart-document-generator', label: 'Document Generation', icon: FileCode },
      { id: 'predictive-analytics', label: 'Predictive Analytics', icon: TrendingUp },
      { id: 'ai-settings', label: 'AI Settings', icon: Settings }
    ]
  },
  {
    label: 'Integrations',
    icon: Database,
    defaultOpen: false,
    items: [
      { id: 'quickbooks-integration', label: 'QuickBooks', icon: Database },
      { id: 'payment-integration', label: 'Payment Processing', icon: CreditCard },
      { id: 'integrations', label: 'APIs', icon: Database }
    ]
  },
  {
    label: 'Reports & Analytics 📊',
    icon: PieChart,
    defaultOpen: false,
    items: [
      { id: 'reports', label: 'Reports', icon: PieChart },
      { id: 'analytics', label: 'Analytics', icon: BarChart3 },
      { id: 'map-view', label: 'Map View', icon: MapPin },
      { id: 'predictive-analytics', label: 'Predictive Analytics', icon: TrendingUp },
      { id: 'advanced-reporting', label: 'Advanced Reporting', icon: PieChart }
    ]
  },
  {
    label: 'Communication 💬',
    icon: MessageSquare,
    defaultOpen: false,
    items: [
      { id: 'team-chat', label: 'Team Chat', icon: PhoneCall },
      { id: 'notifications', label: 'Notifications', icon: Bell }
    ]
  },
  {
    label: 'Settings & Admin ⚙️',
    icon: Settings,
    defaultOpen: false,
    items: [
      { id: 'company-settings', label: 'Company Settings', icon: Building2 },
      { id: 'back-office', label: 'Back Office', icon: Settings },
      { id: 'mobile-settings', label: 'Mobile Settings', icon: Smartphone },
      { id: 'branch-management', label: 'Branch Management', icon: Building2 }
    ]
  }
];
