
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CTNova from "./pages/CTNova";
import CaseStudies from "./pages/CaseStudies";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Refund from "./pages/Refund";
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

// Solutions Pages
import Solutions from "./pages/solutions";
import LMS from "./pages/solutions/LMS";
import AIEdge from "./pages/solutions/AIEdge";
import Disha from "./pages/solutions/Disha";
import ComuniQa from "./pages/solutions/ComuniQa";

// Case Study Pages
import RetailTransformation from "./pages/case-studies/RetailTransformation";
import HealthcareEfficiency from "./pages/case-studies/HealthcareEfficiency";
import FinancialInsights from "./pages/case-studies/FinancialInsights";
import ManufacturingOptimization from "./pages/case-studies/ManufacturingOptimization";
import SupplyChainIntelligence from "./pages/case-studies/SupplyChainIntelligence";
import CustomerExperience from "./pages/case-studies/CustomerExperience";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ct-nova" element={<CTNova />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          
          {/* Solutions Routes */}
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/lms" element={<LMS />} />
          <Route path="/solutions/ai-edge" element={<AIEdge />} />
          <Route path="/solutions/disha" element={<Disha />} />
          <Route path="/solutions/comuniqa" element={<ComuniQa />} />
          
          {/* Case Study Routes */}
          <Route path="/case-studies/retail-transformation" element={<RetailTransformation />} />
          <Route path="/case-studies/healthcare-efficiency" element={<HealthcareEfficiency />} />
          <Route path="/case-studies/financial-insights" element={<FinancialInsights />} />
          <Route path="/case-studies/manufacturing-optimization" element={<ManufacturingOptimization />} />
          <Route path="/case-studies/supply-chain-intelligence" element={<SupplyChainIntelligence />} />
          <Route path="/case-studies/customer-experience" element={<CustomerExperience />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
