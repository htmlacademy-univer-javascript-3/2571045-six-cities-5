import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {OffersMock} from './mocks/offers.ts';
import {OfferMocks} from './mocks/offer.ts';
import {CitiesMock} from './mocks/cities.ts';
import {Provider} from 'react-redux';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offers={OffersMock} fullOffers={OfferMocks} cities={CitiesMock}/>
    </Provider>
  </React.StrictMode>
);
