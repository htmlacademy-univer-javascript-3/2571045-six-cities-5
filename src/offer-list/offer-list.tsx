import OfferCard from '../offer-card/offer-card.tsx';
import {Nullable} from 'vitest';
import {PreviewOffer} from '../types/previewOffer.ts';
import {useCallback} from 'react';

type OfferListProps = {
  offers: PreviewOffer[];
  onItemHover?: (id: Nullable<string>) => void;
}

function OfferList({offers, onItemHover}: OfferListProps): JSX.Element {

  const onChangeActiveCard = useCallback((id: Nullable<string>) => onItemHover?.call(null, id), [onItemHover]);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          cardType='CitiesCard'
          onChangeActiveCardId={onChangeActiveCard}
        />
      ))}
    </div>
  );
}

export default OfferList;
