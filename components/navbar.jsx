// import { NavLink } from 'react-router-dom'
// import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
// import { useState } from 'react'

// export default function Navbar() {
//   const navItems = ['Home', 'Projects', 'Skills', 'Contact']
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => setIsOpen(!isOpen)
//   const closeMenu = () => setIsOpen(false)

//   return (
//     <nav className="bg-[#1f1f1f] text-white px-6 py-4 shadow-md sticky top-0 z-50">
//       <div className="flex items-center justify-between max-w-6xl mx-auto">
//         {/* Logo */}
//         <div className="text-cyan-400 font-mono font-bold text-xl">
//           &lt;Sahil.dev /&gt;
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden md:flex space-x-6 text-lg font-medium">
//           {navItems.map((item) => {
//             const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`
//             return (
//               <li key={item}>
//                 <NavLink
//                   to={path}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `hover:text-cyan-400 transition-colors duration-300 ${
//                       isActive ? 'text-cyan-400 underline underline-offset-4' : ''
//                     }`
//                   }
//                 >
//                   {item}
//                 </NavLink>
//               </li>
//             )
//           })}
//         </ul>

//         {/* GitHub Icon */}
//         <div className="hidden md:block">
//           <a
//             href="https://github.com/sahilnegin"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-white hover:text-cyan-400 transition-colors duration-300 text-2xl"
//           >
//             <FaGithub />
//           </a>
//         </div>

//         {/* Hamburger Menu Button (Mobile) */}
//         <button onClick={toggleMenu} className="md:hidden text-2xl text-cyan-400">
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <ul className="md:hidden mt-4 space-y-4 text-center text-lg font-medium">
//           {navItems.map((item) => {
//             const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`
//             return (
//               <li key={item}>
//                 <NavLink
//                   to={path}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     `block py-2 hover:text-cyan-400 transition ${
//                       isActive ? 'text-cyan-400 underline underline-offset-4' : ''
//                     }`
//                   }
//                 >
//                   {item}
//                 </NavLink>
//               </li>
//             )
//           })}

//           {/* GitHub in mobile */}
//           <li>
//             <a
//               href="https://github.com/sahilnegin"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block text-white hover:text-cyan-400 transition text-2xl"
//             >
//               <FaGithub />
//             </a>
//           </li>
//         </ul>
//       )}
//     </nav>
//   )
// }
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "projects", "skills", "contact"];
    const sectionElements = sectionIds.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
      }
    );

    sectionElements.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-zinc-900 text-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Logo */}
      <div className="text-cyan-400 font-mono text-xl font-bold">
        &lt;Sahil.dev /&gt;
      </div>

      {/* Dynamic Nav Links */}
      <ul className="flex gap-8 text-white font-medium">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer transition ${
              activeSection === item.id
                ? "text-cyan-400 border-b-2 border-cyan-400"
                : "hover:text-cyan-400"
            }`}
          >
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>

      {/* GitHub Icon */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-cyan-400 transition text-xl"
      >
        <FaGithub />
      </a>
    </nav>
  );
};

export default Navbar;
