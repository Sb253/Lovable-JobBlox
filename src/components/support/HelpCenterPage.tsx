
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, MessageCircle, Book, Video, Mail, Phone, ChevronDown, ChevronRight, Star } from "lucide-react";

const faqCategories = [
  {
    name: "Getting Started",
    icon: Book,
    questions: [
      {
        question: "How do I create my first project?",
        answer: "To create your first project, click the 'New Project' button on your dashboard. Fill in the project details including name, description, and team members. You can also choose from our pre-built templates to get started quickly."
      },
      {
        question: "How do I invite team members?",
        answer: "Go to your project settings and click on 'Team Members'. Enter their email addresses and select their roles. They'll receive an invitation email to join your project."
      },
      {
        question: "What are the different user roles?",
        answer: "We have three main roles: Viewer (read-only access), Editor (can create and edit content), and Admin (full access including billing and settings)."
      }
    ]
  },
  {
    name: "Billing & Plans",
    icon: Star,
    questions: [
      {
        question: "How do I upgrade my plan?",
        answer: "Go to Settings > Billing and click 'Change Plan'. Select your desired plan and follow the checkout process. Your upgrade will be effective immediately."
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time from the billing settings. Your access will continue until the end of your current billing period."
      },
      {
        question: "Do you offer refunds?",
        answer: "We offer a 30-day money-back guarantee for annual plans. Monthly plans are not eligible for refunds, but you can cancel anytime."
      }
    ]
  },
  {
    name: "Technical Support",
    icon: MessageCircle,
    questions: [
      {
        question: "The app is running slowly, what should I do?",
        answer: "Try refreshing your browser, clearing your cache, or switching to a different browser. If the issue persists, check our status page or contact support."
      },
      {
        question: "How do I export my data?",
        answer: "Go to Settings > Data Export to download your data in various formats including JSON, CSV, and PDF."
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we use enterprise-grade security including SSL encryption, regular backups, and SOC 2 compliance. Your data is stored in secure, geographically distributed data centers."
      }
    ]
  }
];

const articles = [
  { title: "Complete Setup Guide", category: "Getting Started", readTime: "5 min" },
  { title: "Advanced Project Management", category: "Features", readTime: "8 min" },
  { title: "Team Collaboration Best Practices", category: "Tips", readTime: "6 min" },
  { title: "API Documentation", category: "Developers", readTime: "12 min" },
  { title: "Troubleshooting Common Issues", category: "Support", readTime: "4 min" },
  { title: "Security & Privacy Guide", category: "Security", readTime: "7 min" }
];

export const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openSections, setOpenSections] = useState<string[]>(['Getting Started']);

  const toggleSection = (sectionName: string) => {
    setOpenSections(prev =>
      prev.includes(sectionName)
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
           q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const filteredArticles = articles.filter(
    article => article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Help Center</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Find answers to your questions and get the help you need
        </p>
        
        {/* Search */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 text-center"
          />
        </div>
      </div>

      <Tabs defaultValue="faq" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="guides">Guides</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <TabsContent value="faq">
          <div className="space-y-4">
            {filteredFAQs.map((category) => {
              const Icon = category.icon;
              const isOpen = openSections.includes(category.name);
              
              return (
                <Card key={category.name}>
                  <Collapsible
                    open={isOpen}
                    onOpenChange={() => toggleSection(category.name)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Icon className="h-5 w-5" />
                            <CardTitle>{category.name}</CardTitle>
                            <Badge variant="secondary">{category.questions.length}</Badge>
                          </div>
                          {isOpen ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <div className="space-y-4">
                          {category.questions.map((faq, index) => (
                            <div key={index} className="border-l-2 border-muted pl-4">
                              <h4 className="font-medium mb-2">{faq.question}</h4>
                              <p className="text-muted-foreground text-sm">{faq.answer}</p>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="guides">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full justify-start">
                    <Book className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Getting Started Tutorial", duration: "12:34" },
              { title: "Advanced Features Overview", duration: "18:45" },
              { title: "Team Collaboration Tips", duration: "9:23" },
              { title: "Mobile App Walkthrough", duration: "7:12" },
              { title: "Integration Setup", duration: "15:30" },
              { title: "Troubleshooting Guide", duration: "11:18" }
            ].map((video, index) => (
              <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{video.duration}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="contact">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Get instant help from our support team. Available 24/7.
                </p>
                <Button className="w-full">Start Live Chat</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you within 24 hours.
                </p>
                <Button variant="outline" className="w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Call us for urgent issues. Available Mon-Fri 9AM-6PM EST.
                </p>
                <Button variant="outline" className="w-full">
                  +1 (555) 123-4567
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Submit a Ticket</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Create a support ticket for detailed technical issues.
                </p>
                <Button variant="outline" className="w-full">
                  Create Ticket
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
