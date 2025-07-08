
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../AppHeader';
import { UnifiedSidebar } from '../UnifiedSidebar';
import { TenantDashboard } from './TenantDashboard';
import { ClientManagement } from '../tenant/ClientManagement';
import { SubscriptionManager } from '../subscription/SubscriptionManager';
import { DemoTrialManager } from '../demo/DemoTrialManager';
import { WorkflowAutomation } from '../WorkflowAutomation';
import { IntegrationsSection } from '../sections/IntegrationsSection';
import { NotificationsSection } from '../sections/NotificationsSection';
import { ProfileSection } from '../sections/ProfileSection';
import { SettingsSection } from '../sections/SettingsSection';
import { SecuritySection } from '../sections/SecuritySection';
import { TenantSubscriptionManager } from '../subscription/TenantSubscriptionManager';
import { AdminSubscriptionPanel } from '../admin/AdminSubscriptionPanel';
import { 
  Building2, 
  Users, 
  CreditCard, 
  BarChart3, 
  Settings,
  Zap,
  Clock,
  Globe,
  Shield,
  Bell,
  User,
  Crown,
  Package
} from "lucide-react";

export const MultiTenantLayout = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [userType, setUserType] = useState<'admin' | 'tenant' | 'trial' | null>(null);

  // Mock tenant data with subscription info
  const mockTenant = {
    id: 'tenant-001',
    name: 'Acme Construction Co.',
    plan: 'professional',
    status: 'active',
    clientCount: 15,
    subscriptionEnd: '2024-08-15',
    trialEnd: undefined,
    addOns: ['advanced-reporting', 'ai-features'],
    availableAddOns: [
      { id: 'advanced-reporting', name: 'Advanced Reporting', price: 29 },
      { id: 'ai-features', name: 'AI Features', price: 49 },
      { id: 'white-label', name: 'White Label', price: 99 },
      { id: 'api-access', name: 'API Access', price: 39 }
    ]
  };

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Get user type from session storage or redirect to auth
    const storedUserType = sessionStorage.getItem('userType') || sessionStorage.getItem('devUserType');
    if (storedUserType && ['admin', 'tenant', 'trial'].includes(storedUserType)) {
      setUserType(storedUserType as 'admin' | 'tenant' | 'trial');
    } else {
      navigate('/auth');
    }
  }, [navigate]);

  const sections = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'clients', label: 'Client Management', icon: Users },
    { id: 'subscription', label: 'Subscription', icon: CreditCard },
    { id: 'add-ons', label: 'Add-ons & Features', icon: Package },
    { id: 'automation', label: 'Workflow Automation', icon: Zap },
    { id: 'trial-manager', label: 'Trial Management', icon: Clock },
    { id: 'integrations', label: 'Integrations', icon: Globe },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'security', label: 'Security', icon: Shield },
    ...(userType === 'admin' ? [
      { id: 'admin-subscriptions', label: 'Tenant Subscriptions', icon: Crown }
    ] : [])
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <TenantDashboard tenant={mockTenant} />;
      case 'clients':
        return <ClientManagement tenantId={mockTenant.id} />;
      case 'subscription':
        return <SubscriptionManager tenant={mockTenant} />;
      case 'add-ons':
        return <TenantSubscriptionManager tenant={mockTenant} />;
      case 'admin-subscriptions':
        return userType === 'admin' ? <AdminSubscriptionPanel /> : <TenantDashboard tenant={mockTenant} />;
      case 'automation':
        return <WorkflowAutomation />;
      case 'trial-manager':
        return <DemoTrialManager />;
      case 'integrations':
        return <IntegrationsSection />;
      case 'notifications':
        return <NotificationsSection />;
      case 'profile':
        return <ProfileSection userType={userType} />;
      case 'settings':
        return <SettingsSection />;
      case 'security':
        return <SecuritySection />;
      default:
        return <TenantDashboard tenant={mockTenant} />;
    }
  };

  if (!userType) {
    return null; // Will redirect to auth
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
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
          <div className="glass-card p-6 min-h-[calc(100vh-8rem)]">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
};
