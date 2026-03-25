import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { OFFERS } from './mocks/offers';
import { CITIES } from './mocks/cities';
import { POINTS } from './mocks/points';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={OFFERS}
        city={CITIES[3]}
        points={POINTS}
      />
    </Provider>
  </React.StrictMode>
);
