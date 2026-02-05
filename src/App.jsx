import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const SectionLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 min-h-screen">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="orb w-[600px] h-[600px] bg-purple-600 -top-20 -left-20"></div>
          <div className="orb w-[500px] h-[500px] bg-blue-600 bottom-0 right-0"></div>
          <div className="orb w-80 h-80 bg-pink-500 top-1/2 left-1/3 opacity-20"></div>
        </div>

        <Navbar />

        <Hero />

        <Suspense fallback={<SectionLoader />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Experience />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Tech />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Works />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <Footer />
        </Suspense>
      </div>
    </BrowserRouter>
  );
};

export default App;
