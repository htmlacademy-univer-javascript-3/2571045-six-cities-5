import OfferCard from '../offer-card/offer-card.tsx';
import {PreviewOffer} from '../../types/previewOffer.ts';
import {CitiesNames} from '../../types/city.ts';

type CityFavoritesProps = {
  city: CitiesNames;
  cityOffers: PreviewOffer[];
}

export function CityFavorites({city, cityOffers}: CityFavoritesProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <div className="locations__item-link">
            <span>{city}</span>
          </div>
        </div>
      </div>
      <div className="favorites__places">
        {cityOffers.map((offer) => (
          <OfferCard
            offer={offer}
            key={offer.id}
            cardType='FavoritesCard'
          />
        ))}
      </div>
    </li>
  );
}
