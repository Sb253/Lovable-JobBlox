
import React from 'react';

// Core components
export const Dashboard = React.lazy(() => import("../../Dashboard").then(m => ({ default: m.Dashboard })));
export const CustomerList = React.lazy(() => import("../../CustomerList").then(m => ({ default: m.CustomerList })));
export const JobList = React.lazy(() => import("../../JobList").then(m => ({ default: m.JobList })));
export const InvoiceList = React.lazy(() => import("../../InvoiceList").then(m => ({ default: m.InvoiceList })));
export const ExpenseList = React.lazy(() => import("../../ExpenseList").then(m => ({ default: m.ExpenseList })));
export const MapView = React.lazy(() => import("../../MapView").then(m => ({ default: m.MapView })));

// Auth and profile pages
export const PasswordRecoveryPage = React.lazy(() => import("../../auth/PasswordRecoveryPage").then(m => ({ default: m.PasswordRecoveryPage })));
export const UserProfilePage = React.lazy(() => import("../../profile/UserProfilePage").then(m => ({ default: m.UserProfilePage })));
export const BillingPage = React.lazy(() => import("../../billing/BillingPage").then(m => ({ default: m.BillingPage })));
export const HelpCenterPage = React.lazy(() => import("../../support/HelpCenterPage").then(m => ({ default: m.HelpCenterPage })));
export const OnboardingFlow = React.lazy(() => import("../../onboarding/OnboardingFlow").then(m => ({ default: m.OnboardingFlow })));
export const APIDocumentationPage = React.lazy(() => import("../../api/APIDocumentationPage").then(m => ({ default: m.APIDocumentationPage })));

// Core business components
export const TeamDashboard = React.lazy(() => import("../../team/TeamDashboard").then(m => ({ default: m.TeamDashboard })));
export const NotificationCenter = React.lazy(() => import("../../notifications/NotificationCenter").then(m => ({ default: m.NotificationCenter })));
export const ActivityFeed = React.lazy(() => import("../../activity/ActivityFeed").then(m => ({ default: m.ActivityFeed })));
export const IntegrationsHub = React.lazy(() => import("../../integrations/IntegrationsHub").then(m => ({ default: m.IntegrationsHub })));
export const ReportsCenter = React.lazy(() => import("../../reports/ReportsCenter").then(m => ({ default: m.ReportsCenter })));
export const AdvancedSettings = React.lazy(() => import("../../settings/AdvancedSettings").then(m => ({ default: m.AdvancedSettings })));
export const SecurityCenter = React.lazy(() => import("../../settings/SecurityCenter").then(m => ({ default: m.SecurityCenter })));

// Operations pages
export const ScheduleView = React.lazy(() => import("../../operations/ScheduleView").then(m => ({ default: m.ScheduleView })));
export const TimeTracking = React.lazy(() => import("../../operations/TimeTracking").then(m => ({ default: m.TimeTracking })));
export const EstimateList = React.lazy(() => import("../../operations/EstimateList").then(m => ({ default: m.EstimateList })));

// Management pages
export const SafetyManagement = React.lazy(() => import("../../management/SafetyManagement").then(m => ({ default: m.SafetyManagement })));
export const QualityControl = React.lazy(() => import("../../management/QualityControl").then(m => ({ default: m.QualityControl })));

// Resources pages
export const InventoryManagement = React.lazy(() => import("../../resources/InventoryManagement").then(m => ({ default: m.InventoryManagement })));
export const EquipmentManagement = React.lazy(() => import("../../resources/EquipmentManagement").then(m => ({ default: m.EquipmentManagement })));
export const VehicleManagement = React.lazy(() => import("../../resources/VehicleManagement").then(m => ({ default: m.VehicleManagement })));

// Mobile components
export const ResponsiveDashboard = React.lazy(() => import("../../mobile/ResponsiveDashboard").then(m => ({ default: m.ResponsiveDashboard })));
export const MobileCustomerForm = React.lazy(() => import("../../forms/MobileCustomerForm").then(m => ({ default: m.MobileCustomerForm })));

// Advanced components
export const PipelineManagement = React.lazy(() => import("../../advanced/PipelineManagement").then(m => ({ default: m.PipelineManagement })));
export const CommunicationHub = React.lazy(() => import("../../communication/CommunicationHub").then(m => ({ default: m.CommunicationHub })));
export const PhotoManagement = React.lazy(() => import("../../photos/PhotoManagement").then(m => ({ default: m.PhotoManagement })));

// Company Settings
export const CompanySettings = React.lazy(() => import("../../CompanySettings").then(m => ({ default: m.CompanySettings })));

// New iPaaS and Advanced Settings Components
export const BackOfficeHub = React.lazy(() => import("../../backoffice/BackOfficeHub").then(m => ({ default: m.BackOfficeHub })));
export const AdvancedSettingsHub = React.lazy(() => import("../../settings/AdvancedSettingsHub").then(m => ({ default: m.AdvancedSettingsHub })));
export const IPaaSManager = React.lazy(() => import("../../iPaas/iPaaSManager").then(m => ({ default: m.IPaaSManager })));
