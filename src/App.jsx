// import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
// import { AnimatePresence } from 'framer-motion'
// import Navbar from '../components/navbar'
// import Home from '../pages/Home'
// import Projects from '../pages/Projects'
// import Skills from '../pages/Skills'
// import Contact from '../pages/Contact'

// function AnimatedRoutes() {
//   const location = useLocation()

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<Home />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </AnimatePresence>
//   )
// }

// export default function App() {
//   return (
//     <HashRouter>
//       <Navbar />
//       <AnimatedRoutes />
//     </HashRouter>
//   )
// }
import Navbar from "../components/navbar";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";

export default function App() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth bg-[#0e0e0e] text-white">
      <Navbar />
      <section id="home" className="snap-start">
        <Home />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
    </div>
  );
}
