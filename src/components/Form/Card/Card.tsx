import React, { Component } from "react";
import { MemberProps } from "../utils/Form.type";
import "./JoinCard.css";

export class Card extends Component<MemberProps> {
  constructor(props: MemberProps) {
    super(props);
  }

  render() {
    const item = this.props.member;
    return (
      <div className="form" data-testid="form">
        <img src={item.imageUrl} alt={item.name} height="200" />
        <h2>{item.name}</h2>
        <h2>{item.surname}</h2>
        <p>DoB: {item.date}</p>
        <div className="form-gender">
          gender: <span>{item.gender}</span>{" "}
        </div>
        <div className="form-category">
          category: <span>{item.category}</span>{" "}
        </div>
      </div>
    );
  }
}
