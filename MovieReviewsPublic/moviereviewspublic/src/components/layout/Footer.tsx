import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="font-brand text-xl text-orange">
              Fresh Picks
            </span>
            <p className="text-white/60 text-sm mt-2">
              Your trusted source for honest critic reviews and movie
              recommendations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/movies" className="text-white/60 hover:text-white transition-colors">
                  Browse Movies
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/80 mb-3">
              Contact
            </h4>
            <p className="text-white/60 text-sm">info@moviereviews.example</p>
            <p className="text-white/60 text-sm mt-1">Halifax, Nova Scotia</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-white/40 text-xs">
          &copy; {new Date().getFullYear()} Fresh Picks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
