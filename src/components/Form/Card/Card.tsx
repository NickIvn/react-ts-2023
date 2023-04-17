import React from "react";
import { IForm } from "../../../type";
import "./Card.css";

interface Form {
  member: IForm;
  onRemove: (id: number) => void;
}

const Card = ({ member, onRemove }: Form) => {
  const handleRemoveClick = () => {
    onRemove(member.id);
  };

  return (
    <div className="form" data-testid="form">
      <span className="form-remove" onClick={handleRemoveClick}>
        &times;
      </span>
      <img src={member.imageUrl} alt={member.name} height="200" />
      <h2>{member.name}</h2>
      <h2>{member.surname}</h2>
      <p>DoB: {member.date}</p>
      <div className="form-gender">
        gender: <span>{member.gender}</span>{" "}
      </div>
      <div className="form-category">
        category: <span>{member.category}</span>{" "}
      </div>
    </div>
  );
};

export default Card;
