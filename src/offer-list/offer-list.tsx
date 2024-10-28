import OfferCard from '../offer-card/offer-card.tsx';
import {useState} from 'react';
import {Nullable} from 'vitest';
import {PreviewOffer} from '../types/previewOffer.ts';

type OfferListProps = {
  offers: PreviewOffer[];
}

function OfferList({offers}: OfferListProps): JSX.Element {
  const [, setActiveCard] = useState<Nullable<string>>();

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          {...offer}
          key={offer.id}
          cardType='CitiesCard'
          onChangeActiveCardId={(id) => setActiveCard(id)}
        />
      ))}
    </div>
  );
}

export default OfferList;
