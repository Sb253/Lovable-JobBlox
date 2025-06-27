
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Save, User, Mail, Phone, MapPin, Building } from "lucide-react";
import { TouchFriendlyForm, TouchInput, TouchSelect } from "../mobile/TouchFriendlyForm";

interface MobileCustomerFormProps {
  onBack: () => void;
  onSave: (customer: any) => void;
  customer?: any;
}

export const MobileCustomerForm = ({ onBack, onSave, customer }: MobileCustomerFormProps) => {
  const [formData, setFormData] = useState({
    name: customer?.name || '',
    email: customer?.email || '',
    phone: customer?.phone || '',
    company: customer?.company || '',
    address: customer?.address || '',
    city: customer?.city || '',
    state: customer?.state || '',
    zipCode: customer?.zipCode || '',
    customerType: customer?.customerType || '',
    source: customer?.source || ''
  });
  const { toast } = useToast();

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in name and email fields",
        variant: "destructive"
      });
      return;
    }

    onSave(formData);
    toast({
      title: "Customer Saved",
      description: `${formData.name} has been ${customer ? 'updated' : 'created'} successfully`
    });
  };

  const customerTypes = [
    { value: 'residential', label: 'Residential' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'industrial', label: 'Industrial' }
  ];

  const sources = [
    { value: 'referral', label: 'Referral' },
    { value: 'website', label: 'Website' },
    { value: 'social-media', label: 'Social Media' },
    { value: 'advertising', label: 'Advertising' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-900 border-b px-4 py-3 flex items-center gap-3 z-10">
        <Button variant="ghost" size="icon" onClick={onBack}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-lg font-semibold">
          {customer ? 'Edit Customer' : 'New Customer'}
        </h1>
      </div>

      <TouchFriendlyForm
        title=""
        onSubmit={handleSubmit}
        onCancel={onBack}
      >
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-base font-medium flex items-center gap-2">
            <User className="h-4 w-4" />
            Personal Information
          </h3>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name *</label>
            <TouchInput
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address *</label>
            <TouchInput
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="Enter email address"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Phone Number</label>
            <TouchInput
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="Enter phone number"
            />
          </div>
        </div>

        {/* Company Information */}
        <div className="space-y-4">
          <h3 className="text-base font-medium flex items-center gap-2">
            <Building className="h-4 w-4" />
            Company Information
          </h3>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Company Name</label>
            <TouchInput
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Enter company name"
            />
          </div>

          <TouchSelect
            label="Customer Type"
            options={customerTypes}
            value={formData.customerType}
            onChange={(value) => setFormData(prev => ({ ...prev, customerType: value }))}
            placeholder="Select customer type"
          />

          <TouchSelect
            label="How did they find us?"
            options={sources}
            value={formData.source}
            onChange={(value) => setFormData(prev => ({ ...prev, source: value }))}
            placeholder="Select source"
          />
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="text-base font-medium flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Address Information
          </h3>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Street Address</label>
            <TouchInput
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              placeholder="Enter street address"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">City</label>
              <TouchInput
                value={formData.city}
                onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                placeholder="City"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">State</label>
              <TouchInput
                value={formData.state}
                onChange={(e) => setFormData(prev => ({ ...prev, state: e.target.value }))}
                placeholder="State"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">ZIP Code</label>
            <TouchInput
              value={formData.zipCode}
              onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
              placeholder="Enter ZIP code"
            />
          </div>
        </div>
      </TouchFriendlyForm>
    </div>
  );
};
