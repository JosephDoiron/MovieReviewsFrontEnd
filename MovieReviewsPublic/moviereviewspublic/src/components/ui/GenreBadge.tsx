interface GenreBadgeProps {
  genre: string;
}

export default function GenreBadge({ genre }: GenreBadgeProps) {
  return (
    <span className="inline-block bg-gold text-navy text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wide">
      {genre}
    </span>
  );
}
