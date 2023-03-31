import { ICard } from "../Card/Card.props";

export interface ICards {
  members: ICard[];
}

export interface IFormValid {
  nameValid: boolean;
  surnameValid: boolean;
  imageValid: boolean;
  imageUrl: string;
  dateValid: boolean;
  rulesValid: boolean;
  genderValid: boolean;
  categoryValid: boolean;
  message: boolean;
  formMessage: boolean;
}
