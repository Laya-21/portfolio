import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Home from "@/pages/Home";
import Education from "@/pages/Education";
import Internship from "@/pages/Internship";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import ExtraCurricular from "@/pages/ExtraCurricular";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/extra-curricular" element={<ExtraCurricular />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
