import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Places } from './const';
import { offers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      placesCount={Places.PlacesCount}
      offers={offers}
    />
  </React.StrictMode>
);
