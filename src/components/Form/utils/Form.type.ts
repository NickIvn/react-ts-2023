import { ICard } from "../Card/Card.props";

export type MemberProps = {
  member: ICard;
};

export type FormAdd = {
  id?: number;
  name: string;
  surname: string;
  imageUrl: string;
  date: string;
  rules: boolean;
  category: string;
  gender: string;
};
