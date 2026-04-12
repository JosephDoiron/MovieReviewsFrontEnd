export interface Movie {
  id: number;
  title: string;
  synopsis: string;
  coverImg: string | null;
  runtimeHours: number;
  runtimeMinutes: number;
  releaseDate: string;
  createdDate: string;
  ratingId: number;
}

export interface MovieWithGenre extends Movie {
  genreName: string;
  ratingName: string;
}

export interface BrowseMovie extends MovieWithGenre {
  latestReviewScore: number | null;
  latestReviewCriticName: string | null;
  latestReviewAuthorId: string | null;
}

export interface ReviewWithCritic {
  id: number;
  movieId: number;
  authorId: string | null;
  criticName: string | null;
  score: number;
  content: string;
  isPublished: boolean;
  createdDate: string;
}

export interface ReviewWithMovie extends ReviewWithCritic {
  movieTitle: string;
}

export interface FeaturedMovie {
  movie: MovieWithGenre;
  latestReview: ReviewWithCritic | null;
}
