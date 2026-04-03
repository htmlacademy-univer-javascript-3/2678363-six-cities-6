import { OfferId, Offers, Reviews } from '../types/offer';
import { SortType } from '../types/sorting';
import { State } from '../types/state';

export const getCity = (state: State): string => state.city;

export const getOffersList = (state: State): Offers => state.offersList;

export const getFilteredOffers = (state: State): Offers =>
  state.offersList.filter((offer) => offer.city.name === state.city);

export const getFilteredOffersCount = (state: State): number => getFilteredOffers(state).length;

export const getSortType = (state: State): SortType => state.sortType;

const sortOffers = (offers: Offers, sortType: string): Offers => {
  switch (sortType) {
    case 'Price: low to high':
      return [...offers].sort((a, b) => a.price - b.price);
    case 'Price: high to low':
      return [...offers].sort((a, b) => b.price - a.price);
    case 'Top rated first':
      return [...offers].sort((a, b) => b.rating - a.rating);
    case 'Popular':
    default:
      return [...offers];
  }
};

export const getSortedFilteredOffers = (state: State): Offers => {
  const filteredOffers = getFilteredOffers(state);
  return sortOffers(filteredOffers, state.sortType);
};

export const getIsOffersLoading = (state: State): boolean => state.isOffersLoading;

export const getCurrentOffer = (state: State): OfferId | null => state.currentOffer;

export const getNearOffers = (state: State): Offers => state.nearOffers;

export const getReviews = (state: State): Reviews => state.reviews;
