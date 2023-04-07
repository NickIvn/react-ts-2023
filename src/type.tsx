export interface ICard {
  id: number;
  title: string;
  country: string;
  length: string;
  level: string;
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
