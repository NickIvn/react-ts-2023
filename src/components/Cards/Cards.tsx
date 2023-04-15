import { useGetTopRatedMoviesQuery } from "../../service/movieApi";
import { IMovie, IMovieResult } from "../../type";
import Card from "../Card/Card";
import "./Cards.css";

export default function Cards() {
  const { data: movieResult = {}, isFetching } = useGetTopRatedMoviesQuery(1);
  const { results: movies = [] } = movieResult as IMovieResult;

  if (isFetching) {
    return <div>Loading...</div>;
  }
  return (
    <div className="post-container">
      {movies.map((movie: IMovie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
