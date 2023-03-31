import React, { Component } from "react";
import { MemberProps } from "../utils/Form.type";
import "../../../components/Card/Card.css";

export class Card extends Component<MemberProps> {
  constructor(props: MemberProps) {
    super(props);
  }

  render() {
    const item = this.props.member;
    return (
      <div className="post" data-testid="post">
        <img src={item.imageUrl} alt={item.name} height="200" />
        <h2>{item.name}</h2>
        <h2>{item.surname}</h2>
        <p>{item.date}</p>
        <div className="post-gender">
          gender: <span>{item.gender}</span>{" "}
        </div>
        <div className="post-category">
          category: <span>{item.category}</span>{" "}
        </div>
      </div>
    );
  }
}
