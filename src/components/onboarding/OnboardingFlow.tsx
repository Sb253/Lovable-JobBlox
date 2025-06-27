
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, ArrowRight, ArrowLeft, Building, Users, Zap, Settings } from "lucide-react";

const steps = [
  { id: 1, title: "Welcome", icon: Zap },
  { id: 2, title: "Company Info", icon: Building },
  { id: 3, title: "Team Setup", icon: Users },
  { id: 4, title: "Preferences", icon: Settings },
  { id: 5, title: "Complete", icon: CheckCircle }
];

export const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    teamSize: '',
    role: '',
    goals: [] as string[],
    notifications: true
  });
  const { toast } = useToast();

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    toast({
      title: "Welcome to JobBlox!",
      description: "Your account has been set up successfully."
    });
    // Redirect to dashboard
  };

  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Zap className="h-10 w-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome to JobBlox!</h2>
              <p className="text-muted-foreground">
                Let's get you set up in just a few quick steps. This will only take 2-3 minutes.
              </p>
            </div>
            <div className="grid gap-4 text-left">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Set up your company profile</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Configure your team settings</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Customize your preferences</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Tell us about your company</h2>
              <p className="text-muted-foreground">This helps us customize your experience.</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <Label htmlFor="industry">Industry</Label>
                <select
                  id="industry"
                  className="w-full p-2 border rounded-md"
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                >
                  <option value="">Select your industry</option>
                  <option value="construction">Construction</option>
                  <option value="consulting">Consulting</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="teamSize">Team Size</Label>
                <select
                  id="teamSize"
                  className="w-full p-2 border rounded-md"
                  value={formData.teamSize}
                  onChange={(e) => setFormData(prev => ({ ...prev, teamSize: e.target.value }))}
                >
                  <option value="">Select team size</option>
                  <option value="1-5">1-5 people</option>
                  <option value="6-20">6-20 people</option>
                  <option value="21-50">21-50 people</option>
                  <option value="50+">50+ people</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Team Setup</h2>
              <p className="text-muted-foreground">Configure how your team will work together.</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="role">Your Role</Label>
                <select
                  id="role"
                  className="w-full p-2 border rounded-md"
                  value={formData.role}
                  onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                >
                  <option value="">Select your role</option>
                  <option value="owner">Owner/CEO</option>
                  <option value="manager">Manager</option>
                  <option value="team-lead">Team Lead</option>
                  <option value="member">Team Member</option>
                </select>
              </div>

              <div>
                <Label>What are your main goals? (Select all that apply)</Label>
                <div className="grid gap-2 mt-2">
                  {[
                    "Improve project management",
                    "Better team collaboration", 
                    "Track time and expenses",
                    "Generate reports",
                    "Manage customers"
                  ].map((goal) => (
                    <label key={goal} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setFormData(prev => ({ ...prev, goals: [...prev.goals, goal] }));
                          } else {
                            setFormData(prev => ({ ...prev, goals: prev.goals.filter(g => g !== goal) }));
                          }
                        }}
                      />
                      <span className="text-sm">{goal}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Preferences</h2>
              <p className="text-muted-foreground">Customize your experience.</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Email Notifications</h4>
                  <p className="text-sm text-muted-foreground">Receive updates about your projects</p>
                </div>
                <input
                  type="checkbox"
                  checked={formData.notifications}
                  onChange={(e) => setFormData(prev => ({ ...prev, notifications: e.target.checked }))}
                />
              </div>

              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Quick Setup Options</h4>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    Import existing data
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Use sample data
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Start from scratch
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">You're all set!</h2>
              <p className="text-muted-foreground">
                Welcome to JobBlox! Your account is ready and you can start managing your projects.
              </p>
            </div>
            <div className="grid gap-4 text-left">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium">What's next?</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Create your first project</li>
                  <li>• Invite your team members</li>
                  <li>• Explore the dashboard</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 ${
                    step.id === currentStep ? 'text-primary' : 
                    step.id < currentStep ? 'text-green-600' : 'text-muted-foreground'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.id === currentStep ? 'bg-primary text-white' :
                    step.id < currentStep ? 'bg-green-600 text-white' : 'bg-muted'
                  }`}>
                    {step.id < currentStep ? (
                      <CheckCircle className="h-4 w-4" />
                    ) : (
                      <step.icon className="h-4 w-4" />
                    )}
                  </div>
                  <span className="text-sm font-medium hidden sm:inline">{step.title}</span>
                </div>
              ))}
            </div>
            <Badge variant="outline">
              Step {currentStep} of {steps.length}
            </Badge>
          </div>
          <Progress value={progress} className="h-2" />
        </CardHeader>
        
        <CardContent className="p-8">
          {renderStepContent()}
          
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep === steps.length ? (
              <Button onClick={handleComplete}>
                Get Started
                <Zap className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleNext}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
