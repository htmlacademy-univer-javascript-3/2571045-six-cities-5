import {useAppDispatch, useAppSelector} from '../../hooks';
import {Cities} from '../../const.ts';
import {CityFavorites} from './city-favorites.tsx';
import {fetchFavoritesAction} from '../../store/action.ts';
import {useEffect} from 'react';
import {selectFavorites} from '../../store/selectors.ts';

export function FavoritesList() {
  const dispatch = useAppDispatch();
  const offers = useAppSelector(selectFavorites);

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  return (
    <ul className="favorites__list">
      {
        Cities.map((currentCity) => (
          <CityFavorites
            key={currentCity}
            city={currentCity}
            cityOffers={offers.filter((offer) => offer && offer.city.name === currentCity)}
          />
        ))
      }
    </ul>
  );
}
