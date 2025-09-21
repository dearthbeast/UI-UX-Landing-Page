import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Solutions } from "./components/Solutions";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <Features />
        <Solutions />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}