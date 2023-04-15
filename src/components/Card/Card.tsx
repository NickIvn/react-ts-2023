import React from "react";
import "./Card.css";
import { IMovie } from "../../type";

interface ICardProps {
  movie: IMovie;
  onClick: () => void;
}

const getPosterURL = (poster_path: string | null | undefined) => {
  if (!poster_path) {
    return "https://upload.wikimedia.org/wikipedia/commons/1/16/No_image_available_450_x_600.svg";
  }
  return `https://www.themoviedb.org/t/p/w220_and_h330_face/${poster_path}`;
};

export default function Card({ movie, onClick }: ICardProps) {
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
}
