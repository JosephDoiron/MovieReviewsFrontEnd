import { Link } from "react-router";
import type { BrowseMovie } from "../../types";
import GenreBadge from "../ui/GenreBadge";
import StarRating from "./StarRating";

interface MovieCardProps {
  movie: BrowseMovie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const year = new Date(movie.releaseDate).getFullYear();

  return (
    <Link
      to={`/movies/${movie.id}`}
      className="group bg-navy rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
    >
      {/* Poster */}
      <div className="relative overflow-hidden bg-navy">
        <img
          src={movie.coverImg ?? "https://picsum.photos/seed/default/400/600"}
          alt={movie.title}
          className="w-full aspect-[2/3] object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Genre + Rating badges */}
        <div className="flex flex-wrap items-center gap-1.5 mb-2">
          {movie.genreName && <GenreBadge genre={movie.genreName} />}
          {movie.ratingName && (
            <span className="bg-teal text-white text-xs font-bold px-2 py-0.5 rounded">
              {movie.ratingName}
            </span>
          )}
          <span className="text-white/40 text-xs ml-auto">{year}</span>
        </div>

        <h3 className="text-white font-semibold text-lg leading-tight mb-2">
          {movie.title}
        </h3>

        {/* Divider + Synopsis */}
        <div className="border-t border-white/10 pt-2 mb-3">
          <p className="text-white/50 text-sm line-clamp-2">
            {movie.synopsis}
          </p>
        </div>

        {/* Latest Review (score + critic only) */}
        {movie.latestReviewScore != null && (
          <div className="border-t border-white/10 pt-2 mt-auto">
            <div className="flex items-center gap-2">
              <StarRating score={movie.latestReviewScore} />
              <span className="text-gold text-xs font-semibold">
                {movie.latestReviewScore}/5
              </span>
              {movie.latestReviewCriticName && (
                <span className="text-teal text-xs font-medium ml-auto truncate">
                  {movie.latestReviewCriticName}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}
