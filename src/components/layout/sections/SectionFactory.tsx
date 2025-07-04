
import React from 'react';
import { demoDataService } from "../../../services/demoDataService";
import { PlaceholderSection } from './PlaceholderSection';
import * as LazyComponents from './LazyComponents';

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
    'dashboard': <LazyComponents.Dashboard />,
    'home': <LazyComponents.ResponsiveDashboard onSectionChange={(section) => console.log('Navigate to', section)} />,
    'goals': <LazyComponents.ReportsCenter />,
    'quick-actions': <PlaceholderSection sectionName="Quick Actions" />,
    
    // Customer Management
    'customers': <LazyComponents.CustomerList />,
    'customer-form': <LazyComponents.MobileCustomerForm 
      onBack={() => console.log('Navigate back')} 
      onSave={(customer) => console.log('Save customer:', customer)} 
    />,
    'client-appointment': <PlaceholderSection sectionName="Client Appointments" />,
    'communication': <LazyComponents.CommunicationHub />,
    'reviews': <PlaceholderSection sectionName="Review Management" />,
    
    // Job Operations
    'jobs': <LazyComponents.JobList />,
    'job-form': <PlaceholderSection sectionName="Job Form" />,
    'pipeline': <LazyComponents.PipelineManagement />,
    'schedule': <LazyComponents.ScheduleView />,
    'time-tracking': <LazyComponents.TimeTracking />,
    'photos': <LazyComponents.PhotoManagement />,
    'safety': <LazyComponents.SafetyManagement />,
    'quality': <LazyComponents.QualityControl />,
    
    // Financial Management
    'estimates': <LazyComponents.EstimateList />,
    'invoices': <LazyComponents.InvoiceList />,
    'expenses': <LazyComponents.ExpenseList />,
    'tax-financial': <PlaceholderSection sectionName="Tax & Financial" />,
    'financial-analytics': <PlaceholderSection sectionName="Financial Analytics" />,
    'payment-integration': <PlaceholderSection sectionName="Payment Integration" />,
    'profit-analysis': <PlaceholderSection sectionName="Profit Analysis" />,
    'quickbooks-integration': <PlaceholderSection sectionName="QuickBooks Integration" />,
    'accounting-integration': <PlaceholderSection sectionName="Accounting Integration" />,
    
    // Team & Resources
    'team-management': <LazyComponents.TeamDashboard />,
    'hr-features': <PlaceholderSection sectionName="HR Features" />,
    'subcontractor-management': <PlaceholderSection sectionName="Subcontractor Management" />,
    'materials-services': <PlaceholderSection sectionName="Materials & Services" />,
    'inventory': <LazyComponents.InventoryManagement />,
    'equipment': <LazyComponents.EquipmentManagement />,
    'vehicles': <LazyComponents.VehicleManagement />,
    'advanced-inventory': <PlaceholderSection sectionName="Advanced Inventory" />,
    'employee-locations': <PlaceholderSection sectionName="Employee Locations" />,
    'radius-assignment': <PlaceholderSection sectionName="Radius Assignment" />,
    'location-management': <PlaceholderSection sectionName="Location Management" />,
    
    // AI & Automation
    'ai-chat': <PlaceholderSection sectionName="AI Chat Assistant" />,
    'smart-document-generator': <PlaceholderSection sectionName="Smart Document Generator" />,
    'predictive-analytics': <PlaceholderSection sectionName="Predictive Analytics" />,
    'ai-settings': <PlaceholderSection sectionName="AI Settings" />,
    
    // Integrations - Now points to Back Office Hub which contains Advanced Integrations
    'integrations': <LazyComponents.BackOfficeHub />,
    'ipaas-manager': <LazyComponents.IPaaSManager />,
    
    // Reports & Analytics
    'reports': <LazyComponents.ReportsCenter />,
    'analytics': <PlaceholderSection sectionName="Advanced Analytics" />,
    'map-view': <LazyComponents.MapView jobs={transformedJobs} />,
    'advanced-reporting': <PlaceholderSection sectionName="Advanced Reporting" />,
    
    // Communication
    'team-chat': <PlaceholderSection sectionName="Team Chat" />,
    'notifications': <LazyComponents.NotificationCenter />,
    
    // Settings & Administration - Updated to use new components
    'company-settings': <LazyComponents.CompanySettings />,
    'back-office': <LazyComponents.BackOfficeHub />,
    'mobile-settings': <PlaceholderSection sectionName="Mobile Settings" />,
    'branch-management': <PlaceholderSection sectionName="Multi-Branch Management" />,
    
    // Additional sections
    'profile': <LazyComponents.UserProfilePage />,
    'billing': <LazyComponents.BillingPage />,
    'onboarding': <LazyComponents.OnboardingFlow />,
    'help-center': <LazyComponents.HelpCenterPage />,
    'api-docs': <LazyComponents.APIDocumentationPage />,
    'admin-panel': <LazyComponents.AdvancedSettingsHub />,
    'user-management': <LazyComponents.TeamDashboard />,
    'system-settings': <LazyComponents.AdvancedSettingsHub />,
    'activity-feed': <LazyComponents.ActivityFeed />,
    'security-center': <LazyComponents.SecurityCenter />,
    'settings': <LazyComponents.AdvancedSettingsHub />,
    'security': <LazyComponents.SecurityCenter />,
    'password-recovery': <LazyComponents.PasswordRecoveryPage />
  };
};
