import React from "react";
import { ICard } from "../../type";
import "./Card.css";

interface Card {
  product: ICard;
}

const Card = ({ product }: Card) => {
  return (
    <div className="post" data-testid="post">
      <img src={product.imageUrl} alt={product.title} height="300" />
      <h2>{product.title}</h2>
      <h3>{product.country}</h3>
      <div className="post-length">
        length: <span>{product.length}</span>
      </div>
      <div className="post-difficulty">
        difficulty: <span>{product.difficulty}</span>
      </div>
      <p>{product.description}</p>
    </div>
  );
};

export default Card;
