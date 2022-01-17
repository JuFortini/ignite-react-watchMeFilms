import { MovieCard } from "./MovieCard";

interface MovieShown {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface MoviesData {
  movieData: MovieShown[];
}

export function Content({ movieData }: MoviesData) {
  // Complete aqui
  return (
    <main>
      <div className="movies-list">
        {movieData.map(movie => (
          <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
        ))}
      </div>
    </main>
  )
}