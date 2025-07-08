
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, X, Settings, User, LogOut, Sun, Moon, Search,
  Home, Users, Briefcase, Calendar, FileText, BarChart3
} from "lucide-react";
import { useTheme } from "next-themes";
import { TenantHeader } from './tenant/TenantHeader';
import { useTenant } from '../contexts/TenantContext';
import { isMultiTenantMode } from '../config/tenant-mode';

interface GlassMorphismHeaderProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

export const GlassMorphismHeader: React.FC<GlassMorphismHeaderProps> = ({
  onSectionChange,
  activeSection
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { currentTenant } = useTenant();

  const quickNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'jobs', label: 'Jobs', icon: Briefcase },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'estimates', label: 'Estimates', icon: FileText },
    { id: 'reports', label: 'Reports', icon: BarChart3 },
  ];

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="glass-strong border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Logo and Tenant Info */}
            <div className="flex items-center gap-6">
              <TenantHeader />
              
              {/* Quick Navigation - Desktop */}
              <nav className="hidden lg:flex items-center gap-1">
                {quickNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "default" : "ghost"}
                      size="sm"
                      onClick={() => handleNavClick(item.id)}
                      className={`glass-subtle flex items-center gap-2 ${
                        isActive ? 'bg-primary text-primary-foreground' : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="hidden xl:inline">{item.label}</span>
                    </Button>
                  );
                })}
              </nav>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <Button variant="ghost" size="icon" className="glass-subtle text-white/80 hover:text-white hover:bg-white/10">
                <Search className="h-4 w-4" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="glass-subtle text-white/80 hover:text-white hover:bg-white/10"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Multi-tenant mode indicator */}
              {isMultiTenantMode() && import.meta.env.DEV && (
                <Badge variant="outline" className="hidden md:flex glass-subtle text-white/80 border-white/20">
                  Multi-Tenant
                </Badge>
              )}

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="glass-subtle text-white/80 hover:text-white hover:bg-white/10">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="glass-strong border-white/20" align="end">
                  <DropdownMenuItem onClick={() => handleNavClick('profile')}>
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleNavClick('settings')}>
                    <Settings className="h-4 w-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  {currentTenant && (
                    <DropdownMenuItem>
                      <span className="text-xs text-muted-foreground">
                        Tenant: {currentTenant.name}
                      </span>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem className="text-red-400">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden glass-subtle text-white/80 hover:text-white hover:bg-white/10"
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-white/20 py-4">
              <nav className="grid grid-cols-2 gap-2">
                {quickNavItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  
                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "default" : "ghost"}
                      onClick={() => handleNavClick(item.id)}
                      className={`glass-subtle justify-start ${
                        isActive ? 'bg-primary text-primary-foreground' : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {item.label}
                    </Button>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
