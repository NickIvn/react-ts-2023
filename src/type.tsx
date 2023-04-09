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
}

export interface ICharacter {
  _id: string;
  name: string;
  race: string;
  gender: string;
  birth: string;
  death: string;
  hair: string;
  height: string;
  spouse: string;
  wikiUrl: string;
  image: string;
}

export interface ApiResponse<T> {
  docs: T[];
  total: number;
  limit: number;
  offset: number;
  page: number;
  pages: number;
}
