import { useState } from "react";

import Intro from "./components/Intro/Intro";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/Footer";

function App() {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <Intro onFinish={() => setLoading(false)} />
      )}

      {!loading && (
        <>
          <Navbar />

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;