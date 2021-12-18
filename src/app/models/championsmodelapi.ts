export interface ChampionsModelAPI {
  type: string;
  format: string;
  version: string;
  data:   { [key: string]: Champion };
}


export interface Champion {
  id: string;
  name: string;
  title: string;
  blurb: string;
}
