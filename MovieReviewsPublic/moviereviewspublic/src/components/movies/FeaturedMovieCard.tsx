import type { FeaturedMovie } from "../../types";
import GenreBadge from "../ui/GenreBadge";
import StarRating from "./StarRating";

interface FeaturedMovieCardProps {
  featured: FeaturedMovie;
}

export default function FeaturedMovieCard({ featured }: FeaturedMovieCardProps) {
  const { movie, latestReview } = featured;
  const year = new Date(movie.releaseDate).getFullYear();

  return (
    <div className="bg-navy rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
      {/* Poster */}
      <div className="md:w-48 md:flex-shrink-0">
        <img
          src={movie.coverImg ?? "https://picsum.photos/seed/default/400/600"}
          alt={movie.title}
          className="w-full h-56 md:h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <GenreBadge genre={movie.genreName} />
            <span className="text-white/40 text-xs">{year}</span>
            <span className="bg-teal text-white text-xs font-bold px-2 py-0.5 rounded">
              {movie.ratingName}
            </span>
          </div>
          <h3 className="text-white font-semibold text-xl mb-2">
            {movie.title}
          </h3>
          <p className="text-white/60 text-sm line-clamp-2 mb-3">
            {movie.synopsis}
          </p>
        </div>

        {/* Latest Review */}
        {latestReview && (
          <div className="border-t border-white/10 pt-3 mt-auto">
            <div className="flex items-center gap-2 mb-1">
              <StarRating score={latestReview.score} />
              <span className="text-gold text-sm font-semibold">
                {latestReview.score}/5
              </span>
            </div>
            <p className="text-white/50 text-sm italic line-clamp-2">
              &ldquo;{latestReview.content}&rdquo;
            </p>
            <p className="text-teal text-xs mt-1 font-medium">
              &mdash; {latestReview.criticName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
