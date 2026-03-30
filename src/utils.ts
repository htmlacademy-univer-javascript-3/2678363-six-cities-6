import { Offer, Offers } from './types/offer';
import { Point, Points } from './types/map';

export const getPointFromOffer = (offer: Offer): Point => ({
  title: offer.title,
  lat: offer.location.lat,
  lng: offer.location.lng
});

export const getPointsFromOffers = (offers: Offers): Points =>
  offers.map((offer) => getPointFromOffer(offer));
