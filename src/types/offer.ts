import { City } from './map';

export type Host = {
  name: string;
  avatar: string;
  isPro: boolean;
}

export type Offer = {
  id: number;
  picture: string;
  gallery: string[];
  isPremium: boolean;
  price: number;
  title: string;
  type: string;
  bedrooms: number;
  adults: number;
  isFavorite: boolean;
  rating: number;
  goods: string[];
  host: Host;
  city: City;
  location: {
    lat: number;
    lng: number;
  };
}

export type Offers = Offer[];

export type Review = {
  id: number;
  avatar: string;
  name: string;
  rate: number;
  date: string;
  description: string;
}
