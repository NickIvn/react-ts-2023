import { useState, useCallback } from "react";
import FormInput from "../../components/Form/FormInput";
import { ICard } from "../../components/Form/Card/Card.props";
import { Card } from "../../components/Form/Card/Card";
// import "../../components/Cards/Cards.css";

const JoinUs = () => {
  const [members, setmembers] = useState<ICard[]>([]);
  const updatemember = useCallback((newCard: ICard) => {
    setmembers((prevmembers) => [...prevmembers, newCard]);
  }, []);

  return (
    <div>
      <h3>Please, fill the form below to join our team</h3>
      <FormInput onAddCard={updatemember} />
      <div className="post-container">
        {members?.map((member) => (
          <Card key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
