import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import OurProcess from "./pages/OurProcess";
import Gallery from "./pages/Gallery";
import WhyUs from "./pages/WhyUs";
import Contact from "./pages/Contact";
import FreeConsultation from "./pages/FreeConsultation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-consultation" element={<FreeConsultation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const rootElement = document.getElementById("root")!;

if (!rootElement._reactRoot) {
  const root = createRoot(rootElement);
  (rootElement as any)._reactRoot = root;
  root.render(<App />);
} else {
  (rootElement as any)._reactRoot.render(<App />);
}
