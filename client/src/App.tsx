import React from 'react';
import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Get base from environment with fallback
const base = import.meta.env.VITE_BASE || '/portfolio/';

// Custom hook for handling GitHub Pages hash-based routing
const useHashLocation = (): [string, (to: string, ...args: any[]) => void] => {
  const getHashLocation = () => {
    // Default to '/' if no hash is present
    return window.location.hash.replace('#', '') || '/';
  };

  const [loc, setLoc] = React.useState(getHashLocation());

  React.useEffect(() => {
    // Update loc when the hash changes
    const handler = () => setLoc(getHashLocation());
    window.addEventListener('hashchange', handler);
    // Handle initial route on page load
    handler();
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  // Return location and navigate function
  const navigate = (to: string) => {
    window.location.hash = to.startsWith('/') ? to : '/' + to;
  };

  return [loc, navigate];
};

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
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