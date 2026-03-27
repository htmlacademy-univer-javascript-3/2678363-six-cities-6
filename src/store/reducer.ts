import { createReducer } from '@reduxjs/toolkit';
import { OFFERS } from '../mocks/offers';
import { changeCity, fillPlacesList } from './action';
import { State } from '../types/state';

const initialState: State = {
  city: 'Paris',
  offersList: OFFERS
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fillPlacesList, (state, action) => {
      state.offersList = action.payload;
    });
});

export {reducer};
