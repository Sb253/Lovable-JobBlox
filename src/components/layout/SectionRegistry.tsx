
import React from 'react';

// Lazy load all components for better performance
const Dashboard = React.lazy(() => import("../Dashboard").then(m => ({ default: m.Dashboard })));
const CustomerList = React.lazy(() => import("../CustomerList").then(m => ({ default: m.CustomerList })));
const JobList = React.lazy(() => import("../JobList").then(m => ({ default: m.JobList })));
const InvoiceList = React.lazy(() => import("../InvoiceList").then(m => ({ default: m.InvoiceList })));
const ExpenseList = React.lazy(() => import("../ExpenseList").then(m => ({ default: m.ExpenseList })));
const MapView = React.lazy(() => import("../MapView").then(m => ({ default: m.MapView })));

// New pages
const PasswordRecoveryPage = React.lazy(() => import("../auth/PasswordRecoveryPage").then(m => ({ default: m.PasswordRecoveryPage })));
const UserProfilePage = React.lazy(() => import("../profile/UserProfilePage").then(m => ({ default: m.UserProfilePage })));
const BillingPage = React.lazy(() => import("../billing/BillingPage").then(m => ({ default: m.BillingPage })));
const HelpCenterPage = React.lazy(() => import("../support/HelpCenterPage").then(m => ({ default: m.HelpCenterPage })));
const OnboardingFlow = React.lazy(() => import("../onboarding/OnboardingFlow").then(m => ({ default: m.OnboardingFlow })));
const APIDocumentationPage = React.lazy(() => import("../api/APIDocumentationPage").then(m => ({ default: m.APIDocumentationPage })));

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
    'home': <Dashboard />,
    'dashboard': <Dashboard />,
    
    // Customer Management
    'customers': <CustomerList />,
    'pipeline': <PlaceholderSection sectionName="Sales Pipeline" />,
    'communication': <PlaceholderSection sectionName="Communication" />,
    'reviews': <PlaceholderSection sectionName="Review Management" />,
    
    // Job Management
    'jobs': <JobList />,
    'schedule': <PlaceholderSection sectionName="Schedule View" />,
    'time-tracking': <PlaceholderSection sectionName="Time Tracking" />,
    'photos': <PlaceholderSection sectionName="Photo Documentation" />,
    'safety': <PlaceholderSection sectionName="Safety Management" />,
    'quality': <PlaceholderSection sectionName="Quality Control" />,
    
    // Financial Management
    'estimates': <PlaceholderSection sectionName="Estimates" />,
    'invoices': <InvoiceList />,
    'expenses': <ExpenseList />,
    'goals': <PlaceholderSection sectionName="KPI Dashboard" />,
    'profit-analysis': <PlaceholderSection sectionName="Profit Analysis" />,
    'tax-financial': <PlaceholderSection sectionName="Tax & Financial" />,
    
    // Team & Resources
    'team-management': <PlaceholderSection sectionName="Team Management" />,
    'inventory': <PlaceholderSection sectionName="Inventory" />,
    'equipment': <PlaceholderSection sectionName="Equipment Tracking" />,
    'vehicles': <PlaceholderSection sectionName="Vehicle Management" />,
    
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
    'admin-panel': <PlaceholderSection sectionName="Admin Panel" />,
    'user-management': <PlaceholderSection sectionName="User Management" />,
    'system-settings': <PlaceholderSection sectionName="System Settings" />,
    
    // Tools
    'notifications': <PlaceholderSection sectionName="Notifications" />,
    'back-office': <PlaceholderSection sectionName="Settings" />,
    'map-view': <MapView jobs={transformedJobs} />
  };
};
