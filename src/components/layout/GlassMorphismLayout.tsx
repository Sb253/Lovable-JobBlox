
import React, { useState, useEffect } from 'react';
import { GlassMorphismHeader } from '../GlassMorphismHeader';
import { SectionRegistry } from './SectionRegistry';
import { 
  Home, BarChart3, Zap, Users, Target, MessageSquare, Star,
  Briefcase, Calendar, Timer, Shield, CheckSquare, Camera,
  DollarSign, FileText, Receipt, CreditCard, TrendingUp, Calculator,
  UserCheck, Package, Truck, Hammer, MapPin, Database,
  Brain, FileCode, PieChart, Settings, Building2, Smartphone,
  PhoneCall, Bell
} from "lucide-react";

export const GlassMorphismLayout = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    // Ensure body has the correct classes for glass morphism
    document.body.classList.add('glass-mode');
    return () => {
      document.body.classList.remove('glass-mode');
    };
  }, []);

  const handleSectionChange = (section: string) => {
    console.log('GlassMorphismLayout: Section change:', section);
    setActiveSection(section);
  };

  const sections = [
    // Core sections
    { id: 'home', label: 'Home', icon: Home },
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'quick-actions', label: 'Quick Actions', icon: Zap },
    
    // Customer Management
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'customer-form', label: 'Customer Intake Form', icon: Users },
    { id: 'client-appointment', label: 'Client Appointment', icon: Calendar },
    { id: 'communication', label: 'Communication', icon: MessageSquare },
    { id: 'reviews', label: 'Reviews', icon: Star },
    
    // Job Operations
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'job-form', label: 'Job Form', icon: Briefcase },
    { id: 'pipeline', label: 'Pipeline', icon: Target },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'time-tracking', label: 'Time Tracking', icon: Timer },
    { id: 'photos', label: 'Photos', icon: Camera },
    { id: 'safety', label: 'Safety', icon: Shield },
    { id: 'quality', label: 'Quality', icon: CheckSquare },
    
    // Financial Management
    { id: 'estimates', label: 'Estimates', icon: FileText },
    { id: 'invoices', label: 'Invoices', icon: Receipt },
    { id: 'expenses', label: 'Expenses', icon: CreditCard },
    { id: 'tax-financial', label: 'Tax & Financial', icon: Calculator },
    { id: 'financial-analytics', label: 'Financial Analytics', icon: TrendingUp },
    { id: 'payment-integration', label: 'Payment Integration', icon: CreditCard },
    { id: 'profit-analysis', label: 'Profit Analysis', icon: Calculator },
    { id: 'quickbooks-integration', label: 'QuickBooks Integration', icon: Database },
    { id: 'accounting-integration', label: 'Accounting Integration', icon: Database },
    
    // Team & Resources
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
    { id: 'location-management', label: 'Location Management', icon: MapPin },
    
    // AI & Automation
    { id: 'ai-chat', label: 'AI Chat', icon: Brain },
    { id: 'smart-document-generator', label: 'Document Generation', icon: FileCode },
    { id: 'predictive-analytics', label: 'Predictive Analytics', icon: TrendingUp },
    { id: 'ai-settings', label: 'AI Settings', icon: Settings },
    
    // Integrations
    { id: 'integrations', label: 'APIs', icon: Database },
    
    // Reports & Analytics
    { id: 'reports', label: 'Reports', icon: PieChart },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'map-view', label: 'Map View', icon: MapPin },
    { id: 'advanced-reporting', label: 'Advanced Reporting', icon: PieChart },
    
    // Communication
    { id: 'team-chat', label: 'Team Chat', icon: PhoneCall },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'internal-meetings', label: 'Internal Meetings', icon: MessageSquare },
    
    // Settings & Administration
    { id: 'company-settings', label: 'Company Settings', icon: Building2 },
    { id: 'back-office', label: 'Back Office', icon: Settings },
    { id: 'mobile-settings', label: 'Mobile Settings', icon: Smartphone },
    { id: 'branch-management', label: 'Branch Management', icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-dark-gradient">
      <GlassMorphismHeader 
        onSectionChange={handleSectionChange}
        activeSection={activeSection}
      />
      
      <main className="pt-16 min-h-screen">
        <div className="glass-card m-4 p-6 min-h-[calc(100vh-8rem)]">
          <SectionRegistry 
            activeSection={activeSection} 
            onSectionChange={handleSectionChange}
          />
        </div>
      </main>
    </div>
  );
};
