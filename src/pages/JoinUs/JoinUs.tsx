import React from "react";
import { IRouter } from "../../components/Header/Header.props";
import { FormInput } from "../../components/Form/FormInput";
import { ICard } from "../../components/Form/Card/Card.props";
import { ICards } from "../../components/Form/utils/Form.props";
import { Card } from "../../components/Form/Card/Card";
import "../../components/Cards/Cards.css";

class JoinUs extends React.Component<IRouter, ICards> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
    this.state = {
      members: [],
    };
    this.onAddCard = this.onAddCard.bind(this);
  }

  onAddCard(newCard: ICard) {
    this.setState((prevState) => ({
      members: [...prevState.members, newCard],
    }));
  }
  render(): React.ReactNode {
    return (
      <div>
        <h3>Please, fill the form below to join our team</h3>
        <FormInput onAddCard={this.onAddCard} />
        <div className="post-container">
          {this.state.members?.map((member) => (
            <Card key={member.id} member={member} />
          ))}
        </div>
      </div>
    );
  }
}

export { JoinUs };