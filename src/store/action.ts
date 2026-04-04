import { createAction } from '@reduxjs/toolkit';
import { OfferId, Offers, Reviews } from '../types/offer';
import { SortType } from '../types/sorting';

export const changeCity = createAction<string>('changeCity');

export const loadOffers = createAction<Offers>('loadOffers');

export const setSortType = createAction<SortType>('setSortType');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export const loadOffer = createAction<OfferId>('loadOffer');

export const loadNearOffers = createAction<Offers>('loadNearOffers');

export const loadReviews = createAction<Reviews>('loadReviews');
