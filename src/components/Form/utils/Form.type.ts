import { ICard } from "../Card/Card.props";
export type FormAdd = {
  onAddCard: (newCard: ICard) => void;
};
export type MemberProps = {
  member: ICard;
};
