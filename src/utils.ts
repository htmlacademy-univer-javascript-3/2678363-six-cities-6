import { Offer, Offers } from './types/offer';
import { Point, Points } from './types/map';

export const getPointFromOffer = (offer: Offer): Point => ({
  id: offer.id,
  latitude: offer.location.latitude,
  longitude: offer.location.longitude
});

export const getPointsFromOffers = (offers: Offers): Points =>
  offers.map((offer) => getPointFromOffer(offer));
