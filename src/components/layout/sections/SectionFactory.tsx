
import React, { lazy } from 'react';

// Lazy load components
const Dashboard = lazy(() => import('../../Dashboard'));
const QuickActions = lazy(() => import('../../QuickActions'));
const CustomerList = lazy(() => import('../../CustomerList'));
const JobList = lazy(() => import('../../JobList'));
const ScheduleView = lazy(() => import('../../ScheduleView'));
const TimeTracking = lazy(() => import('../../TimeTracking'));
const PhotoDocumentation = lazy(() => import('../../PhotoDocumentation'));
const EstimateList = lazy(() => import('../../EstimateList'));
const InvoiceList = lazy(() => import('../../InvoiceList'));
const ExpenseList = lazy(() => import('../../ExpenseList'));
const TeamManagement = lazy(() => import('../../TeamManagement'));
const ReportsView = lazy(() => import('../../ReportsView'));
const MapView = lazy(() => import('../../MapView'));
const AIChatAssistant = lazy(() => import('../../AIChatAssistant'));
const CompanySettings = lazy(() => import('../../CompanySettings'));
const DragDropPipeline = lazy(() => import('../../DragDropPipeline'));
const NotificationCenter = lazy(() => import('../../NotificationCenter'));

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
  pipeline: <DragDropPipeline />,
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
  'employee-locations': <MapView />,
  'radius-assignment': <MapView />,
  'location-management': <MapView />,
  
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
  'map-view': <MapView />,
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
