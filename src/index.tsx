import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {OfferMocks} from './mocks/offer.ts';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchOffers} from './store/action.ts';

store.dispatch(fetchOffers());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App fullOffers={OfferMocks} />
    </Provider>
  </React.StrictMode>
);
