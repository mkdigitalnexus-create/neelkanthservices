import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Fleet from "./pages/Fleet";
import Industries from "./pages/Industries";
import RoutesPage from "./pages/Routes";
import Gallery from "./pages/Gallery";
import FAQ from "./pages/FAQ";
import GetAQuote from "./pages/GetAQuote";
import Contact from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/get-a-quote" element={<GetAQuote />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<LegalNotice />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
