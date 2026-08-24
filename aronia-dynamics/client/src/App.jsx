// client/src/App.jsx
import { useEffect } from "react";
import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Home = () => (
  <main className="min-h-screen bg-zinc-950 text-white">
    <section className="flex min-h-screen items-center justify-center">
      <h1 className="text-5xl font-bold">Aronia Dynamics</h1>
    </section>
  </main>
);

const About = () => (
  <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
    <h1 className="text-4xl font-bold">About Us</h1>
  </main>
);

const Portfolio = () => (
  <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
    <h1 className="text-4xl font-bold">Portfolio</h1>
  </main>
);

const Testimonials = () => (
  <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
    <h1 className="text-4xl font-bold">Testimonials</h1>
  </main>
);

const Pricing = () => (
  <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
    <h1 className="text-4xl font-bold">Pricing</h1>
  </main>
);

const Contact = () => (
  <main className="min-h-screen bg-zinc-950 px-6 py-24 text-white">
    <h1 className="text-4xl font-bold">Contact Us</h1>
  </main>
);

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;