// import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../components/Form/FormInput";
import { IForm } from "../../type";
import Card from "../../components/Form/Card/Card";
import "../../components/Cards/Cards.css";
import { RootState } from "../../store/store";
import { addCard, removeCard } from "../../store/reducer/formSlice";

const JoinUs = () => {
  // const [members, setmembers] = useState<IForm[]>([]);
  // const updatemember = useCallback((newCard: IForm) => {
  //   setmembers((prevmembers) => [...prevmembers, newCard]);
  // }, []);
  const dispatch = useDispatch();
  const members = useSelector((state: RootState) => state.form.cards);

  const updateMember = (newCard: IForm) => {
    dispatch(addCard(newCard));
  };

  const handleRemoveCard = (id: number) => {
    dispatch(removeCard(id));
  };

  return (
    <div>
      <h3>Please, fill the form below to join our team</h3>
      <FormInput onAddCard={updateMember} />
      <div className="post-container">
        {members?.map((member) => (
          <Card key={member.id} member={member} onRemove={handleRemoveCard} />
        ))}
      </div>
    </div>
  );
};

export default JoinUs;
