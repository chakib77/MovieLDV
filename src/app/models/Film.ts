export interface Film {
release_date: any;
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    cast: Actor[];
    revenue: number;
    genres: {id: number, name: string}[];
  }
  
  export interface Actor {
    name: string;
    character: string;
  }
