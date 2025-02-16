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
    let hash = window.location.hash.replace('#', '') || '/';
    // Ensure hash starts with '/' and handle empty hash
    hash = hash.startsWith('/') ? hash : '/' + hash;
    // Remove base path if present in the hash
    if (hash.startsWith(base)) {
      hash = hash.slice(base.length);
    }
    return hash;
  };

  const [loc, setLoc] = React.useState(getHashLocation());

  React.useEffect(() => {
    // Update loc when the hash changes
    const handler = () => {
      const newLoc = getHashLocation();
      setLoc(newLoc);
    };

    // Listen to hashchange events
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