import { Offers } from '../types/offer';
import { CITIES } from './cities';

export const nearOffers: Offers = [
  {
    id: 5,
    picture: 'img/room.jpg',
    gallery: ['img/room.jpg'],
    isPremium: false,
    price: 80,
    title: 'Wood and stone place',
    type: 'Room',
    bedrooms: 1,
    adults: 2,
    isFavorite: true,
    rating: 4.2,
    goods: ['Wi-Fi', 'Heating'],
    host: {
      name: 'John',
      avatar: 'https://i.pravatar.cc/128?rnd=1',
      isPro: false
    },
    city: CITIES[3],
    location: {
      lat: 52.3809553943508,
      lng: 4.939309666406198
    }
  },
  {
    id: 6,
    picture: 'img/apartment-02.jpg',
    gallery: ['img/apartment-02.jpg'],
    isPremium: false,
    price: 132,
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    bedrooms: 2,
    adults: 4,
    isFavorite: false,
    rating: 4.5,
    goods: ['Wi-Fi', 'Kitchen', 'Washing machine'],
    host: {
      name: 'Emma',
      avatar: 'https://i.pravatar.cc/128?rnd=2',
      isPro: true
    },
    city: CITIES[3],
    location: {
      lat: 52.3909553943508,
      lng: 4.929309666406198
    }
  },
  {
    id: 7,
    picture: 'img/apartment-03.jpg',
    gallery: ['img/apartment-03.jpg'],
    isPremium: true,
    price: 180,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    bedrooms: 3,
    adults: 6,
    isFavorite: false,
    rating: 4.8,
    goods: ['Wi-Fi', 'Kitchen', 'Dishwasher', 'Cabel TV'],
    host: {
      name: 'Michael',
      avatar: 'https://i.pravatar.cc/128?rnd=3',
      isPro: true
    },
    city: CITIES[3],
    location: {
      lat: 52.3609553943508,
      lng: 4.85309666406198
    }
  }
];
