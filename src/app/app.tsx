﻿import MainPage from '../main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.tsx';
import LoginPage from '../login-page/login-page.tsx';
import {OfferPage} from '../offer-page/offer-page.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../favorites-page/favorites-page.tsx';
import {Offer} from '../types/offer.ts';
import {ReviewsMock} from '../mocks/reviews.ts';
import {useAppDispatch} from '../hooks';
import {setOffers} from '../store/action.ts';
import {OffersMock} from '../mocks/offers.ts';

type AppScreenProps = {
  fullOffers: Offer[];
}

function App({fullOffers} : AppScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(setOffers(OffersMock));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage initialReviews={ReviewsMock} offers={fullOffers} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;