import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import About from "./sections/About";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Products from "./sections/Products";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Products />
      <Footer />
    </div>
  );
}
