import { AuthorizationStatus } from '../const';
import { store } from '../store';
import { OfferId, Offers, Reviews } from './offer';
import { SortType } from './sorting';
import { UserData } from './user-data';

export type State = {
  city: string;
  offersList: Offers;
  sortType: SortType;
  isOffersLoading: boolean;
  currentOffer: OfferId | null;
  nearOffers: Offers;
  reviews: Reviews;
  authorizationStatus: AuthorizationStatus;
  user: UserData | null;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
