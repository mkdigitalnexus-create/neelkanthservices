import { BrowserRouter, Route, Routes } from "react-router-dom";
import { APP_BASENAME } from "./utils/appBase";
import PageLayout from "./components/layout/PageLayout";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import OurProcess from "./pages/OurProcess";
import ServiceAreas from "./pages/ServiceAreas";
import GetQuote from "./pages/GetQuote";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter basename={APP_BASENAME}>
      <ScrollToTop />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/our-process" element={<OurProcess />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/get-a-quote" element={<GetQuote />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}
