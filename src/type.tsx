export interface ICard {
  id: number;
  title: string;
  country: string;
  length: string;
  difficulty: string;
  description: string;
  imageUrl: string;
}

export interface IStatePage {
  title: string;
}

export interface IRouter {
  title: string;
  callback: (title: IStatePage) => void;
}

export interface IMovie {
  id: number;
  name: string;
  poster_path: string;
  vote_average: number;
  origin_country: string;
  overview?: string;
}

export interface IForm {
  id: number;
  name: string;
  surname: string;
  imageUrl: string;
  date: string;
  rules: boolean;
  category: string;
  gender: string;
}

export type MemberProps = {
  member: IForm;
};
