import {useAppDispatch, useAppSelector} from '../../hooks';
import {Cities} from '../../const.ts';
import {CityFavorites} from './city-favorites.tsx';
import {fetchFavoritesAction} from '../../store/action.ts';
import {useEffect} from 'react';
import {selectFavorites} from '../../store/selectors.ts';
import {EmptyFavoritesList} from '../emtpy-favorites/empty-favorites.tsx';

export function FavoritesList() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (offers.length === 0) {
    return <EmptyFavoritesList />;
  }

  return (
    <ul className="favorites__list">
      {
        Cities.map((currentCity) => {
          const cityOffers = offers.filter((offer) => offer && offer.city.name === currentCity);

          if (cityOffers.length === 0) {
            return null;
          }

          return (
            <CityFavorites
              key={currentCity}
              city={currentCity}
              cityOffers={cityOffers}
            />
          );
        })
      }
    </ul>
  );
}
