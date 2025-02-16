import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Get base from environment with fallback
const base = import.meta.env.VITE_BASE || '/portfolio/';

// Custom hook for handling base path in both development and production
const useBasePath = () => {
  // Get the current location relative to the base path
  const currentLocation = () => {
    const path = window.location.pathname;
    const hasBase = path.startsWith(base);
    return hasBase ? path.slice(base.length) || '/' : path;
  };

  // Navigate function that prepends the base path and handles the history API
  const navigate = (to: string, { replace = false } = {}) => {
    const method = replace ? 'replaceState' : 'pushState';
    window.history[method](null, '', base + (to === '/' ? '' : to));
  };

  return [currentLocation(), navigate];
};

function AppRouter() {
  return (
    <Router hook={useBasePath}>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;