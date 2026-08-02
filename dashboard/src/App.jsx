import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      

    </Routes>
  );
}

export default App;