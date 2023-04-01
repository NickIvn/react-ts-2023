import React from "react";
import dataCard from "../../assets/cards.json";
import Card from "../Card/Card";
import "./Cards.css";

// class Cards extends React.Component {
//   states = {
//     data: dataCard,
//   };

//   render(): React.ReactNode {
//     return (
//       <div className="post-container">
//         {this.states.data.products.map((i) => (
//           <Card {...i} key={i.id} />
//         ))}
//       </div>
//     );
//   }
// }

// export { Cards };

const Cards = () => {
  return (
    <div className="post-container">
      {dataCard.products.map((i) => (
        <Card key={i.id} product={i} />
      ))}
    </div>
  );
};

export default Cards;
