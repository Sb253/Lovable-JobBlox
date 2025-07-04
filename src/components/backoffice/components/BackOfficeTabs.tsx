
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SystemHealthTab } from './SystemHealthTab';
import { UsersTab } from './UsersTab';
import { SecurityTab } from './SecurityTab';
import { WorkflowsTab } from './WorkflowsTab';
import { BillingTab } from './BillingTab';
import { ReportsTab } from './ReportsTab';
import { SettingsTab } from './SettingsTab';
import { AdvancedIntegrationsHub } from "../../iPaas/AdvancedIntegrationsHub";

export const BackOfficeTabs = () => {
  return (
    <Tabs defaultValue="system" className="space-y-4">
      <TabsList className="grid w-full grid-cols-8">
        <TabsTrigger value="system">System</TabsTrigger>
        <TabsTrigger value="users">Users</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="integrations">Integrations</TabsTrigger>
        <TabsTrigger value="workflows">Workflows</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      <TabsContent value="system" className="space-y-4">
        <SystemHealthTab />
      </TabsContent>

      <TabsContent value="users" className="space-y-4">
        <UsersTab />
      </TabsContent>

      <TabsContent value="security" className="space-y-4">
        <SecurityTab />
      </TabsContent>

      <TabsContent value="integrations" className="space-y-4">
        <AdvancedIntegrationsHub />
      </TabsContent>

      <TabsContent value="workflows" className="space-y-4">
        <WorkflowsTab />
      </TabsContent>

      <TabsContent value="billing" className="space-y-4">
        <BillingTab />
      </TabsContent>

      <TabsContent value="reports" className="space-y-4">
        <ReportsTab />
      </TabsContent>

      <TabsContent value="settings" className="space-y-4">
        <SettingsTab />
      </TabsContent>
    </Tabs>
  );
};
