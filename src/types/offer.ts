import { City, Location } from './map';

export type Host = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type Offer = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type Offers = Offer[];

export type OfferId = Offer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}

export type Review = {
  id: string;
  date: string;
  user: Host;
  comment: string;
  rating: number;
}

export type Reviews = Review[];
