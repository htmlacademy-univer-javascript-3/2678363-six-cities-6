import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../types/state';
import { AxiosInstance } from 'axios';
import { OfferId, Offers, Reviews } from '../types/offer';
import { loadOffers, setOffersLoadingStatus, loadOffer, loadNearOffers, loadReviews } from './action';

export const fetchOffersAction = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api}) => {
    dispatch(setOffersLoadingStatus(true));
    const {data} = await api.get<Offers>('/offers');
    dispatch(setOffersLoadingStatus(false));
    dispatch(loadOffers(data));
    return data;
  },
);

export const fetchOffer = createAsyncThunk<OfferId, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferId>(`/offers/${offerId}`);
    dispatch(loadOffer(data));
    return data;
  },
);

export const fetchNearOffers = createAsyncThunk<Offers, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(`/offers/${offerId}/nearby`);
    dispatch(loadNearOffers(data));
    return data;
  },
);

export const fetchReviews = createAsyncThunk<Reviews, string, {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, { dispatch, extra: api}) => {
    const { data } = await api.get<Reviews>(`/comments/${offerId}`);
    dispatch(loadReviews(data));
    return data;
  },
);
