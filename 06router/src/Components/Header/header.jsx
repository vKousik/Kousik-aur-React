import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="shadow-lg fixed z-50 top-0 left-0 w-screen bg-white h-20">
      <nav className="px-6 lg:px-12 py-4 w-full">
        <div className="flex justify-between items-center w-full">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-4 h-14 transition-transform transform hover:scale-110"
              alt="Logo"
            />
          </Link>

          <ul className="hidden lg:flex space-x-12">
            {[
              { name: 'Home', path: '/' },
              { name: 'About', path: '/about' },
              { name: 'Contact', path: '/contact' },
              { name: 'GitHub', path: '/github' },
            ].map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-lg font-semibold tracking-wide transition duration-300 ${
                      isActive
                        ? 'text-orange-700 border-b-2 border-orange-700'
                        : 'text-gray-700 hover:text-orange-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <Link
              to="#"
              className="text-gray-800 hover:bg-gray-50 transition-all font-medium rounded-lg text-sm px-6 py-2.5 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-6 py-2.5 transition-all focus:outline-none"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
