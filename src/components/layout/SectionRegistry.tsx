
import React, { lazy } from 'react';

// Lazy load components for better performance
const MainDashboard = lazy(() => import('../dashboard/MainDashboard').then(m => ({ default: m.MainDashboard })));
const CustomerList = lazy(() => import('../CustomerList'));
const CustomerForm = lazy(() => import('../CustomerForm'));
const JobList = lazy(() => import('../JobList'));
const JobForm = lazy(() => import('../JobForm'));
const ScheduleView = lazy(() => import('../ScheduleView'));
const TimeTracking = lazy(() => import('../TimeTracking'));
const EstimateList = lazy(() => import('../EstimateList'));
const InvoiceList = lazy(() => import('../InvoiceList'));
const ExpenseList = lazy(() => import('../ExpenseList'));
const TeamManagement = lazy(() => import('../TeamManagement'));
const MaterialsAndServices = lazy(() => import('../MaterialsAndServices'));
const MaterialInventory = lazy(() => import('../MaterialInventory'));
const EquipmentTracking = lazy(() => import('../EquipmentTracking'));
const VehicleManagement = lazy(() => import('../VehicleManagement'));
const Pipeline = lazy(() => import('../Pipeline'));
const ClientAppointment = lazy(() => import('../ClientAppointment'));
const RealTimeChat = lazy(() => import('../RealTimeChat'));
const ReviewManagement = lazy(() => import('../ReviewManagement'));
const PhotoDocumentation = lazy(() => import('../PhotoDocumentation'));
const SafetyManagement = lazy(() => import('../SafetyManagement'));
const QualityControl = lazy(() => import('../QualityControl'));
const HRFeatures = lazy(() => import('../HRFeatures'));
const SubcontractorManagement = lazy(() => import('../SubcontractorManagement'));
const AdvancedInventorySystem = lazy(() => import('../AdvancedInventorySystem'));
const EmployeeLocationManager = lazy(() => import('../EmployeeLocationManager'));
const RadiusAssignment = lazy(() => import('../RadiusAssignment'));
const LocationManagement = lazy(() => import('../LocationManagement'));
const BranchManagement = lazy(() => import('../BranchManagement'));
const KPIDashboard = lazy(() => import('../KPIDashboard'));
const TaxAndFinancialSection = lazy(() => import('../TaxAndFinancialSection'));
const PaymentIntegrationHub = lazy(() => import('../PaymentIntegrationHub'));
const ProfitMarginAnalysis = lazy(() => import('../ProfitMarginAnalysis'));
const EmployeeChat = lazy(() => import('../EmployeeChat'));
const NotificationCenter = lazy(() => import('../NotificationCenter'));
const MapView = lazy(() => import('../MapView'));
const BackOfficeSettings = lazy(() => import('../BackOfficeSettings'));
const InternalMeetings = lazy(() => import('../InternalMeetings'));

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
