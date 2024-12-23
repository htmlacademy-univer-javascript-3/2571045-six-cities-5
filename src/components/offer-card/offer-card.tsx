import {Link, useNavigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {Nullable} from 'vitest';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {PreviewOffer} from '../../types/previewOffer.ts';
import {memo, useCallback} from 'react';
import {removeOfferFavoriteStatus, setOfferFavoriteStatus} from '../../store/action.ts';
import {CardTypes} from '../../types/offer.ts';
import cn from 'classnames';
import {Bookmark} from '../bookmark/bookmark.tsx';

type OfferCardProps = {
  offer: PreviewOffer;
  cardType: CardTypes;
  onChangeActiveCardId?: (id: Nullable<string>) => void;
};

const getCardClassName = (cType: CardTypes): string => {
  switch (cType) {
    case 'CitiesCard':
      return 'cities__card';
    case 'FavoritesCard':
      return 'favorites__card';
    default:
      return 'near-places__card';
  }
};

function OfferCardInternal({offer, cardType, onChangeActiveCardId}: OfferCardProps): JSX.Element {
  const urlSingleOffer = AppRoute.Offer.replace(':id', offer.id);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  useCallback(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    if (offer.isFavorite) {
      dispatch(removeOfferFavoriteStatus(offer.id));
    } else {
      dispatch(setOfferFavoriteStatus(offer.id));
    }
  }, [authorizationStatus, offer.isFavorite, offer.id, navigate, dispatch]);
  return (
    <article
      className={cn(getCardClassName(cardType), 'place-card')}
      onMouseOver={() => onChangeActiveCardId?.call(null, offer.id)}
      onMouseLeave={() => onChangeActiveCardId?.call(null, null)}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={cardType === 'NearbyCard' ? 'near-places__image-wrapper place-card__image-wrapper' : 'cities__image-wrapper place-card__image-wrapper'}>
        <Link to={urlSingleOffer}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <Bookmark height={19} isFavorite={offer.isFavorite} offerId={offer.id} type="CitiesBookmark" width={18} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${offer.rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={urlSingleOffer}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

const OfferCard = memo(OfferCardInternal);

export default OfferCard;
