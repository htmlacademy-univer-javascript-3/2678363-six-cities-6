import { createAction } from '@reduxjs/toolkit';
import { OfferId, Offers, Reviews } from '../types/offer';
import { SortType } from '../types/sorting';
import { AppRoute, AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<string>('changeCity');

export const loadOffers = createAction<Offers>('loadOffers');

export const setSortType = createAction<SortType>('setSortType');

export const setOffersLoadingStatus = createAction<boolean>('setOffersLoadingStatus');

export const loadOffer = createAction<OfferId>('loadOffer');

export const loadNearOffers = createAction<Offers>('loadNearOffers');

export const loadReviews = createAction<Reviews>('loadReviews');

export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');

export const setUser = createAction<UserData | null>('setUser');

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');
