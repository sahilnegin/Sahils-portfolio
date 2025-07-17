import { NavLink } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

export default function Navbar() {
  const navItems = ['Home', 'Projects', 'Skills', 'Contact']

  return (
    <nav className="bg-[#1f1f1f] text-white px-6 py-4 flex items-center justify-between shadow-md">
      {/* Left side: Logo */}
      <div className="text-cyan-400 font-mono font-bold text-xl">
        &lt;Sahil.dev /&gt;
      </div>

      {/* Center: Nav links */}
      <ul className="flex space-x-6 text-lg font-medium">
        {navItems.map((item) => {
          const path = item === 'Home' ? '/' : `/${item.toLowerCase()}`

          return (
            <li key={item}>
              <NavLink
                to={path}
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

      {/* Right side: GitHub */}
      <div>
        <a
          href="https://github.com/sahilnegin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-cyan-400 transition-colors duration-300 text-2xl"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  )
}
