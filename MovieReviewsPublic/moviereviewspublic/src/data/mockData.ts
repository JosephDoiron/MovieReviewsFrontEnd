import type { MovieWithGenre, FeaturedMovie, ReviewWithCritic } from "../types";

export const mockMovies: MovieWithGenre[] = [
  {
    id: 1,
    title: "Galactic Siege",
    synopsis:
      "In the distant future, a rogue fleet wages war against an empire that controls the galaxy's last habitable worlds.",
    coverImg: "https://picsum.photos/seed/movie1/400/600",
    runtimeHours: 2,
    runtimeMinutes: 28,
    releaseDate: "2026-03-15",
    createdDate: "2026-03-01",
    genreId: 1,
    ratingId: 3,
    genreName: "Sci-Fi",
    ratingName: "PG-13",
  },
  {
    id: 2,
    title: "The Last Curtain",
    synopsis:
      "A retired Broadway actress returns to the stage one final time to confront the ghost of her greatest rival.",
    coverImg: "https://picsum.photos/seed/movie2/400/600",
    runtimeHours: 1,
    runtimeMinutes: 52,
    releaseDate: "2026-02-14",
    createdDate: "2026-02-01",
    genreId: 2,
    ratingId: 2,
    genreName: "Drama",
    ratingName: "PG",
  },
  {
    id: 3,
    title: "Frostbite Run",
    synopsis:
      "An ex-special forces operative must escort a whistleblower across the frozen tundra while hunted by mercenaries.",
    coverImg: "https://picsum.photos/seed/movie3/400/600",
    runtimeHours: 2,
    runtimeMinutes: 5,
    releaseDate: "2026-01-20",
    createdDate: "2026-01-10",
    genreId: 3,
    ratingId: 4,
    genreName: "Action",
    ratingName: "R",
  },
  {
    id: 4,
    title: "Love in Lisbon",
    synopsis:
      "Two strangers meet at a Lisbon bookshop and spend one unforgettable weekend rediscovering what it means to connect.",
    coverImg: "https://picsum.photos/seed/movie4/400/600",
    runtimeHours: 1,
    runtimeMinutes: 45,
    releaseDate: "2026-02-28",
    createdDate: "2026-02-15",
    genreId: 4,
    ratingId: 2,
    genreName: "Romance",
    ratingName: "PG",
  },
  {
    id: 5,
    title: "Laugh Track",
    synopsis:
      "A washed-up sitcom writer accidentally becomes the star of the reality show documenting his failures.",
    coverImg: "https://picsum.photos/seed/movie5/400/600",
    runtimeHours: 1,
    runtimeMinutes: 38,
    releaseDate: "2026-03-01",
    createdDate: "2026-02-20",
    genreId: 5,
    ratingId: 2,
    genreName: "Comedy",
    ratingName: "PG",
  },
  {
    id: 6,
    title: "Hollow Ground",
    synopsis:
      "A family moves into a farmhouse built over a collapsed mine shaft, only to discover the ground beneath them is alive.",
    coverImg: "https://picsum.photos/seed/movie6/400/600",
    runtimeHours: 1,
    runtimeMinutes: 55,
    releaseDate: "2025-10-31",
    createdDate: "2025-10-15",
    genreId: 6,
    ratingId: 4,
    genreName: "Horror",
    ratingName: "R",
  },
  {
    id: 7,
    title: "Neon Drift",
    synopsis:
      "In a rain-soaked megacity, a street racer gets tangled in a corporate conspiracy after winning a rigged tournament.",
    coverImg: "https://picsum.photos/seed/movie7/400/600",
    runtimeHours: 2,
    runtimeMinutes: 11,
    releaseDate: "2026-03-22",
    createdDate: "2026-03-10",
    genreId: 3,
    ratingId: 3,
    genreName: "Action",
    ratingName: "PG-13",
  },
  {
    id: 8,
    title: "Still Waters",
    synopsis:
      "A documentary filmmaker uncovers dark secrets in a quiet lakeside town while investigating a decades-old disappearance.",
    coverImg: "https://picsum.photos/seed/movie8/400/600",
    runtimeHours: 2,
    runtimeMinutes: 0,
    releaseDate: "2025-11-15",
    createdDate: "2025-11-01",
    genreId: 2,
    ratingId: 3,
    genreName: "Drama",
    ratingName: "PG-13",
  },
  {
    id: 9,
    title: "Orbit Zero",
    synopsis:
      "The crew of humanity's first interstellar ship must survive a sabotage attempt that leaves them stranded between stars.",
    coverImg: "https://picsum.photos/seed/movie9/400/600",
    runtimeHours: 2,
    runtimeMinutes: 22,
    releaseDate: "2026-03-28",
    createdDate: "2026-03-15",
    genreId: 1,
    ratingId: 3,
    genreName: "Sci-Fi",
    ratingName: "PG-13",
  },
  {
    id: 10,
    title: "Quarter Note",
    synopsis:
      "A jazz musician in 1960s New Orleans fights to keep his club open while raising his daughter alone.",
    coverImg: "https://picsum.photos/seed/movie10/400/600",
    runtimeHours: 2,
    runtimeMinutes: 15,
    releaseDate: "2025-12-25",
    createdDate: "2025-12-10",
    genreId: 2,
    ratingId: 2,
    genreName: "Drama",
    ratingName: "PG",
  },
];

