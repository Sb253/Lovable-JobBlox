
import React from 'react';

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

// New comprehensive pages
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

// Additional advanced components
const PipelineManagement = React.lazy(() => import("../advanced/PipelineManagement").then(m => ({ default: m.PipelineManagement })));
const CommunicationHub = React.lazy(() => import("../communication/CommunicationHub").then(m => ({ default: m.CommunicationHub })));
const PhotoManagement = React.lazy(() => import("../photos/PhotoManagement").then(m => ({ default: m.PhotoManagement })));

// Company Settings
const CompanySettings = React.lazy(() => import("../CompanySettings").then(m => ({ default: m.CompanySettings })));

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
  const { demoDataService } = require("../../services/demoDataService");
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
    // Core sections
    'home': <ResponsiveDashboard onSectionChange={(section) => console.log('Navigate to', section)} />,
    'dashboard': <Dashboard />,
    
    // Customer Management
    'customers': <CustomerList />,
    'customer-form': <MobileCustomerForm 
      onBack={() => console.log('Navigate back')} 
      onSave={(customer) => console.log('Save customer:', customer)} 
    />,
    'pipeline': <PipelineManagement />,
    'communication': <CommunicationHub />,
    'reviews': <PlaceholderSection sectionName="Review Management" />,
    
    // Job Management
    'jobs': <JobList />,
    'schedule': <ScheduleView />,
    'time-tracking': <TimeTracking />,
    'photos': <PhotoManagement />,
    'safety': <SafetyManagement />,
    'quality': <QualityControl />,
    
    // Financial Management
    'estimates': <EstimateList />,
    'invoices': <InvoiceList />,
    'expenses': <ExpenseList />,
    'goals': <ReportsCenter />,
    'profit-analysis': <PlaceholderSection sectionName="Profit Analysis" />,
    'tax-financial': <PlaceholderSection sectionName="Tax & Financial" />,
    
    // Team & Resources
    'team-management': <TeamDashboard />,
    'inventory': <InventoryManagement />,
    'equipment': <EquipmentManagement />,
    'vehicles': <VehicleManagement />,
    
    // Advanced Features
    'client-appointment': <PlaceholderSection sectionName="Client Appointments" />,
    
    // Management
    'branch-management': <PlaceholderSection sectionName="Multi-Branch Management" />,
    'location-management': <PlaceholderSection sectionName="Location Management" />,
    
    // Account & Profile
    'profile': <UserProfilePage />,
    'billing': <BillingPage />,
    'onboarding': <OnboardingFlow />,
    
    // Support & Resources
    'help-center': <HelpCenterPage />,
    'api-docs': <APIDocumentationPage />,
    
    // Admin sections
    'admin-panel': <AdvancedSettings />,
    'user-management': <TeamDashboard />,
    'system-settings': <AdvancedSettings />,
    
    // Tools & Features
    'notifications': <NotificationCenter />,
    'activity-feed': <ActivityFeed />,
    'integrations': <IntegrationsHub />,
    'reports': <ReportsCenter />,
    'back-office': <AdvancedSettings />,
    'security-center': <SecurityCenter />,
    'map-view': <MapView jobs={transformedJobs} />,
    
    // Settings
    'settings': <AdvancedSettings />,
    'company-settings': <CompanySettings />,
    'security': <SecurityCenter />,
    
    // Auth & Recovery
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
