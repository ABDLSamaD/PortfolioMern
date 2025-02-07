import React from "react";
import { Route, Routes } from "react-router-dom";
import { Background } from "./Features/Background";
import Loader from "./Features/Loader";
import Header from "./Pages/Header";
const ProjectDetail = React.lazy(() =>
  import("./ProjectshowCase/ProjectDetail")
);
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
  return (
    <>
      <React.Suspense fallback={<Loader />}>
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
