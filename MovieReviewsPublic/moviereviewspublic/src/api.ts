import type { BrowseMovie, FeaturedMovie, Movie, ReviewWithCritic, ReviewWithMovie } from "./types";

// All fetch calls use a relative /api path.
// Vite's dev proxy (vite.config.ts) forwards these to the running API server.

// The API's C# DTO spells the cover image field "CoverCoverImg", which
// serialises to "coverCoverImg" in JSON. Our TypeScript types use "coverImg".
// This helper renames the field so the rest of the app never sees the mismatch.
function normalizeCoverImg(raw: Record<string, unknown>): Record<string, unknown> {
  const { coverCoverImg, ...rest } = raw;
  return { ...rest, coverImg: coverCoverImg ?? null };
}

// GET /api/movies/featured
// Returns up to 5 recently-added movies that have at least one published review,
// each paired with their most recent review.
export async function getFeaturedMovies(): Promise<FeaturedMovie[]> {
  const res = await fetch("/api/movies/featured");
  if (!res.ok) throw new Error("Failed to fetch featured movies");
  const data: Record<string, unknown>[] = await res.json();
  return data.map((item) => ({
    movie: normalizeCoverImg(item.movie as Record<string, unknown>),
    latestReview: (item.latestReview as ReviewWithCritic | null) ?? null,
  })) as FeaturedMovie[];
}

// GET /api/movies
// Returns all movies with genre, rating, and latest review info.
export async function getMovies(): Promise<BrowseMovie[]> {
  const res = await fetch("/api/movies");
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data: Record<string, unknown>[] = await res.json();
  return data.map(normalizeCoverImg) as BrowseMovie[];
}

// GET /api/movies/:id
// Returns a single movie by its numeric id.
export async function getMovieById(id: number): Promise<Movie> {
  const res = await fetch(`/api/movies/${id}`);
  if (!res.ok) throw new Error("Failed to fetch movie");
  const data: Record<string, unknown> = await res.json();
  return normalizeCoverImg(data) as Movie;
}

// GET /api/genres
// Returns all genre names from the database.
export async function getGenres(): Promise<string[]> {
  const res = await fetch("/api/genres");
  if (!res.ok) throw new Error("Failed to fetch genres");
  return res.json();
}

// GET /api/reviews?movieId=:id
// Returns all published reviews for a given movie, each with the critic's name.
export async function getReviewsByMovieId(movieId: number): Promise<ReviewWithCritic[]> {
  const res = await fetch(`/api/reviews?movieId=${movieId}`);
  if (!res.ok) throw new Error("Failed to fetch reviews");
  return res.json();
}

// GET /api/reviews/by-author/:authorId
// Returns all published reviews by a specific critic, each with the movie title.
export async function getReviewsByAuthor(authorId: string): Promise<ReviewWithMovie[]> {
  const res = await fetch(`/api/reviews/by-author/${encodeURIComponent(authorId)}`);
  if (!res.ok) throw new Error("Failed to fetch reviews for this critic");
  return res.json();
}
