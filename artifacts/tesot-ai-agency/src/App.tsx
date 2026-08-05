import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import Home from '@/pages/home';
import Servicios from '@/pages/servicios';
import Proyectos from '@/pages/proyectos';
import ChatbotProject from '@/pages/chatbot-project';

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    const resetScroll = () => {
      if (!window.location.hash) {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    };

    resetScroll();
    const frame = window.requestAnimationFrame(resetScroll);

    return () => window.cancelAnimationFrame(frame);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/proyectos" component={Proyectos} />
      <Route path="/proyectos/chatbot" component={ChatbotProject} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
