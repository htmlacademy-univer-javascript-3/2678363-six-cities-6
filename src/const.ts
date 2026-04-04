import { City } from './types/map';

export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

export enum Variant {
  Cities = 'cities',
  NearPlaces = 'near-places'
}

export const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
export const REQUEST_TIMEOUT = 5000;

export const CITIES: City[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.856663,
      longitude: 2.350556,
      zoom: 11
    }
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.939590,
      longitude: 6.959922,
      zoom: 12
    }
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.850283,
      longitude: 4.352131,
      zoom: 11
    }
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.376955,
      longitude: 4.893096,
      zoom: 11
    }
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.552185,
      longitude: 9.999782,
      zoom: 12
    }
  },
  {

    name: 'Dusseldorf',
    location: {
      latitude: 51.226458,
      longitude: 6.775552,
      zoom: 13
    }
  }
];
