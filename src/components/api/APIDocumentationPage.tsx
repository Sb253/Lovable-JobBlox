
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Code, Copy, Play, ChevronDown, ChevronRight, Key, Book, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const apiEndpoints = [
  {
    method: "GET",
    path: "/api/v1/projects",
    description: "Get all projects",
    parameters: [
      { name: "page", type: "integer", description: "Page number" },
      { name: "limit", type: "integer", description: "Items per page" }
    ],
    response: {
      "data": [
        {
          "id": "proj_123",
          "name": "Project Name",
          "status": "active",
          "created_at": "2024-01-01T00:00:00Z"
        }
      ],
      "total": 50,
      "page": 1
    }
  },
  {
    method: "POST",
    path: "/api/v1/projects",
    description: "Create a new project",
    body: {
      "name": "New Project",
      "description": "Project description",
      "status": "active"
    },
    response: {
      "id": "proj_124",
      "name": "New Project",
      "status": "active",
      "created_at": "2024-01-01T00:00:00Z"
    }
  },
  {
    method: "GET",
    path: "/api/v1/customers",
    description: "Get all customers",
    parameters: [
      { name: "search", type: "string", description: "Search customers by name or email" },
      { name: "status", type: "string", description: "Filter by status" }
    ],
    response: {
      "data": [
        {
          "id": "cust_123",
          "name": "John Doe",
          "email": "john@example.com",
          "status": "active"
        }
      ]
    }
  }
];

const codeExamples = {
  javascript: `
// JavaScript/Node.js
const response = await fetch('https://api.jobblox.com/v1/projects', {
  headers: {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();
`,
  python: `
# Python
import requests

headers = {
    'Authorization': 'Bearer your-api-key',
    'Content-Type': 'application/json'
}

response = requests.get('https://api.jobblox.com/v1/projects', headers=headers)
data = response.json()
`,
  curl: `
# cURL
curl -X GET "https://api.jobblox.com/v1/projects" \\
  -H "Authorization: Bearer your-api-key" \\
  -H "Content-Type: application/json"
`
};

export const APIDocumentationPage = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<number | null>(null);
  const [activeLanguage, setActiveLanguage] = useState('javascript');
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Code example copied successfully"
    });
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-100 text-blue-800';
      case 'POST': return 'bg-green-100 text-green-800';
      case 'PUT': return 'bg-yellow-100 text-yellow-800';
      case 'DELETE': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">API Documentation</h1>
        <p className="text-muted-foreground text-lg">
          Complete reference for the JobBlox API. Build powerful integrations with our RESTful API.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="authentication">Authentication</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5" />
                  Getting Started
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    The JobBlox API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes.
                  </p>
                  <div className="space-y-2">
                    <p><strong>Base URL:</strong> <code>https://api.jobblox.com/v1</code></p>
                    <p><strong>Format:</strong> JSON</p>
                    <p><strong>Authentication:</strong> API Key</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Quick Links
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Key className="h-4 w-4 mr-2" />
                    Generate API Key
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Play className="h-4 w-4 mr-2" />
                    Try in Postman
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Code className="h-4 w-4 mr-2" />
                    SDK Downloads
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="authentication">
          <Card>
            <CardHeader>
              <CardTitle>API Authentication</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">API Keys</h3>
                <p className="text-muted-foreground mb-4">
                  JobBlox uses API keys to authenticate requests. You can view and manage your API keys in your account settings.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <code>Authorization: Bearer your-api-key-here</code>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Rate Limiting</h3>
                <p className="text-muted-foreground mb-4">
                  API requests are rate limited to ensure fair usage:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• <strong>Free Plan:</strong> 1,000 requests per hour</li>
                  <li>• <strong>Pro Plan:</strong> 10,000 requests per hour</li>
                  <li>• <strong>Enterprise:</strong> Custom limits available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Error Handling</h3>
                <p className="text-muted-foreground mb-4">
                  Our API uses conventional HTTP response codes:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-100 text-green-800">200</Badge>
                    <span>Success</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-yellow-100 text-yellow-800">400</Badge>
                    <span>Bad Request</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-red-100 text-red-800">401</Badge>
                    <span>Unauthorized</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-red-100 text-red-800">404</Badge>
                    <span>Not Found</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints">
          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => {
              const isOpen = selectedEndpoint === index;
              
              return (
                <Card key={index}>
                  <Collapsible
                    open={isOpen}
                    onOpenChange={() => setSelectedEndpoint(isOpen ? null : index)}
                  >
                    <CollapsibleTrigger asChild>
                      <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Badge className={getMethodColor(endpoint.method)}>
                              {endpoint.method}
                            </Badge>
                            <code className="text-sm">{endpoint.path}</code>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground">{endpoint.description}</span>
                            {isOpen ? (
                              <ChevronDown className="h-4 w-4" />
                            ) : (
                              <ChevronRight className="h-4 w-4" />
                            )}
                          </div>
                        </div>
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0 space-y-4">
                        {endpoint.parameters && (
                          <div>
                            <h4 className="font-semibold mb-2">Parameters</h4>
                            <div className="space-y-2">
                              {endpoint.parameters.map((param, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-sm">
                                  <code className="bg-muted px-2 py-1 rounded">{param.name}</code>
                                  <Badge variant="outline" className="text-xs">{param.type}</Badge>
                                  <span className="text-muted-foreground">{param.description}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {endpoint.body && (
                          <div>
                            <h4 className="font-semibold mb-2">Request Body</h4>
                            <div className="relative">
                              <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                                <code>{JSON.stringify(endpoint.body, null, 2)}</code>
                              </pre>
                              <Button
                                size="sm"
                                variant="outline"
                                className="absolute top-2 right-2"
                                onClick={() => copyToClipboard(JSON.stringify(endpoint.body, null, 2))}
                              >
                                <Copy className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        )}

                        <div>
                          <h4 className="font-semibold mb-2">Response</h4>
                          <div className="relative">
                            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                              <code>{JSON.stringify(endpoint.response, null, 2)}</code>
                            </pre>
                            <Button
                              size="sm"
                              variant="outline"
                              className="absolute top-2 right-2"
                              onClick={() => copyToClipboard(JSON.stringify(endpoint.response, null, 2))}
                            >
                              <Copy className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <Button className="w-full">
                          <Play className="h-4 w-4 mr-2" />
                          Try this endpoint
                        </Button>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="examples">
          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  {Object.keys(codeExamples).map((lang) => (
                    <Button
                      key={lang}
                      variant={activeLanguage === lang ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveLanguage(lang)}
                    >
                      {lang.charAt(0).toUpperCase() + lang.slice(1)}
                    </Button>
                  ))}
                </div>

                <div className="relative">
                  <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                    <code>{codeExamples[activeLanguage as keyof typeof codeExamples]}</code>
                  </pre>
                  <Button
                    size="sm"
                    variant="outline"
                    className="absolute top-2 right-2"
                    onClick={() => copyToClipboard(codeExamples[activeLanguage as keyof typeof codeExamples])}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
