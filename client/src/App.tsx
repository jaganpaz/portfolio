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
const useHashLocation = () => {
  const getHashLocation = () => {
    // Get the hash without the '#' symbol and ensure it starts with '/'
    const hash = window.location.hash.replace('#', '') || '/';
    return hash.startsWith('/') ? hash : '/' + hash;
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
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  // Return location and navigate function
  const navigate = (to: string) => {
    window.location.hash = to.startsWith('/') ? to : '/' + to;
  };

  return [loc, navigate] as const;
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