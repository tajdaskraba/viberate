import { SocialLink } from "./social";

export interface Subgenre {
  id: number;
  slug: string;
  name: string;
}

export interface Genre {
  id: number;
  slug: string;
  name: string;
  subgenres: Subgenre[] | null;
}

export interface PopularityData {
  city: string;
  value: string;
}

export interface BeatportGenre {
  id: number,
  name: string
}

export interface Artist {
  data: {
    uuid: string;
    name: string;
    genre: Genre;
    subgenres: Subgenre[];
    country?: {
      name: string;
    }
    image: string;
    meta_image: string;
    social_links: SocialLink[];
    most_popular_in: PopularityData[];
    claimed: boolean;
    trending: boolean;
    beatport_genres: BeatportGenre[];
  }
}