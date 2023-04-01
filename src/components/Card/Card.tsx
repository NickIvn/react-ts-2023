import React from "react";
import { ICard } from "../../type";
import "./Card.css";

// class Card extends React.Component<ICard> {
//   constructor(props: ICard) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="post" data-testid="post">
//         <img src={this.props.imageUrl} alt={this.props.title} />
//         <h2>{this.props.title}</h2>
//         <p>{this.props.description}</p>
//       </div>
//     );
//   }
// }

// export { Card };

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
