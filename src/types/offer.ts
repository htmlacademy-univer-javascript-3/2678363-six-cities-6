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
}
