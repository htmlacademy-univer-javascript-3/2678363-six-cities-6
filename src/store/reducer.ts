import { createReducer } from '@reduxjs/toolkit';
import {
  changeCity,
  loadOffers,
  setSortType,
  setOffersLoadingStatus,
  loadOffer,
  loadNearOffers,
  loadReviews,
  requireAuthorization,
  setUser
} from './action';
import { State } from '../types/state';
import { SortType } from '../types/sorting';
import { AuthorizationStatus } from '../const';

const initialState: State = {
  city: 'Paris',
  offersList: [],
  sortType: SortType.Popular,
  isOffersLoading: false,
  currentOffer: null,
  nearOffers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offersList = action.payload;
    })
    .addCase(setSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(setOffersLoadingStatus, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action)=> {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUser, (state, action) => {
      state.user = action.payload;
    });
});

export { reducer };
