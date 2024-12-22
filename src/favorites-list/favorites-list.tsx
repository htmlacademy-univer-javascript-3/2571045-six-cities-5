import {useAppDispatch, useAppSelector} from '../hooks';
import {Cities} from '../const.ts';
import {CityFavorites} from './city-favorites.tsx';
import {CitiesNames} from '../types/city.ts';
import {fetchFavoritesAction} from '../store/action.ts';
import {useEffect} from 'react';

export function FavoritesList() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return (
    <ul className="favorites__list">
      {
        Cities.map((currentCity) => (
          <CityFavorites
            key={currentCity}
            city={currentCity as CitiesNames}
            cityOffers={offers.filter((offer) => offer.city.name === currentCity)}
          />
        ))
      }
    </ul>
  );
}
