export interface PokemonListResponse {
  count    : number;
  next?    : string;
  previous?: string;
  results  : Pokemon[];
}

export interface Pokemon {
  id  : string;
  name: string;
  url :  string;
  img : string;
}
