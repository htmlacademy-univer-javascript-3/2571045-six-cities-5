import OfferCard from '../offer-card/offer-card.tsx';
import {Nullable} from 'vitest';
import {PreviewOffer} from '../types/previewOffer.ts';

type OfferNearbyProps = {
  offers: PreviewOffer[];
  onItemHover?: (id: Nullable<string>) => void;
}

export function OffersNearbyList({offers, onItemHover}: OfferNearbyProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          cardType='CitiesCard'
          onChangeActiveCardId={(id) => onItemHover?.call(null, id)}
        />
      ))}
    </div>
  );
}
