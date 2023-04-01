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
      <p>{product.description}</p>
    </div>
  );
};

export default Card;
