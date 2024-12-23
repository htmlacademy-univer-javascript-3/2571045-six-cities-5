import {BookmarkTypes} from '../../types/offer.ts';
import {useCallback} from 'react';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {removeOfferFavoriteStatus, setOfferFavoriteStatus} from '../../store/action.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import cn from 'classnames';

type BookmarkProps = {
  offerId: string;
  isFavorite: boolean;
  type: BookmarkTypes;
  width: number;
  height: number;
}

const getClassNamePrefix = (cType: BookmarkTypes): string => {
  switch (cType) {
    case 'CitiesBookmark':
      return 'place-card';
    default:
      return 'offer';
  }
};

export function Bookmark({ offerId, isFavorite, type, width, height }: BookmarkProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const prefix = getClassNamePrefix(type);

  const handleBookmarkClick = useCallback(() => {
    if (authorizationStatus !== AuthorizationStatus.Auth) {
      navigate(AppRoute.Login);
      return;
    }

    if (isFavorite) {
      dispatch(removeOfferFavoriteStatus(offerId)).unwrap();
    } else {
      dispatch(setOfferFavoriteStatus(offerId)).unwrap();
    }
  }, [authorizationStatus, isFavorite, offerId, navigate, dispatch]);

  return (
    <button
      className={cn(`${prefix}__bookmark-button`, 'button', {[`${prefix}__bookmark-button--active`]: isFavorite })}
      type="button" onClick={handleBookmarkClick}
    >
      <svg className={`${prefix}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
    </button>
  );
}
