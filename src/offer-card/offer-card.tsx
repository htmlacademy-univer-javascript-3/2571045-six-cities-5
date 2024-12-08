﻿import {OfferTypes} from '../types/offer.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../const.ts';
import {Nullable} from 'vitest';

type CardTypes = 'CitiesCard' | 'FavoritesCard' | 'NearbyCard';
type OfferCardProps = {
  id: string;
  title: string;
  type: OfferTypes;
  price: number;
  isPremium: boolean;
  rating: number;
  previewImage: string;
  cardType: CardTypes;
  onChangeActiveCardId?: (id: Nullable<string>) => void;
};

export default function OfferCard({id, isPremium, previewImage, price, rating, title, type, cardType, onChangeActiveCardId}: OfferCardProps): JSX.Element {
  const urlSingleOffer = AppRoute.Offer.replace(':id', id);

  const getCardClassName = (cType: CardTypes): string => {
    switch (cType) {
      case 'CitiesCard':
        return 'cities__card place-card';
      case 'FavoritesCard':
        return 'favorites__card place-card';
      default:
        return 'near-places__card place-card';
    }
  };

  return (
    <article
      className={getCardClassName(cardType)}
      onMouseOver={() => onChangeActiveCardId?.call(null, id)}
      onMouseLeave={() => onChangeActiveCardId?.call(null, null)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={cardType === 'NearbyCard' ? 'near-places__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <Link to={urlSingleOffer}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={urlSingleOffer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
