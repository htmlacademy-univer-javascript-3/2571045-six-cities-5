import {ReviewForm} from '../../review-form/review-form.tsx';
import {useEffect} from 'react';
import {ReviewCard} from '../../review-card/review-card.tsx';
import {useNavigate, useParams} from 'react-router-dom';
import {Map} from '../../map/map.tsx';
import {OffersNearbyList} from '../../offers-nearby-list/offers-nearby-list.tsx';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AddReviewAction, fetchOfferAction, fetchReviewsAction} from '../../store/action.ts';
import {Spinner} from '../../spinner/spinner.tsx';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {Header} from '../../header/header.tsx';
import {PreviewOffer} from '../../types/previewOffer.ts';
import {Bookmark} from '../../bookmark/bookmark.tsx';
import {selectNearbyOffers} from '../../store/selectors.ts';

export function OfferPage(){
  const params = useParams();
  const offerId = params.id;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const reviews = useAppSelector((state) => state.reviews);
  const offersNearby = useAppSelector(selectNearbyOffers).slice(0, 3);
  const offer = useAppSelector((state) => state.offer);
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const addReview = (newReview: {comment: string; rating: number}) => {
    const id = offer?.id;
    if (id){
      dispatch(AddReviewAction({...newReview, id}));
    }
  };

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId))
        .unwrap()
        .catch(() => navigate(AppRoute.NotFound))
        .then(() => dispatch(fetchReviewsAction(offerId)));
    }
  }, [dispatch, navigate, offerId]);

  if (!offer) {
    return (<Spinner />);
  }

  const points = offersNearby
    .concat(offer as PreviewOffer)
    .map((o) => ({ title: o.id, lat: o.location.latitude, lng: o.location.longitude }));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                offer.images.map((image) =>
                  (
                    <div className="offer__image-wrapper" key={image}>
                      <img className="offer__image" src={image} alt="Photo studio" />
                    </div>)
                )
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer.isPremium &&
                <div className="offer__mark">
                  <span>Premium</span>
                </div>}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer.title}
                </h1>
                <Bookmark height={33} isFavorite={offer.isFavorite} offerId={offer.id} type="OfferBookmark" width={31} />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${offer.rating * 20}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer.rating.toFixed(1)}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">{offer.type}</li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{offer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => <li key={good} className="offer__inside-item">{good}</li>)}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  <span className="offer__user-status">{offer.host.isPro && 'Pro'}</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{reviews.length}</span>
                </h2>
                <ul className="reviews__list">
                  {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
                </ul>
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm onSubmit={addReview} />}
              </section>
            </div>
          </div>
          <Map
            city={offer.city}
            points={points}
            selectedPoint={points.find((p) => p.title === offer.id)}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersNearbyList offers={offersNearby} />
          </section>
        </div>
      </main>
    </div>
  );
}
