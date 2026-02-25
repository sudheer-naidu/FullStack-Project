import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider, useAuth } from "./lib/auth";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Login from "@/pages/login";
import AdminDashboard from "@/pages/admin-dashboard";
import DonorDashboard from "@/pages/donor-dashboard";
import RecipientDashboard from "@/pages/recipient-dashboard";
import AnalystDashboard from "@/pages/analyst-dashboard";

function ProtectedRoute({ 
  path, 
  component: Component, 
  requiredRole 
}: { 
  path: string; 
  component: React.ComponentType<any>; 
  requiredRole: "admin" | "donor" | "recipient" | "analyst";
}) {
  const { user, isLoading } = useAuth();

  if (isLoading) return null;

  if (!user || user.role !== requiredRole) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} component={Component} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      
      <ProtectedRoute path="/admin" component={AdminDashboard} requiredRole="admin" />
      <ProtectedRoute path="/donor" component={DonorDashboard} requiredRole="donor" />
      <ProtectedRoute path="/recipient" component={RecipientDashboard} requiredRole="recipient" />
      <ProtectedRoute path="/analyst" component={AnalystDashboard} requiredRole="analyst" />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
