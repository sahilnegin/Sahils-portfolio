import { NavLink } from 'react-router-dom'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default function Navbar() {
  const navItems = ['Home', 'Projects', 'Skills', 'Contact']
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="bg-[#1f1f1f] text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        {/* Logo */}
        <div className="text-cyan-400 font-mono font-bold text-xl">
          &lt;Sahil.dev /&gt;
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`
            return (
              <li key={item}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `hover:text-cyan-400 transition-colors duration-300 ${
                      isActive ? 'text-cyan-400 underline underline-offset-4' : ''
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          })}
        </ul>

        {/* GitHub Icon */}
        <div className="hidden md:block">
          <a
            href="https://github.com/sahilnegin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-cyan-400 transition-colors duration-300 text-2xl"
          >
            <FaGithub />
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button onClick={toggleMenu} className="md:hidden text-2xl text-cyan-400">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center text-lg font-medium">
          {navItems.map((item) => {
            const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`
            return (
              <li key={item}>
                <NavLink
                  to={path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block py-2 hover:text-cyan-400 transition ${
                      isActive ? 'text-cyan-400 underline underline-offset-4' : ''
                    }`
                  }
                >
                  {item}
                </NavLink>
              </li>
            )
          })}

          {/* GitHub in mobile */}
          <li>
            <a
              href="https://github.com/sahilnegin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white hover:text-cyan-400 transition text-2xl"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
