import { Review } from '../types/offer';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Review[] = [
  {
    id: 1,
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    name: 'Mike',
    rate: 4,
    date: 'May 21',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 2,
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    name: 'Helga',
    rate: 5,
    date: 'April 19',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  },
  {
    id: 3,
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    name: 'Maxine',
    rate: 5,
    date: 'August 27',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.'
  }
];
