import { Router, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Get base from environment with fallback
const base = import.meta.env.VITE_BASE || '/portfolio/';
const isProduction = import.meta.env.PROD;

// Custom hook for handling base path in both development and production
const useBasePath = () => {
  // Get the current location relative to the base path
  const currentLocation = () => {
    const path = window.location.pathname;
    const hash = window.location.hash.slice(1); // Remove the # character

    // In production (GitHub Pages), use hash-based routing
    if (isProduction) {
      if (hash) {
        // Remove leading slash if present to avoid double slashes
        return hash.startsWith('/') ? hash : '/' + hash;
      }
      // Initialize hash routing on first load
      const pathname = path.replace('/portfolio/', '') || '/';
      window.location.replace(window.location.origin + '/portfolio/#' + pathname);
      return pathname;
    }

    // Handle base path in development
    const hasBase = path.startsWith(base);
    return hasBase ? path.slice(base.length) || '/' : path;
  };

  // Navigate function that handles both hash-based and regular routing
  const navigate = (to: string, { replace = false } = {}) => {
    // In production (GitHub Pages), use hash-based routing
    if (isProduction) {
      const newPath = to === '/' ? '/' : to.startsWith('/') ? to : '/' + to;
      window.location.hash = newPath;
    } else {
      // In development, use regular routing
      const method = replace ? 'replaceState' : 'pushState';
      window.history[method](null, '', base + (to === '/' ? '' : to));
    }
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