import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { getMovieById, getReviewsByMovieId } from "../api";
import type { Movie, ReviewWithCritic } from "../types";
import StarRating from "../components/movies/StarRating";

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [reviews, setReviews] = useState<ReviewWithCritic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const movieId = parseInt(id ?? "", 10);
    if (isNaN(movieId)) {
      setError("Invalid movie ID.");
      setLoading(false);
      return;
    }

    Promise.all([getMovieById(movieId), getReviewsByMovieId(movieId)])
      .then(([movieData, reviewsData]) => {
        setMovie(movieData);
        setReviews(reviewsData);
      })
      .catch(() => setError("Could not load this movie. Is the API running?"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-red-500 text-sm">{error}</p>
        <Link to="/movies" className="text-teal text-sm mt-4 inline-block hover:underline">
          &larr; Back to movies
        </Link>
      </div>
    );
  }

  if (!movie) return null;

  const year = new Date(movie.releaseDate).getFullYear();
  const runtime =
    movie.runtimeHours > 0
      ? `${movie.runtimeHours}h ${movie.runtimeMinutes}m`
      : `${movie.runtimeMinutes}m`;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back link */}
      <Link
        to="/movies"
        className="text-teal text-sm font-semibold hover:underline mb-8 inline-block"
      >
        &larr; Back to movies
      </Link>

      {/* Movie Info */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <img
          src={movie.coverImg ?? "https://picsum.photos/seed/default/400/600"}
          alt={movie.title}
          className="w-48 h-72 rounded-xl object-contain shadow-lg shrink-0 bg-gray-100"
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
            {movie.title}
          </h1>
          <p className="text-gray-400 text-sm mb-4">
            {year} &bull; {runtime}
          </p>
          <p className="text-gray-600 leading-relaxed">{movie.synopsis}</p>
        </div>
      </div>

      {/* Critic Reviews */}
      <section>
        <h2 className="text-2xl font-bold text-navy mb-6">Critic Reviews</h2>

        {reviews.length === 0 ? (
          <p className="text-gray-400">No reviews yet for this film.</p>
        ) : (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <StarRating score={review.score} />
                  <span className="text-gold font-semibold text-sm">
                    {review.score}/5
                  </span>
                  <span className="text-teal text-sm font-medium">
                    {review.authorId ? (
                      <Link to={`/critic/${review.authorId}`} className="hover:underline">
                        {review.criticName ?? "Anonymous"}
                      </Link>
                    ) : (
                      review.criticName ?? "Anonymous"
                    )}
                  </span>
                </div>
                <p className="text-gray-600 italic">
                  &ldquo;{review.content}&rdquo;
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  {new Date(review.createdDate).toLocaleDateString("en-CA")}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
