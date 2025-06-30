
import React, { useState, useEffect } from 'react';
import { AppHeader } from '../AppHeader';
import { UnifiedSidebar } from '../UnifiedSidebar';
import { SectionRegistry } from './SectionRegistry';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  Calendar,
  MapPin,
  FileText,
  Calculator,
  DollarSign,
  Settings,
  Bell,
  User,
  Shield,
  Camera,
  Clock,
  Truck,
  Hammer,
  Package,
  Target,
  MessageSquare,
  CheckSquare,
  AlertTriangle,
  TrendingUp,
  Building2,
  UserPlus,
  Globe
} from "lucide-react";

export const ResponsiveLayout = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sections = [
    // Dashboard & Analytics
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'widgets', label: 'Widgets', icon: BarChart3 },
    { id: 'analytics', label: 'Analytics', icon: TrendingUp },
    { id: 'reports', label: 'Reports', icon: FileText },
    
    // Customer Management
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'customer-form', label: 'Add Customer', icon: UserPlus },
    { id: 'pipeline', label: 'Sales Pipeline', icon: Target },
    { id: 'communication', label: 'Communication Hub', icon: MessageSquare },
    { id: 'reviews', label: 'Reviews & Feedback', icon: MessageSquare },
    
    // Job Management
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'job-form', label: 'Create Job', icon: Briefcase },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'time-tracking', label: 'Time Tracking', icon: Clock },
    { id: 'photos', label: 'Photo Management', icon: Camera },
    { id: 'safety', label: 'Safety Management', icon: AlertTriangle },
    { id: 'quality', label: 'Quality Control', icon: CheckSquare },
    
    // Team & Resources
    { id: 'team-management', label: 'Team Management', icon: Users },
    { id: 'subcontractor-management', label: 'Subcontractors', icon: Hammer },
    { id: 'inventory', label: 'Inventory', icon: Package },
    { id: 'equipment', label: 'Equipment', icon: Hammer },
    { id: 'vehicles', label: 'Vehicles', icon: Truck },
    
    // Financial
    { id: 'estimates', label: 'Estimates', icon: Calculator },
    { id: 'invoices', label: 'Invoices', icon: FileText },
    { id: 'expenses', label: 'Expenses', icon: DollarSign },
    { id: 'goals', label: 'Financial Goals', icon: Target },
    
    // Operations
    { id: 'map-view', label: 'Map View', icon: MapPin },
    
    // System & Settings
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'company-settings', label: 'Company Settings', icon: Building2 },
    { id: 'settings', label: 'System Settings', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-background">
      <AppHeader 
        onSectionChange={setActiveSection}
        onMobileSidebarToggle={() => setSidebarVisible(!sidebarVisible)}
        isMobile={isMobile}
      />
      
      <div className="flex pt-16">
        <UnifiedSidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          sections={sections}
          isVisible={isMobile ? sidebarVisible : true}
        />
        
        <main className={`flex-1 transition-all duration-300 ${
          isMobile 
            ? (sidebarVisible ? 'ml-0' : 'ml-0') 
            : (sidebarVisible ? 'ml-64' : 'ml-16')
        } p-6`}>
          <SectionRegistry 
            activeSection={activeSection} 
            onSectionChange={setActiveSection}
          />
        </main>
      </div>
    </div>
  );
};
