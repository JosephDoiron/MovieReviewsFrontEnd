import { useState } from "react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-teal shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2">
            <span className="font-brand text-2xl text-orange tracking-wide">
              Fresh Picks
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-white/70 hover:text-white"
                }`
              }
            >
              About
            </NavLink>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink
              to="/"
              end
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-sm font-semibold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-sm font-semibold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              Movies
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded text-sm font-semibold ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`
              }
            >
              About
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
