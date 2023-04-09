import React from "react";
import "./Card.css";
import { IMovie } from "../../type";

interface ICard {
  movie: IMovie;
  onClick: () => void;
}

const getPosterURL = (poster_path: string) => {
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};
const Card = ({ movie, onClick }: ICard) => {
  return (
    <div className="post" data-testid="post" onClick={onClick}>
      <img src={getPosterURL(movie.poster_path)} alt={movie.name} width="200" />
      <h2>{movie.name}</h2>
      <p>
        <span className="rate">Rating:</span>
        {movie.vote_average}
      </p>
      <p>
        <span className="country">Country:</span>
        {movie.origin_country}
      </p>
    </div>
  );
};

export default Card;
