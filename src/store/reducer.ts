import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../mocks/cities';
import { OFFERS } from '../mocks/offers';
import { changeCity } from './action';

const initialState = {
  city: CITIES[3].title,
  offersList: OFFERS
};

const newCity = 'Paris';

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state) => {
      state.city = newCity;
    });
});

export {reducer};
