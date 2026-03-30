import { store } from '../store';
import { Offers } from './offer';

export type State = {
  city: string;
  offersList: Offers;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
