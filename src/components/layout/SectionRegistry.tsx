
import React from 'react';
import { demoDataService } from "../../services/demoDataService";

// Lazy load all components for better performance
const Dashboard = React.lazy(() => import("../Dashboard").then(m => ({ default: m.Dashboard })));
const CustomerList = React.lazy(() => import("../CustomerList").then(m => ({ default: m.CustomerList })));
const JobList = React.lazy(() => import("../JobList").then(m => ({ default: m.JobList })));
const InvoiceList = React.lazy(() => import("../InvoiceList").then(m => ({ default: m.InvoiceList })));
const ExpenseList = React.lazy(() => import("../ExpenseList").then(m => ({ default: m.ExpenseList })));
const MapView = React.lazy(() => import("../MapView").then(m => ({ default: m.MapView })));

// Auth and profile pages
const PasswordRecoveryPage = React.lazy(() => import("../auth/PasswordRecoveryPage").then(m => ({ default: m.PasswordRecoveryPage })));
const UserProfilePage = React.lazy(() => import("../profile/UserProfilePage").then(m => ({ default: m.UserProfilePage })));
const BillingPage = React.lazy(() => import("../billing/BillingPage").then(m => ({ default: m.BillingPage })));
const HelpCenterPage = React.lazy(() => import("../support/HelpCenterPage").then(m => ({ default: m.HelpCenterPage })));
const OnboardingFlow = React.lazy(() => import("../onboarding/OnboardingFlow").then(m => ({ default: m.OnboardingFlow })));
const APIDocumentationPage = React.lazy(() => import("../api/APIDocumentationPage").then(m => ({ default: m.APIDocumentationPage })));

// Core business components
const TeamDashboard = React.lazy(() => import("../team/TeamDashboard").then(m => ({ default: m.TeamDashboard })));
const NotificationCenter = React.lazy(() => import("../notifications/NotificationCenter").then(m => ({ default: m.NotificationCenter })));
const ActivityFeed = React.lazy(() => import("../activity/ActivityFeed").then(m => ({ default: m.ActivityFeed })));
const IntegrationsHub = React.lazy(() => import("../integrations/IntegrationsHub").then(m => ({ default: m.IntegrationsHub })));
const ReportsCenter = React.lazy(() => import("../reports/ReportsCenter").then(m => ({ default: m.ReportsCenter })));
const AdvancedSettings = React.lazy(() => import("../settings/AdvancedSettings").then(m => ({ default: m.AdvancedSettings })));
const SecurityCenter = React.lazy(() => import("../settings/SecurityCenter").then(m => ({ default: m.SecurityCenter })));

// Operations pages
const ScheduleView = React.lazy(() => import("../operations/ScheduleView").then(m => ({ default: m.ScheduleView })));
const TimeTracking = React.lazy(() => import("../operations/TimeTracking").then(m => ({ default: m.TimeTracking })));
const EstimateList = React.lazy(() => import("../operations/EstimateList").then(m => ({ default: m.EstimateList })));

// Management pages
const SafetyManagement = React.lazy(() => import("../management/SafetyManagement").then(m => ({ default: m.SafetyManagement })));
const QualityControl = React.lazy(() => import("../management/QualityControl").then(m => ({ default: m.QualityControl })));

// Resources pages
const InventoryManagement = React.lazy(() => import("../resources/InventoryManagement").then(m => ({ default: m.InventoryManagement })));
const EquipmentManagement = React.lazy(() => import("../resources/EquipmentManagement").then(m => ({ default: m.EquipmentManagement })));
const VehicleManagement = React.lazy(() => import("../resources/VehicleManagement").then(m => ({ default: m.VehicleManagement })));

// Mobile components
const ResponsiveDashboard = React.lazy(() => import("../mobile/ResponsiveDashboard").then(m => ({ default: m.ResponsiveDashboard })));
const MobileCustomerForm = React.lazy(() => import("../forms/MobileCustomerForm").then(m => ({ default: m.MobileCustomerForm })));

// Advanced components
const PipelineManagement = React.lazy(() => import("../advanced/PipelineManagement").then(m => ({ default: m.PipelineManagement })));
const CommunicationHub = React.lazy(() => import("../communication/CommunicationHub").then(m => ({ default: m.CommunicationHub })));
const PhotoManagement = React.lazy(() => import("../photos/PhotoManagement").then(m => ({ default: m.PhotoManagement })));

// Company Settings
const CompanySettings = React.lazy(() => import("../CompanySettings").then(m => ({ default: m.CompanySettings })));

// New iPaaS and Advanced Settings Components
const AdvancedIntegrationsHub = React.lazy(() => import("../iPaas/AdvancedIntegrationsHub").then(m => ({ default: m.AdvancedIntegrationsHub })));
const BackOfficeHub = React.lazy(() => import("../backoffice/BackOfficeHub").then(m => ({ default: m.BackOfficeHub })));
const AdvancedSettingsHub = React.lazy(() => import("../settings/AdvancedSettingsHub").then(m => ({ default: m.AdvancedSettingsHub })));
const IPaaSManager = React.lazy(() => import("../iPaas/iPaaSManager").then(m => ({ default: m.IPaaSManager })));

