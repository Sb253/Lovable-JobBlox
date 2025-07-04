
import {
  Users, MessageSquare, Calendar, FileText, Mail, Phone, 
  Database, Cloud, Zap, Settings, MapPin, Camera, 
  CreditCard, BarChart3, Building, Smartphone, Globe,
  ClipboardList, Shield, Wrench, Package
} from "lucide-react";

export const integrationCategories = [
  {
    title: "Sales, CRM & Lead Management",
    integrations: [
      { name: "SalesRabbit", description: "Door-to-door sales management platform", icon: Users, status: 'available' as const },
      { name: "Thumbtack", description: "Connect with local customers and leads", icon: Users, status: 'available' as const },
      { name: "Angi", description: "Home service lead generation platform", icon: Building, status: 'available' as const },
      { name: "Facebook Lead Ads", description: "Generate leads directly from Facebook", icon: MessageSquare, status: 'connected' as const },
      { name: "Google Local Services", description: "Local service advertising platform", icon: MapPin, status: 'available' as const }
    ]
  },
  {
    title: "Project & Field Management",
    integrations: [
      { name: "CompanyCam", description: "Photo documentation and project management", icon: Camera, status: 'connected' as const },
      { name: "EagleView", description: "Aerial imagery and measurement reports", icon: MapPin, status: 'available' as const },
      { name: "Roofr", description: "Roofing estimate and project management", icon: Building, status: 'available' as const },
      { name: "PHOTO iD by U Scope", description: "Advanced photo documentation", icon: Camera, status: 'coming-soon' as const },
      { name: "Beacon PRO+", description: "Building material supplier platform", icon: Package, status: 'available' as const },
      { name: "QXO (formerly Beacon)", description: "Building materials and supplies", icon: Package, status: 'available' as const },
      { name: "Roof Hub by SRS", description: "Roofing materials and distribution", icon: Building, status: 'coming-soon' as const },
      { name: "Roofle", description: "Roofing project management platform", icon: Wrench, status: 'available' as const },
      { name: "Hover", description: "3D home exterior measurements", icon: Building, status: 'available' as const },
      { name: "Google Calendar", description: "Schedule and appointment management", icon: Calendar, status: 'connected' as const },
      { name: "Google Maps", description: "Location and routing services", icon: MapPin, status: 'connected' as const }
    ]
  },
  {
    title: "Communication & Reviews",
    integrations: [
      { name: "Gmail", description: "Email communication and management", icon: Mail, status: 'connected' as const },
      { name: "Mailchimp", description: "Email marketing and automation", icon: Mail, status: 'available' as const },
      { name: "Google Contacts", description: "Contact management and synchronization", icon: Users, status: 'connected' as const },
      { name: "OpenPhone", description: "Business phone and messaging", icon: Phone, status: 'available' as const },
      { name: "Microsoft Outlook", description: "Email and calendar management", icon: Mail, status: 'available' as const }
    ]
  },
  {
    title: "Document Management & Storage",
    integrations: [
      { name: "Dropbox", description: "Cloud file storage and sharing", icon: Cloud, status: 'available' as const },
      { name: "Google Drive", description: "Cloud storage and collaboration", icon: Cloud, status: 'connected' as const },
      { name: "DocuSign", description: "Electronic signature and document management", icon: FileText, status: 'available' as const },
      { name: "Jotform", description: "Online form builder and data collection", icon: ClipboardList, status: 'available' as const },
      { name: "Gravity Forms", description: "WordPress form builder", icon: ClipboardList, status: 'coming-soon' as const },
      { name: "WPForms", description: "WordPress form plugin", icon: ClipboardList, status: 'coming-soon' as const },
      { name: "Google Forms", description: "Free online form builder", icon: ClipboardList, status: 'available' as const },
      { name: "Squarespace Forms", description: "Website form integration", icon: ClipboardList, status: 'coming-soon' as const },
      { name: "Wix Forms", description: "Website form builder", icon: ClipboardList, status: 'coming-soon' as const },
      { name: "Calendly", description: "Appointment scheduling platform", icon: Calendar, status: 'available' as const }
    ]
  },
  {
    title: "Automation Platforms",
    integrations: [
      { name: "Zapier", description: "Workflow automation between apps", icon: Zap, status: 'connected' as const },
      { name: "LeadsBridge", description: "Lead generation and CRM integration", icon: Users, status: 'available' as const }
    ]
  },
  {
    title: "Other / Miscellaneous",
    integrations: [
      { name: "HailTrace", description: "Weather damage detection and reporting", icon: Shield, status: 'available' as const },
      { name: "HubSpot", description: "CRM and marketing automation platform", icon: BarChart3, status: 'available' as const },
      { name: "mySalesman", description: "Sales team management and tracking", icon: Users, status: 'coming-soon' as const },
      { name: "Xero", description: "Cloud-based accounting software", icon: CreditCard, status: 'available' as const },
      { name: "OpenMaps", description: "Open-source mapping solutions", icon: MapPin, status: 'coming-soon' as const }
    ]
  }
];
