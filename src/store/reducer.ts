import { createReducer } from '@reduxjs/toolkit';
import { changeCity, loadOffers, setSortType, setOffersLoadingStatus, loadOffer, loadNearOffers, loadReviews } from './action';
import { State } from '../types/state';
import { SortType } from '../types/sorting';

const initialState: State = {
  city: 'Paris',
  offersList: [],
  sortType: SortType.Popular,
  isOffersLoading: false,
  currentOffer: null,
  nearOffers: [],
  reviews: []
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
    });
});

export { reducer };
