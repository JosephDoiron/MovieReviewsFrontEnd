import type { MovieWithGenre } from "../../types";
import GenreBadge from "../ui/GenreBadge";

interface MovieCardProps {
  movie: MovieWithGenre;
}

export default function MovieCard({ movie }: MovieCardProps) {
  const year = new Date(movie.releaseDate).getFullYear();
  const runtime =
    movie.runtimeHours > 0
      ? `${movie.runtimeHours}h ${movie.runtimeMinutes}m`
      : `${movie.runtimeMinutes}m`;

  return (
    <div className="group bg-navy rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Poster */}
      <div className="relative overflow-hidden">
        <img
          src={movie.coverImg ?? "https://picsum.photos/seed/default/400/600"}
          alt={movie.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-teal text-white text-xs font-bold px-2 py-1 rounded">
            {movie.ratingName}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <GenreBadge genre={movie.genreName} />
        </div>
        <h3 className="text-white font-semibold text-lg leading-tight mb-1">
          {movie.title}
        </h3>
        <p className="text-white/50 text-sm mb-3 line-clamp-2">
          {movie.synopsis}
        </p>
        <div className="flex items-center justify-between text-white/40 text-xs">
          <span>{year}</span>
          <span>{runtime}</span>
        </div>
      </div>
    </div>
  );
}
