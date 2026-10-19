import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";
import WhatsAppButton from "../common/WhatsAppButton";

/** Shared page shell: sticky header, main landmark, footer, floating actions. */
export default function PageLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Header />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
