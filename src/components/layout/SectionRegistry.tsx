
import React, { lazy } from 'react';

// Lazy load components for better performance - Fixed to handle named exports
const MainDashboard = lazy(() => import('../dashboard/MainDashboard').then(m => ({ default: m.MainDashboard })));
const CustomerList = lazy(() => import('../CustomerList').then(m => ({ default: m.CustomerList })));
const CustomerForm = lazy(() => import('../CustomerForm').then(m => ({ default: m.CustomerForm })));
const JobList = lazy(() => import('../JobList').then(m => ({ default: m.JobList })));
const JobForm = lazy(() => import('../JobForm').then(m => ({ default: m.JobForm })));
const ScheduleView = lazy(() => import('../ScheduleView').then(m => ({ default: m.ScheduleView })));
const TimeTracking = lazy(() => import('../TimeTracking').then(m => ({ default: m.TimeTracking })));
const EstimateList = lazy(() => import('../EstimateList').then(m => ({ default: m.EstimateList })));
const InvoiceList = lazy(() => import('../InvoiceList').then(m => ({ default: m.InvoiceList })));
const ExpenseList = lazy(() => import('../ExpenseList').then(m => ({ default: m.ExpenseList })));
const TeamManagement = lazy(() => import('../TeamManagement').then(m => ({ default: m.TeamManagement })));
const MaterialsAndServices = lazy(() => import('../MaterialsAndServices').then(m => ({ default: m.MaterialsAndServices })));
const MaterialInventory = lazy(() => import('../MaterialInventory').then(m => ({ default: m.MaterialInventory })));
const EquipmentTracking = lazy(() => import('../EquipmentTracking').then(m => ({ default: m.EquipmentTracking })));
const VehicleManagement = lazy(() => import('../VehicleManagement').then(m => ({ default: m.VehicleManagement })));
const Pipeline = lazy(() => import('../Pipeline').then(m => ({ default: m.Pipeline })));
const ClientAppointment = lazy(() => import('../ClientAppointment').then(m => ({ default: m.ClientAppointment })));
const RealTimeChat = lazy(() => import('../RealTimeChat').then(m => ({ default: m.RealTimeChat })));
const ReviewManagement = lazy(() => import('../ReviewManagement').then(m => ({ default: m.ReviewManagement })));
const PhotoDocumentation = lazy(() => import('../PhotoDocumentation').then(m => ({ default: m.PhotoDocumentation })));
const SafetyManagement = lazy(() => import('../SafetyManagement').then(m => ({ default: m.SafetyManagement })));
const QualityControl = lazy(() => import('../QualityControl').then(m => ({ default: m.QualityControl })));
const HRFeatures = lazy(() => import('../HRFeatures').then(m => ({ default: m.HRFeatures })));
const SubcontractorManagement = lazy(() => import('../SubcontractorManagement').then(m => ({ default: m.SubcontractorManagement })));
const AdvancedInventorySystem = lazy(() => import('../AdvancedInventorySystem').then(m => ({ default: m.AdvancedInventorySystem })));
const EmployeeLocationManager = lazy(() => import('../EmployeeLocationManager').then(m => ({ default: m.EmployeeLocationManager })));
const RadiusAssignment = lazy(() => import('../RadiusAssignment').then(m => ({ default: m.RadiusAssignment })));
const LocationManagement = lazy(() => import('../LocationManagement').then(m => ({ default: m.LocationManagement })));
const BranchManagement = lazy(() => import('../BranchManagement').then(m => ({ default: m.BranchManagement })));
const KPIDashboard = lazy(() => import('../KPIDashboard').then(m => ({ default: m.KPIDashboard })));
const TaxAndFinancialSection = lazy(() => import('../TaxAndFinancialSection').then(m => ({ default: m.TaxAndFinancialSection })));
const PaymentIntegrationHub = lazy(() => import('../PaymentIntegrationHub').then(m => ({ default: m.PaymentIntegrationHub })));
const ProfitMarginAnalysis = lazy(() => import('../ProfitMarginAnalysis').then(m => ({ default: m.ProfitMarginAnalysis })));
const EmployeeChat = lazy(() => import('../EmployeeChat').then(m => ({ default: m.EmployeeChat })));
const NotificationCenter = lazy(() => import('../NotificationCenter').then(m => ({ default: m.NotificationCenter })));
const MapView = lazy(() => import('../MapView').then(m => ({ default: m.MapView })));
const BackOfficeSettings = lazy(() => import('../BackOfficeSettings').then(m => ({ default: m.BackOfficeSettings })));
const InternalMeetings = lazy(() => import('../InternalMeetings').then(m => ({ default: m.InternalMeetings })));

export const createSectionRegistry = () => {
  return {
    home: <MainDashboard onSectionChange={(section) => {
      const event = new CustomEvent('sectionChange', { detail: section });
      window.dispatchEvent(event);
    }} />,
    customers: <CustomerList />,
    'customer-form': <CustomerForm />,
    jobs: <JobList />,
    'job-form': <JobForm />,
    schedule: <ScheduleView />,
    'time-tracking': <TimeTracking />,
    estimates: <EstimateList />,
    invoices: <InvoiceList />,
    expenses: <ExpenseList />,
    'team-management': <TeamManagement />,
    'materials-services': <MaterialsAndServices />,
    inventory: <MaterialInventory />,
    equipment: <EquipmentTracking />,
    vehicles: <VehicleManagement />,
    pipeline: <Pipeline />,
    'client-appointment': <ClientAppointment />,
    communication: <RealTimeChat />,
    reviews: <ReviewManagement />,
    photos: <PhotoDocumentation />,
    safety: <SafetyManagement />,
    quality: <QualityControl />,
    'hr-features': <HRFeatures />,
    'subcontractor-management': <SubcontractorManagement />,
    'advanced-inventory': <AdvancedInventorySystem />,
    'employee-locations': <EmployeeLocationManager />,
    'radius-assignment': <RadiusAssignment />,
    'location-management': <LocationManagement />,
    'branch-management': <BranchManagement />,
    goals: <KPIDashboard />,
    'tax-financial': <TaxAndFinancialSection />,
    'payment-integration': <PaymentIntegrationHub />,
    'profit-analysis': <ProfitMarginAnalysis />,
    'team-chat': <EmployeeChat />,
    notifications: <NotificationCenter />,
    'map-view': <MapView />,
    'back-office': <BackOfficeSettings />,
    'internal-meetings': <InternalMeetings />,
    profile: <div className="p-6"><h1 className="text-2xl font-bold">Profile Settings</h1><p className="text-muted-foreground mt-2">Manage your profile and account settings.</p></div>,
  };
};