export const mockReviews: ReviewWithCritic[] = [
  {
    id: 1,
    movieId: 1,
    authorId: "c1",
    score: 4,
    content:
      "A sweeping space opera that delivers on spectacle while keeping its characters grounded. The final act is breathtaking.",
    isPublished: true,
    createdDate: "2026-03-16",
    criticName: "Sarah Chen",
  },
  {
    id: 2,
    movieId: 1,
    authorId: "c2",
    score: 3,
    content:
      "Visually stunning but relies too heavily on familiar tropes. The lead performance elevates the material.",
    isPublished: true,
    createdDate: "2026-03-17",
    criticName: "Marcus Webb",
  },
  {
    id: 3,
    movieId: 2,
    authorId: "c3",
    score: 5,
    content:
      "A masterclass in acting. Every scene crackles with tension and emotion. One of the year's finest films.",
    isPublished: true,
    createdDate: "2026-02-15",
    criticName: "Elena Rodriguez",
  },
  {
    id: 4,
    movieId: 3,
    authorId: "c1",
    score: 3,
    content:
      "Non-stop action with impressive practical stunts. The plot is thin but serviceable for the genre.",
    isPublished: true,
    createdDate: "2026-01-22",
    criticName: "Sarah Chen",
  },
  {
    id: 5,
    movieId: 4,
    authorId: "c4",
    score: 4,
    content:
      "Charming and beautifully shot. The leads have wonderful chemistry that makes every scene feel effortless.",
    isPublished: true,
    createdDate: "2026-03-01",
    criticName: "David Park",
  },
  {
    id: 6,
    movieId: 5,
    authorId: "c2",
    score: 4,
    content:
      "Genuinely hilarious with a surprising emotional core. The meta-humor lands perfectly.",
    isPublished: true,
    createdDate: "2026-03-03",
    criticName: "Marcus Webb",
  },
  {
    id: 7,
    movieId: 6,
    authorId: "c3",
    score: 2,
    content:
      "Starts strong with a creepy premise but devolves into jump-scare territory. The ending disappoints.",
    isPublished: true,
    createdDate: "2025-11-02",
    criticName: "Elena Rodriguez",
  },
  {
    id: 8,
    movieId: 7,
    authorId: "c4",
    score: 4,
    content:
      "Stylish and propulsive. The neon-drenched visuals and pounding soundtrack create an intoxicating atmosphere.",
    isPublished: true,
    createdDate: "2026-03-23",
    criticName: "David Park",
  },
  {
    id: 9,
    movieId: 8,
    authorId: "c1",
    score: 5,
    content:
      "A slow-burn thriller that rewards patience. The final revelation recontextualizes everything before it.",
    isPublished: true,
    createdDate: "2025-11-17",
    criticName: "Sarah Chen",
  },
  {
    id: 10,
    movieId: 9,
    authorId: "c2",
    score: 4,
    content:
      "Tense, claustrophobic, and smart. One of the best sci-fi films in recent memory.",
    isPublished: true,
    createdDate: "2026-03-29",
    criticName: "Marcus Webb",
  },
  {
    id: 11,
    movieId: 10,
    authorId: "c3",
    score: 5,
    content:
      "A soulful tribute to jazz and parenthood. The musical sequences alone are worth the price of admission.",
    isPublished: true,
    createdDate: "2025-12-27",
    criticName: "Elena Rodriguez",
  },
  {
    id: 12,
    movieId: 10,
    authorId: "c4",
    score: 4,
    content:
      "Moving and authentic. The period detail is exquisite and the performances are uniformly excellent.",
    isPublished: true,
    createdDate: "2025-12-28",
    criticName: "David Park",
  },
  {
    id: 13,
    movieId: 5,
    authorId: "c1",
    score: 3,
    content:
      "Funny in spurts but overstays its welcome. The third act loses steam when it tries to get serious.",
    isPublished: true,
    createdDate: "2026-03-05",
    criticName: "Sarah Chen",
  },
  {
    id: 14,
    movieId: 7,
    authorId: "c3",
    score: 3,
    content:
      "All style and little substance, but what style it is. A guilty pleasure that knows exactly what it is.",
    isPublished: true,
    createdDate: "2026-03-24",
    criticName: "Elena Rodriguez",
  },
  {
    id: 15,
    movieId: 9,
    authorId: "c1",
    score: 5,
    content:
      "Riveting from start to finish. This is hard sci-fi done right — thought-provoking and emotionally resonant.",
    isPublished: true,
    createdDate: "2026-03-30",
    criticName: "Sarah Chen",
  },
];

function getLatestReview(movieId: number): ReviewWithCritic | null {
  const reviews = mockReviews
    .filter((r) => r.movieId === movieId)
    .sort(
      (a, b) =>
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
    );
  return reviews[0] ?? null;
}

export const mockFeaturedMovies: FeaturedMovie[] = [
  mockMovies[0],
  mockMovies[1],
  mockMovies[6],
  mockMovies[8],
  mockMovies[9],
].map((movie) => ({
  movie,
  latestReview: getLatestReview(movie.id),
}));

export const genres = [
  "All",
  "Sci-Fi",
  "Drama",
  "Action",
  "Romance",
  "Comedy",
  "Horror",
];
