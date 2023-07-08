import { instance } from '../../../services';

interface Origin {
  name: string;
  url: string;
}

export interface Result {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export const getCharacters = (page: number) => instance.get(`/character/?page=${page}`);
