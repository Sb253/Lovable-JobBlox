
import { User } from './auth';

export interface DemoConfig {
  enabled: boolean;
  autoLogin: boolean;
  demoUser: User;
  ownerAccess: boolean;
}

export const defaultDemoConfig: DemoConfig = {
  enabled: false,
  autoLogin: true,
  ownerAccess: true,
  demoUser: {
    id: 'demo-owner-123',
    email: 'owner@jobblox.com',
    name: 'System Owner',
    role: 'owner',
    permissions: [
      'view_dashboard',
      'manage_customers', 
      'manage_jobs',
      'manage_schedule',
      'manage_team',
      'manage_finances',
      'view_reports',
      'admin_access',
      'owner_access',
      'user_management',
      'system_settings'
    ],
    status: 'active',
    lastLogin: new Date().toISOString(),
    createdAt: '2024-01-01T00:00:00Z'
  }
};
