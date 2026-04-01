import { Link } from "react-router";
import FeaturedMovieCard from "../components/movies/FeaturedMovieCard";
import { mockFeaturedMovies } from "../data/mockData";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/90 to-teal/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Discover.{" "}
              <span className="text-orange">Review.</span>{" "}
              <span className="text-gold">Decide.</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mt-4 max-w-lg">
              Read trusted critic reviews, explore the latest releases, and find
              your next favourite film.
            </p>
            <Link
              to="/movies"
              className="inline-block mt-8 bg-orange hover:bg-orange/90 text-white font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
            >
              Browse Movies
            </Link>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
      </section>

      {/* Featured Movies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Featured Movies
          </h2>
          <Link
            to="/movies"
            className="text-link hover:text-teal text-sm font-semibold transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockFeaturedMovies.map((featured) => (
            <FeaturedMovieCard key={featured.movie.id} featured={featured} />
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-12">
            Why Fresh Picks?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">
                Trusted Critics
              </h3>
              <p className="text-gray-500 text-sm">
                Reviews from verified critics who know film inside and out.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">
                Latest Releases
              </h3>
              <p className="text-gray-500 text-sm">
                Stay up to date with the newest films hitting theatres.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-navy text-lg mb-2">
                Make Better Choices
              </h3>
              <p className="text-gray-500 text-sm">
                Find exactly what to watch based on scores and reviews you can
                trust.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
