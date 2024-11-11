import MainPage from '../main-page/main-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.tsx';
import LoginPage from '../login-page/login-page.tsx';
import {OfferPage} from '../offer-page/offer-page.tsx';
import NotFoundPage from '../not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import FavoritesPage from '../favorites-page/favorites-page.tsx';
import {PreviewOffer} from '../types/previewOffer.ts';
import {Offer} from '../types/offer.ts';
import {ReviewsMock} from '../mocks/reviews.ts';
import {City} from '../types/city.ts';

type AppScreenProps = {
  offers : PreviewOffer[];
  fullOffers: Offer[];
  cities: City[];
}

function App({offers, fullOffers, cities} : AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage offers={offers} defaultCity={cities.find((c) => c.name === 'Amsterdam') ?? cities[0]}/>}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage offers={offers}/>
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Offer} element={<OfferPage offers={fullOffers} initialReviews={ReviewsMock}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
