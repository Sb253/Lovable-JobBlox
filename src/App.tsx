
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { ThemeProvider } from "./components/ThemeProvider";
import { TenantProvider } from "./contexts/TenantContext";
import { TenantRoute } from "./components/routing/TenantRoute";
import Index from "./pages/Index";
import { isMultiTenantMode } from "./config/tenant-mode";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TenantProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <BrowserRouter>
              <Routes>
                {/* Single-tenant routes */}
                <Route 
                  path="/" 
                  element={
                    <TenantRoute>
                      <Index />
                    </TenantRoute>
                  } 
                />
                <Route 
                  path="/dashboard" 
                  element={
                    <TenantRoute>
                      <Index />
                    </TenantRoute>
                  } 
                />
                
                {/* Multi-tenant routes */}
                {isMultiTenantMode() && (
                  <>
                    <Route 
                      path="/t/:tenantId" 
                      element={
                        <TenantRoute>
                          <Index />
                        </TenantRoute>
                      } 
                    />
                    <Route 
                      path="/t/:tenantId/dashboard" 
                      element={
                        <TenantRoute>
                          <Index />
                        </TenantRoute>
                      } 
                    />
                    <Route 
                      path="/t/:tenantId/*" 
                      element={
                        <TenantRoute>
                          <Index />
                        </TenantRoute>
                      } 
                    />
                  </>
                )}
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </TenantProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
