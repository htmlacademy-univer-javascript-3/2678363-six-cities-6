import { store } from '../store';
import { Offers } from './offer';
import { SortType } from './sorting';

export type State = {
  city: string;
  offersList: Offers;
  sortType: SortType;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
