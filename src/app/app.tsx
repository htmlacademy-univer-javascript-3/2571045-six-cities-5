import MainPage from '../main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.tsx';
import LoginPage from '../login-page/login-page.tsx';
import {OfferPage} from '../offer-page/offer-page.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../favorites-page/favorites-page.tsx';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage offerCardsCount={5}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
