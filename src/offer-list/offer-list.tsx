import OfferCard from '../offer-card/offer-card.tsx';
import {Nullable} from 'vitest';
import {PreviewOffer} from '../types/previewOffer.ts';

type OfferListProps = {
  offers: PreviewOffer[];
  onItemHover?: (id: Nullable<string>) => void;
}

function OfferList({offers, onItemHover}: OfferListProps): JSX.Element {

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          {...offer}
          key={offer.id}
          cardType='CitiesCard'
          onChangeActiveCardId={(id) => onItemHover?.call(null, id)}
        />
      ))}
    </div>
  );
}

export default OfferList;
