import React from 'react';
import { Router, Route, Switch } from "wouter";
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
    const hash = window.location.hash.replace('#', '') || '/';
    return hash.startsWith('/') ? hash : '/' + hash;
  };

  const [loc, setLoc] = React.useState(getHashLocation());

  React.useEffect(() => {
    const handler = () => setLoc(getHashLocation());
    window.addEventListener('hashchange', handler);
    handler();
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to.startsWith('/') ? to : '/' + to;
  };

  return [loc, navigate];
};

function AppRouter() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
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