// Placeholder components for sections that need implementation
const PlaceholderSection = ({ sectionName }: { sectionName: string }) => (
  <div className="p-6">
    <div className="text-center text-muted-foreground">
      <h2 className="text-2xl font-semibold mb-2">{sectionName}</h2>
      <p>This section is under development.</p>
    </div>
  </div>
);

export const createSectionRegistry = () => {
  // Get demo data for map view
  const demoJobs = demoDataService.getJobs();
  const transformedJobs = demoJobs.map((job: any) => ({
    id: job.id,
    title: job.title,
    customer: job.customerName,
    address: job.location,
    coordinates: job.coordinates,
    status: job.status,
    type: 'job' as const,
    time: new Date(job.startDate).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    })
  }));

  return {
    // Dashboard & Overview
    'dashboard': <Dashboard />,
    'home': <ResponsiveDashboard onSectionChange={(section) => console.log('Navigate to', section)} />,
    'goals': <ReportsCenter />,
    'quick-actions': <PlaceholderSection sectionName="Quick Actions" />,
    
    // Customer Management
    'customers': <CustomerList />,
    'customer-form': <MobileCustomerForm 
      onBack={() => console.log('Navigate back')} 
      onSave={(customer) => console.log('Save customer:', customer)} 
    />,
    'client-appointment': <PlaceholderSection sectionName="Client Appointments" />,
    'communication': <CommunicationHub />,
    'reviews': <PlaceholderSection sectionName="Review Management" />,
    
    // Job Operations
    'jobs': <JobList />,
    'job-form': <PlaceholderSection sectionName="Job Form" />,
    'pipeline': <PipelineManagement />,
    'schedule': <ScheduleView />,
    'time-tracking': <TimeTracking />,
    'photos': <PhotoManagement />,
    'safety': <SafetyManagement />,
    'quality': <QualityControl />,
    
    // Financial Management
    'estimates': <EstimateList />,
    'invoices': <InvoiceList />,
    'expenses': <ExpenseList />,
    'tax-financial': <PlaceholderSection sectionName="Tax & Financial" />,
    'financial-analytics': <PlaceholderSection sectionName="Financial Analytics" />,
    'payment-integration': <PlaceholderSection sectionName="Payment Integration" />,
    'profit-analysis': <PlaceholderSection sectionName="Profit Analysis" />,
    'quickbooks-integration': <PlaceholderSection sectionName="QuickBooks Integration" />,
    'accounting-integration': <PlaceholderSection sectionName="Accounting Integration" />,
    
    // Team & Resources
    'team-management': <TeamDashboard />,
    'hr-features': <PlaceholderSection sectionName="HR Features" />,
    'subcontractor-management': <PlaceholderSection sectionName="Subcontractor Management" />,
    'materials-services': <PlaceholderSection sectionName="Materials & Services" />,
    'inventory': <InventoryManagement />,
    'equipment': <EquipmentManagement />,
    'vehicles': <VehicleManagement />,
    'advanced-inventory': <PlaceholderSection sectionName="Advanced Inventory" />,
    'employee-locations': <PlaceholderSection sectionName="Employee Locations" />,
    'radius-assignment': <PlaceholderSection sectionName="Radius Assignment" />,
    'location-management': <PlaceholderSection sectionName="Location Management" />,
    
    // AI & Automation
    'ai-chat': <PlaceholderSection sectionName="AI Chat Assistant" />,
    'smart-document-generator': <PlaceholderSection sectionName="Smart Document Generator" />,
    'predictive-analytics': <PlaceholderSection sectionName="Predictive Analytics" />,
    'ai-settings': <PlaceholderSection sectionName="AI Settings" />,
    
    // Integrations - Updated to use new Advanced Integrations Hub
    'integrations': <AdvancedIntegrationsHub />,
    'ipaas-manager': <IPaaSManager />,
    
    // Reports & Analytics
    'reports': <ReportsCenter />,
    'analytics': <PlaceholderSection sectionName="Advanced Analytics" />,
    'map-view': <MapView jobs={transformedJobs} />,
    'advanced-reporting': <PlaceholderSection sectionName="Advanced Reporting" />,
    
    // Communication
    'team-chat': <PlaceholderSection sectionName="Team Chat" />,
    'notifications': <NotificationCenter />,
    
    // Settings & Administration - Updated to use new components
    'company-settings': <CompanySettings />,
    'back-office': <BackOfficeHub />,
    'mobile-settings': <PlaceholderSection sectionName="Mobile Settings" />,
    'branch-management': <PlaceholderSection sectionName="Multi-Branch Management" />,
    
    // Additional sections
    'profile': <UserProfilePage />,
    'billing': <BillingPage />,
    'onboarding': <OnboardingFlow />,
    'help-center': <HelpCenterPage />,
    'api-docs': <APIDocumentationPage />,
    'admin-panel': <AdvancedSettingsHub />,
    'user-management': <TeamDashboard />,
    'system-settings': <AdvancedSettingsHub />,
    'activity-feed': <ActivityFeed />,
    'security-center': <SecurityCenter />,
    'settings': <AdvancedSettingsHub />,
    'security': <SecurityCenter />,
    'password-recovery': <PasswordRecoveryPage />
  };
};

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
