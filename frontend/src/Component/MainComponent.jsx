import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Background } from "./Background";
import Header from "./Pages/Header";
import ProjectDetail from "./ProjectshowCase/ProjectDetail";
const Hero = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const Contact = React.lazy(() => import("./Pages/Contact"));
const ProjectSection = React.lazy(() => import("./Pages/ProjectSection"));

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <ProjectSection />
      <Contact />
    </>
  );
}

function App() {
  const location = useLocation();
  const isProjectDetailPage = location.pathname.startsWith("/project/");

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Background>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </Background>
      </React.Suspense>
    </>
  );
}

export default App;
