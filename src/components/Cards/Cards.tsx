import {
  useSearchMoviesQuery,
  useGetTopRatedMoviesQuery,
} from "../../service/ApiService";
import { IMovie, IMovieResult } from "../../type";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import "./Cards.css";
import { useState } from "react";
import ProgressIndicator from "../ProgressIndicator/ProgressIndicator";

interface CardsProps {
  searchQuery?: string;
}

const Cards = ({ searchQuery }: CardsProps) => {
  const topRatedMoviesQuery = useGetTopRatedMoviesQuery(1);
  const searchMoviesQuery = useSearchMoviesQuery(searchQuery || "");
  const movieQuery = searchQuery ? searchMoviesQuery : topRatedMoviesQuery;
  const { data: movieResult = {}, isFetching } = movieQuery;
  const { results: movies = [] } = movieResult as IMovieResult;

  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);
  const handleCardClick = (movie: IMovie) => {
    setSelectedMovie(movie);
  };

  if (isFetching) {
    return <ProgressIndicator></ProgressIndicator>;
  }

  return (
    <div className="post-container">
      {movies.map((movie: IMovie) => (
        <div key={movie.id}>
          <Card movie={movie} onClick={() => handleCardClick(movie)} />
        </div>
      ))}
      {selectedMovie && (
        <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
};

export default Cards;
