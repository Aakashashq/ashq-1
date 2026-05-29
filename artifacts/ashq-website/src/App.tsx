import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProductsPage from "@/pages/ProductsPage";
import ExportServicesPage from "@/pages/ExportServicesPage";
import WhyUsPage from "@/pages/WhyUsPage";
import GalleryPage from "@/pages/GalleryPage";
import ContactPage from "@/pages/ContactPage";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/products" component={ProductsPage} />
          <Route path="/export-services" component={ExportServicesPage} />
          <Route path="/why-us" component={WhyUsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ashq-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LoadingScreen />
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
