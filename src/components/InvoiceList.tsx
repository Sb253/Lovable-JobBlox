
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Search, Calendar, DollarSign, User, FileText, Send, Edit, Trash2, Download } from "lucide-react";

interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: string;
  amount: number;
  status: 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled';
  dueDate: string;
  issuedDate: string;
  description: string;
}

export const InvoiceList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [invoices] = useState<Invoice[]>([
    {
      id: '1',
      invoiceNumber: 'INV-001',
      customer: 'John Smith',
      amount: 15000,
      status: 'sent',
      dueDate: '2024-02-15',
      issuedDate: '2024-01-15',
      description: 'Kitchen Renovation - Final Invoice'
    },
    {
      id: '2',
      invoiceNumber: 'INV-002',
      customer: 'ABC Construction',
      amount: 5000,
      status: 'paid',
      dueDate: '2024-02-10',
      issuedDate: '2024-01-10',
      description: 'Bathroom Repair Services'
    },
    {
      id: '3',
      invoiceNumber: 'INV-003',
      customer: 'Sarah Johnson',
      amount: 800,
      status: 'overdue',
      dueDate: '2024-01-25',
      issuedDate: '2024-01-05',
      description: 'Roof Inspection and Minor Repairs'
    }
  ]);

  const filteredInvoices = invoices.filter(invoice =>
    invoice.invoiceNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    invoice.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Invoice['status']) => {
    switch (status) {
      case 'draft': return 'bg-gray-100 text-gray-800';
      case 'sent': return 'bg-blue-100 text-blue-800';
      case 'paid': return 'bg-green-100 text-green-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      case 'cancelled': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Invoices</h1>
          <p className="text-muted-foreground">Manage billing and invoices</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search invoices..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {filteredInvoices.map((invoice) => (
          <Card key={invoice.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{invoice.invoiceNumber}</h3>
                    <Badge className={getStatusColor(invoice.status)}>
                      {invoice.status}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Customer: {invoice.customer}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Due: {new Date(invoice.dueDate).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4" />
                        Amount: ${invoice.amount.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4" />
                        Issued: {new Date(invoice.issuedDate).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-2">{invoice.description}</p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                {invoice.status === 'draft' && (
                  <Button size="sm">
                    <Send className="h-4 w-4 mr-1" />
                    Send
                  </Button>
                )}
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
                <Button variant="outline" size="sm">
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
