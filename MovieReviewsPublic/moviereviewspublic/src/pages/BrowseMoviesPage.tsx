import { useState, useEffect, useMemo } from "react";
import MovieCard from "../components/movies/MovieCard";
import { getMovies, getGenres } from "../api";
import type { BrowseMovie } from "../types";

type SortOption = "az" | "za" | "newest" | "oldest";
type GenreFilter = "neutral" | "include" | "exclude";

export default function BrowseMoviesPage() {
  const [movies, setMovies] = useState<BrowseMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("az");
  const [genreFilters, setGenreFilters] = useState<Record<string, GenreFilter>>({});
  const [filterOpen, setFilterOpen] = useState(false);
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(() => setError("Could not load movies. Is the API running?"))
      .finally(() => setLoading(false));
    getGenres()
      .then(setGenres)
      .catch(() => {});
  }, []);

  function cycleGenre(genre: string) {
    setGenreFilters((prev) => {
      const current = prev[genre] ?? "neutral";
      if (current === "neutral") return { ...prev, [genre]: "include" };
      if (current === "include") return { ...prev, [genre]: "exclude" };
      const updated = { ...prev };
      delete updated[genre];
      return updated;
      /*
       * Each click on a genre advances one step: neutral -> include ->
       * exclude, third click removes the key entirely which brings it back
       * to neutral. Removing the key, rather than setting it back to "neutral",
       * keeps the object clean so that counting Object.keys gives an accurate
       * number of active filters. The function takes a callback (prev =>) instead
       * of a plain value so React always gives it the latest state rather than
       * whatever was captured when the click handler was created.
       */
    });
  }

  function clearGenreFilters() {
    setGenreFilters({});
  }

  const activeFilterCount = Object.keys(genreFilters).length;

  const displayedMovies = useMemo(() => {
    let result = movies;

    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter((m) => m.title.toLowerCase().includes(term));
    }

    const included = Object.entries(genreFilters)
      .filter(([, v]) => v === "include")
      .map(([k]) => k);
    const excluded = Object.entries(genreFilters)
      .filter(([, v]) => v === "exclude")
      .map(([k]) => k);

    if (included.length > 0 || excluded.length > 0) {
      result = result.filter((m) => {
        const movieGenres = m.genreName
          ? m.genreName.split(", ").map((g) => g.trim())
          : [];
        const passesInclude =
          included.length === 0 ||
          included.some((g) => movieGenres.includes(g));
        const passesExclude = excluded.every((g) => !movieGenres.includes(g));
        return passesInclude && passesExclude;
      });
    }

    result = [...result].sort((a, b) => {
      switch (sort) {
        case "az": return a.title.localeCompare(b.title);
        case "za": return b.title.localeCompare(a.title);
        case "newest": return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime();
        case "oldest": return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime();
      }
    });

    return result;
    /*
     * Takes the full movies array and runs it through three stages in order.
     * First, if there's a search term, it keeps only movies whose title contains
     * that text. Second, if any genres are marked include or exclude, it splits
     * the include list and exclude list apart and filters accordingly -- a movie
     * needs to match at least one included genre (OR logic) and can't match any
     * excluded genre (AND logic). Third, it sorts the remaining movies by whatever
     * option is selected. The [...result] spread before sort is just because
     * Array.sort mutates the array it's called on, and mutating state directly
     * causes bugs in React. useMemo wraps the whole thing so it only re-runs
     * when one of the four inputs actually changes.
     */
  }, [movies, search, genreFilters, sort]);

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

      {loading && (
        <p className="text-gray-400 text-sm">Loading movies...</p>
      )}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}

      {!loading && !error && (
        <>
          {/* Controls: Search, Sort, Genre Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {/* Search */}
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border border-light-gray rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
            />

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="border border-light-gray rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal bg-white"
            >
              <option value="az">A to Z</option>
              <option value="za">Z to A</option>
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>

            {/*
              Genre filter button and panel. Clicking the button flips filterOpen
              which renders both the panel and a transparent full-screen backdrop
              behind it. The backdrop closes the panel when the user clicks anywhere
              outside. The panel sits at a higher z-index than the backdrop so its
              own clicks still go through. Each genre shows up as a pill button that
              calls cycleGenre on click, and the pill reads its current color from
              genreFilters[genre], defaulting to neutral if the key isn't there yet.
              The badge on the button counts how many genres have been touched.
            */}
            <div className="relative">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className={`w-full sm:w-auto border rounded-lg px-4 py-2 text-sm transition-colors flex items-center gap-2 ${
                  activeFilterCount > 0
                    ? "border-teal bg-teal/5 text-navy"
                    : "border-light-gray bg-white hover:bg-gray-50"
                }`}
              >
                <svg className="w-4 h-4 text-gray-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filter by genre
                {activeFilterCount > 0 && (
                  <span className="bg-teal text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">
                    {activeFilterCount}
                  </span>
                )}
              </button>

              {/* Transparent full-screen backdrop: clicking outside closes the panel */}
              {filterOpen && (
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setFilterOpen(false)}
                />
              )}

              {/* Filter panel */}
              {filterOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-light-gray rounded-xl shadow-xl z-20 p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-navy">Filter by genre</span>
                    {activeFilterCount > 0 && (
                      <button
                        onClick={clearGenreFilters}
                        className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  {/* Legend */}
                  <div className="flex gap-4 mb-3">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="w-3 h-3 rounded-full bg-teal" />
                      Include
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="w-3 h-3 rounded-full bg-orange" />
                      Exclude
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <span className="w-3 h-3 rounded-full bg-gray-200" />
                      Any
                    </span>
                  </div>

                  {/* Genre buttons */}
                  <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => {
                      const state = genreFilters[genre] ?? "neutral";
                      return (
                        <button
                          key={genre}
                          onClick={() => cycleGenre(genre)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-colors ${
                            state === "include"
                              ? "bg-teal text-white"
                              : state === "exclude"
                              ? "bg-orange text-white"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {state === "include" && (
                            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {state === "exclude" && (
                            <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                          {genre}
                        </button>
                      );
                    })}
                  </div>

                  <p className="text-xs text-gray-400 mt-3 leading-relaxed">
                    Click once to include, again to exclude, once more to reset.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-400 text-sm mb-4">
            Showing {displayedMovies.length} movie{displayedMovies.length !== 1 ? "s" : ""}
          </p>

          {/* Movie Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {displayedMovies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>

          {/* Empty State */}
          {displayedMovies.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">No movies match your filters.</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

