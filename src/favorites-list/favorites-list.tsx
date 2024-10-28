import OfferCard from '../offer-card/offer-card.tsx';
import {PreviewOffer} from '../types/previewOffer.ts';

type FavoritesListProps = {
  offers: PreviewOffer[];
}

export function FavoritesList({offers}: FavoritesListProps) {
  return (
    <ul className="favorites__list">
      <li className="favorites__locations-items">
        <div className="favorites__locations locations locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </div>
        <div className="favorites__places">
          {offers.filter((offer) => offer.city.name === 'Amsterdam').map((offer) => (
            <OfferCard
              {...offer}
              key={offer.id}
              cardType='FavoritesCard'
            />
          ))}
        </div>
      </li>
    </ul>
  );
}
