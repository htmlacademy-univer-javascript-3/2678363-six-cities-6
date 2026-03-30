import { Offers } from '../types/offer';
import { State } from '../types/state';

export const getCity = (state: State): string => state.city;

export const getOffersList = (state: State): Offers => state.offersList;

export const getFilteredOffers = (state: State): Offers =>
  state.offersList.filter((offer) => offer.city.title === state.city);

export const getFilteredOffersCount = (state: State): number => getFilteredOffers(state).length;
