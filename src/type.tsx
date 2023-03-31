export interface ICard {
  id: number;
  title: string;
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
