import { useState } from "react";
import MovieCard from "../components/movies/MovieCard";
import { mockMovies, genres } from "../data/mockData";

export default function BrowseMoviesPage() {
  const [activeGenre, setActiveGenre] = useState("All");

  const filtered =
    activeGenre === "All"
      ? mockMovies
      : mockMovies.filter((m) => m.genreName === activeGenre);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-navy">
          Browse Movies
        </h1>
        <p className="text-gray-500 mt-2">
          Explore our collection and find your next favourite film.
        </p>
      </div>

      {/* Genre Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setActiveGenre(genre)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
              activeGenre === genre
                ? "bg-teal text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <p className="text-gray-400 text-sm mb-4">
        Showing {filtered.length} movie{filtered.length !== 1 ? "s" : ""}
        {activeGenre !== "All" && ` in ${activeGenre}`}
      </p>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No movies found in this genre.
          </p>
        </div>
      )}
    </div>
  );
}
