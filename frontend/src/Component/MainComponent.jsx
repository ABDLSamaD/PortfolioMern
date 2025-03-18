import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Features/Loader";
import Header from "./Pages/Header";
import { Background } from "./Features/Background";

const ProjectDetail = React.lazy(() =>
  import("./ProjectshowCase/ProjectDetail")
);
const Hero = React.lazy(() => import("./Pages/Home"));
const About = React.lazy(() => import("./Pages/About"));
const ProjectSection = React.lazy(() => import("./Pages/ProjectSection"));
const Contact = React.lazy(() => import("./Pages/Contact"));

function Home() {
  useEffect(() => {
    // Preload ProjectDetail component
    import("./ProjectshowCase/ProjectDetail");
  }, []);

  return (
    <>
      <Header />
      <React.Suspense fallback={<Loader />}>
        <Hero />
        <About />
        <ProjectSection />
        <Contact />
      </React.Suspense>
    </>
  );
}

function App() {
  return (
    <Background>
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Background>
  );
}

export default App;
