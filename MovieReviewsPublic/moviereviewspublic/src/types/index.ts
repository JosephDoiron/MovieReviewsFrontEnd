export interface Movie {
  id: number;
  title: string;
  synopsis: string;
  coverImg: string | null;
  runtimeHours: number;
  runtimeMinutes: number;
  releaseDate: string;
  createdDate: string;
  genreId: number;
  ratingId: number;
}

export interface MovieWithGenre extends Movie {
  genreName: string;
  ratingName: string;
}

export interface Review {
  id: number;
  movieId: number;
  authorId: string | null;
  score: number;
  content: string;
  isPublished: boolean;
  createdDate: string;
}

export interface ReviewWithCritic extends Review {
  criticName: string | null;
}

export interface FeaturedMovie {
  movie: MovieWithGenre;
  latestReview: ReviewWithCritic | null;
}
