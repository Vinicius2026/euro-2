import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Added Navigate
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard"; // Added Dashboard import
import RegisterPage from "./pages/RegisterPage"; // Added RegisterPage import
import LoginPage from "./pages/LoginPage";
import { useAuth } from "./contexts/AuthContext"; 
import AdminDashboard from "./pages/AdminDashboard";
import Ingresso from "./pages/ingresso";
import Footer from './components/Footer';

const queryClient = new QueryClient();

// ProtectedRoute component
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { currentUser, loading } = useAuth();

  if (loading) {
    // You might want to show a global loading spinner here
    // or handle it within components that use useAuth
    return <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">Carregando...</div>;
  }

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  return children;
};


const App = () => {
  const { currentUser, loading } = useAuth(); 

  // Remove the global auth status display from here, 
  // as it's better handled by specific components or layout.
  // The header in Index.tsx already shows login/logout status.
  // The Dashboard shows user info.

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/ingresso" element={<Ingresso />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
