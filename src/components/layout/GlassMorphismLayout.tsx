
import React, { useState, useEffect } from 'react';
import { GlassMorphismHeader } from '../GlassMorphismHeader';
import { SectionRegistry } from './SectionRegistry';
import { 
  Home, BarChart3, Zap, Users, Target, MessageSquare, Star,
  Briefcase, Calendar, Timer, Shield, CheckSquare, Camera,
  DollarSign, FileText, Receipt, CreditCard, TrendingUp, Calculator,
  UserCheck, Package, Truck, Hammer, MapPin, Database,
  Brain, FileCode, PieChart, Settings, Building2, Smartphone,
  PhoneCall, Bell, Rocket
} from "lucide-react";

export const GlassMorphismLayout = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    // Ensure body has the correct classes for glass morphism
    document.body.classList.add('glass-mode');
    return () => {
      document.body.classList.remove('glass-mode');
    };
  }, []);

  const handleSectionChange = (section: string) => {
    console.log('GlassMorphismLayout: Section change:', section);
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <GlassMorphismHeader 
        onSectionChange={handleSectionChange}
        activeSection={activeSection}
      />
      
      <main className="pt-16 min-h-screen">
        <div className="p-4 min-h-[calc(100vh-4rem)]">
          <div className="glass-card p-6 min-h-[calc(100vh-8rem)]">
            <SectionRegistry 
              activeSection={activeSection} 
              onSectionChange={handleSectionChange}
            />
          </div>
        </div>
      </main>
    </div>
  );
};
