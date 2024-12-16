﻿import MainPage from '../pages/main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../const.ts';
import LoginPage from '../pages/login-page/login-page.tsx';
import {OfferPage} from '../pages/offer-page/offer-page.tsx';
import NotFoundPage from '../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../pages/favorites-page/favorites-page.tsx';
import {ReviewsMock} from '../mocks/reviews.ts';
import {useAppSelector} from '../hooks';
import {Spinner} from '../spinner/spinner.tsx';

function App(): JSX.Element {
  const isOffersDataLoading = useAppSelector((state) => state.isLoading);

  if (isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

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
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage initialReviews={ReviewsMock} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
