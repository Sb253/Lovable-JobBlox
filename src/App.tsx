
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { DemoProvider } from "@/components/auth/DemoProvider";
import { EnhancedProtectedLayout } from "@/components/auth/EnhancedProtectedLayout";
import NotFound from "./pages/NotFound";
import React from 'react';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="jobblox-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <DemoProvider>
              <AuthProvider>
                <Routes>
                  <Route path="/" element={<EnhancedProtectedLayout />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </AuthProvider>
            </DemoProvider>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
