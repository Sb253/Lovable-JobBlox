
import { LucideIcon } from "lucide-react";
import { 
  Home, BarChart3, Zap, Users, Target, MessageSquare, Star,
  Briefcase, Calendar, Timer, Shield, CheckSquare, Camera,
  DollarSign, FileText, Receipt, CreditCard, TrendingUp, Calculator,
  UserCheck, Package, Truck, Hammer, MapPin, Database,
  Brain, FileCode, PieChart, Settings, Building2, Smartphone,
  PhoneCall, Bell, Rocket
} from "lucide-react";

export interface SidebarSection {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface SidebarGroup {
  label: string;
  icon: LucideIcon;
  items: SidebarSection[];
}

export const createMenuGroups = (sections: SidebarSection[]): SidebarGroup[] => {
  return [
    {
      label: "📊 Analytics & Reports",
      icon: BarChart3,
      items: sections.filter(s => 
        ['dashboard', 'goals', 'reports', 'analytics', 'financial-analytics', 'predictive-analytics', 'advanced-reporting'].includes(s.id)
      )
    },
    {
      label: "💰 Financial Management", 
      icon: DollarSign,
      items: sections.filter(s => 
        ['estimates', 'invoices', 'expenses', 'tax-financial', 'payment-integration', 'profit-analysis', 'quickbooks-integration', 'accounting-integration'].includes(s.id)
      )
    },
    {
      label: "🔧 Job Operations",
      icon: Briefcase,
      items: sections.filter(s => 
        ['jobs', 'job-form', 'pipeline', 'schedule', 'time-tracking', 'photos', 'safety', 'quality'].includes(s.id)
      )
    },
    {
      label: "👥 Customer & Team",
      icon: Users,
      items: sections.filter(s => 
        ['customers', 'customer-form', 'client-appointment', 'communication', 'reviews', 'team-management', 'hr-features', 'subcontractor-management'].includes(s.id)
      )
    },
    {
      label: "📦 Resources & Inventory",
      icon: Package,
      items: sections.filter(s => 
        ['materials-services', 'inventory', 'equipment', 'vehicles', 'advanced-inventory', 'employee-locations', 'radius-assignment', 'location-management'].includes(s.id)
      )
    },
    {
      label: "⚙️ AI & Automation",
      icon: Brain,
      items: sections.filter(s => 
        ['ai-chat', 'smart-document-generator', 'predictive-analytics', 'ai-settings'].includes(s.id)
      )
    },
    {
      label: "💬 Communication",
      icon: MessageSquare,
      items: sections.filter(s => 
        ['team-chat', 'notifications', 'internal-meetings'].includes(s.id)
      )
    }
  ].filter(group => group.items.length > 0);
};
