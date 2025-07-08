
import React from 'react';
import { Dashboard } from '../../Dashboard';
import { QuickActions } from '../../QuickActions';
import { CustomerList } from '../../CustomerList';
import { JobList } from '../../JobList';
import { ScheduleView } from '../../ScheduleView';
import { TimeTracking } from '../../TimeTracking';
import { PhotoDocumentation } from '../../PhotoDocumentation';
import { EstimateList } from '../../EstimateList';
import { InvoiceList } from '../../InvoiceList';
import { ExpenseList } from '../../ExpenseList';
import { TeamManagement } from '../../TeamManagement';
import { ReportsView } from '../../ReportsView';
import { MapView } from '../../MapView';
import { AIChatAssistant } from '../../AIChatAssistant';
import { CompanySettings } from '../../CompanySettings';
import { DragDropPipeline } from '../../DragDropPipeline';
import { NotificationCenter } from '../../NotificationCenter';
import { Pipeline } from '../../Pipeline';

// Sample data for components that require props
const sampleJobs = [
  {
    id: '1',
    title: 'Kitchen Renovation',
    customer: 'John Smith',
    address: '123 Main St, City, State',
    coordinates: [-74.006, 40.7128] as [number, number],
    status: 'scheduled' as const,
    type: 'job' as const,
    time: '9:00 AM',
    assignedTo: 'Mike Johnson'
  }
];

const samplePipelineStages = [
  {
    id: 'leads',
    title: 'Leads',
    color: '#3b82f6',
    items: []
  }
];

export const createSectionRegistry = () => ({
  // Core sections
  home: <Dashboard />,
  dashboard: <Dashboard />,
  'quick-actions': <QuickActions />,
  
  // Customer Management
  customers: <CustomerList />,
  'customer-form': <CustomerList />,
  'client-appointment': <ScheduleView />,
  communication: <NotificationCenter />,
  reviews: <ReportsView />,
  
  // Job Operations
  jobs: <JobList />,
  'job-form': <JobList />,
  pipeline: <Pipeline />,
  schedule: <ScheduleView />,
  'time-tracking': <TimeTracking />,
  photos: <PhotoDocumentation />,
  safety: <ReportsView />,
  quality: <ReportsView />,
  
  // Financial Management
  estimates: <EstimateList />,
  invoices: <InvoiceList />,
  expenses: <ExpenseList />,
  'tax-financial': <ReportsView />,
  'financial-analytics': <ReportsView />,
  'payment-integration': <ReportsView />,
  'profit-analysis': <ReportsView />,
  'quickbooks-integration': <ReportsView />,
  'accounting-integration': <ReportsView />,
  
  // Team & Resources
  'team-management': <TeamManagement />,
  'hr-features': <TeamManagement />,
  'subcontractor-management': <TeamManagement />,
  'materials-services': <ReportsView />,
  inventory: <ReportsView />,
  equipment: <ReportsView />,
  vehicles: <ReportsView />,
  'advanced-inventory': <ReportsView />,
  'employee-locations': <MapView jobs={sampleJobs} />,
  'radius-assignment': <MapView jobs={sampleJobs} />,
  'location-management': <MapView jobs={sampleJobs} />,
  
  // AI & Automation
  'ai-chat': <AIChatAssistant />,
  'smart-document-generator': <AIChatAssistant />,
  'predictive-analytics': <ReportsView />,
  'ai-settings': <CompanySettings />,
  
  // Integrations
  integrations: <ReportsView />,
  
  // Reports & Analytics
  reports: <ReportsView />,
  analytics: <ReportsView />,
  'map-view': <MapView jobs={sampleJobs} />,
  'advanced-reporting': <ReportsView />,
  
  // Communication
  'team-chat': <NotificationCenter />,
  notifications: <NotificationCenter />,
  'internal-meetings': <NotificationCenter />,
  
  // Settings & Administration
  'company-settings': <CompanySettings />,
  'back-office': <CompanySettings />,
  'mobile-settings': <CompanySettings />,
  'branch-management': <CompanySettings />,
  
  // User sections
  profile: <CompanySettings />,
  settings: <CompanySettings />
});
