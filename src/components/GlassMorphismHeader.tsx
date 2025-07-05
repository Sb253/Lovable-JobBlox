
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Home, Users, Briefcase, Calendar, DollarSign, Settings, 
  Search, Bell, User, LogOut, Zap, Building2, 
  FileText, Timer, Camera, TrendingUp, MapPin,
  MessageSquare, Shield, Package, UserCheck, Brain
} from "lucide-react";
import { cn } from "@/lib/utils";

interface GlassMorphismHeaderProps {
  onSectionChange: (section: string) => void;
  activeSection: string;
}

export const GlassMorphismHeader = ({ onSectionChange, activeSection }: GlassMorphismHeaderProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  const menuGroups = [
    {
      label: "Core",
      items: [
        { id: 'home', icon: Home },
        { id: 'dashboard', icon: Building2 },
        { id: 'quick-actions', icon: Zap },
      ]
    },
    {
      label: "Operations", 
      items: [
        { id: 'jobs', icon: Briefcase },
        { id: 'customers', icon: Users },
        { id: 'schedule', icon: Calendar },
        { id: 'time-tracking', icon: Timer },
        { id: 'photos', icon: Camera },
      ]
    },
    {
      label: "Financial",
      items: [
        { id: 'estimates', icon: FileText },
        { id: 'invoices', icon: FileText },
        { id: 'expenses', icon: DollarSign },
        { id: 'analytics', icon: TrendingUp },
      ]
    },
    {
      label: "Team & Resources",
      items: [
        { id: 'team-management', icon: UserCheck },
        { id: 'inventory', icon: Package },
        { id: 'map-view', icon: MapPin },
      ]
    },
    {
      label: "AI & Tools",
      items: [
        { id: 'ai-chat', icon: Brain },
        { id: 'communication', icon: MessageSquare },
        { id: 'safety', icon: Shield },
        { id: 'company-settings', icon: Settings },
      ]
    }
  ];

  const handleSectionClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setMegaMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 glass border-b border-white/20 z-50">
      <div className="flex items-center justify-between h-full px-6">
        {/* Logo and App Name */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            JobBlox
          </h1>
        </div>

        {/* Navigation Icons */}
        <div className="hidden md:flex items-center gap-2">
          {menuGroups.slice(0, 2).map((group) => 
            group.items.slice(0, 4).map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "glass-subtle text-white/80 hover:text-white hover:bg-white/20 transition-all duration-200",
                    activeSection === item.id && "bg-blue-500/30 text-blue-300"
                  )}
                  onClick={() => handleSectionClick(item.id)}
                >
                  <Icon className="h-5 w-5" />
                </Button>
              );
            })
          )}
          
          {/* Mega Menu Trigger */}
          <Popover open={megaMenuOpen} onOpenChange={setMegaMenuOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="glass-subtle text-white/80 hover:text-white hover:bg-white/20"
              >
                <Building2 className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent 
              className="w-[600px] glass-strong border-white/30 p-0"
              align="end"
            >
              <div className="p-4">
                <h3 className="text-white font-semibold mb-4">Navigation Menu</h3>
                <div className="grid grid-cols-2 gap-6">
                  {menuGroups.map((group) => (
                    <div key={group.label}>
                      <h4 className="text-white/70 text-sm font-medium mb-3 uppercase tracking-wide">
                        {group.label}
                      </h4>
                      <div className="space-y-1">
                        {group.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Button
                              key={item.id}
                              variant="ghost"
                              className={cn(
                                "w-full justify-start gap-3 text-white/80 hover:text-white hover:bg-white/20",
                                activeSection === item.id && "bg-blue-500/30 text-blue-300"
                              )}
                              onClick={() => handleSectionClick(item.id)}
                            >
                              <Icon className="h-4 w-4" />
                              <span className="capitalize">{item.id.replace('-', ' ')}</span>
                            </Button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
            <Input
              type="text"
              placeholder="Search jobs, customers, or team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-full glass-subtle border-white/20 text-white placeholder:text-white/60 focus:border-blue-400/50"
            />
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Internal Meetings */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleSectionClick('internal-meetings')}
            className="glass-subtle text-white/80 hover:text-white hover:bg-white/20"
          >
            <MessageSquare className="h-5 w-5" />
          </Button>

          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => handleSectionClick('notifications')}
            className="glass-subtle text-white/80 hover:text-white hover:bg-white/20 relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full text-[10px] text-white flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="glass-subtle flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
                <span className="hidden md:block text-sm font-medium">
                  User
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-strong border-white/30">
              <DropdownMenuLabel className="text-white">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">User Profile</p>
                  <p className="text-xs text-white/70">user@example.com</p>
                  <Badge variant="secondary" className="w-fit glass-subtle">
                    Admin
                  </Badge>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-white/20" />
              <DropdownMenuItem 
                onClick={() => handleSectionClick('profile')}
                className="text-white/80 hover:text-white hover:bg-white/20"
              >
                <User className="h-4 w-4 mr-2" />
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => handleSectionClick('settings')}
                className="text-white/80 hover:text-white hover:bg-white/20"
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-white/20" />
              <DropdownMenuItem className="text-white/80 hover:text-white hover:bg-white/20">
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
