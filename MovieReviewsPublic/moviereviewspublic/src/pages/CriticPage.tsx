import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { getReviewsByAuthor } from "../api";
import type { ReviewWithMovie } from "../types";
import StarRating from "../components/movies/StarRating";

export default function CriticPage() {
  const { authorId } = useParams();
  const [reviews, setReviews] = useState<ReviewWithMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authorId) {
      setError("No critic specified.");
      setLoading(false);
      return;
    }

    getReviewsByAuthor(authorId)
      .then(setReviews)
      .catch(() => setError("Could not load reviews for this critic."))
      .finally(() => setLoading(false));
  }, [authorId]);

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

  const criticName = reviews.length > 0 ? reviews[0].criticName : "Unknown Critic";

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link
        to="/movies"
        className="text-teal text-sm font-semibold hover:underline mb-8 inline-block"
      >
        &larr; Back to movies
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold text-navy mb-2">
        {criticName}
      </h1>
      <p className="text-gray-500 mb-8">
        {reviews.length} review{reviews.length !== 1 ? "s" : ""} published
      </p>

      {reviews.length === 0 ? (
        <p className="text-gray-400">This critic has not published any reviews yet.</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <StarRating score={review.score} />
                <span className="text-gold font-semibold text-sm">
                  {review.score}/5
                </span>
              </div>
              <p className="text-gray-600 italic mb-3">
                &ldquo;{review.content}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <Link
                  to={`/movies/${review.movieId}`}
                  className="text-teal text-sm font-semibold hover:underline"
                >
                  {review.movieTitle}
                </Link>
                <span className="text-gray-400 text-xs">
                  {new Date(review.createdDate).toLocaleDateString("en-CA")}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
