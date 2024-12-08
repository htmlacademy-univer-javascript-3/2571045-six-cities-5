import OfferList from '../offer-list/offer-list.tsx';
import {Nullable} from 'vitest';
import {useState} from 'react';
import {Map} from '../map/map.tsx';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../hooks';
import {Point} from '../types/point.ts';
import {setActiveCity} from '../store/action.ts';
import {CitiesList} from '../cities-list/cities-list.tsx';
import {Cities} from '../const.tsx';
import {CitiesMock} from '../mocks/cities.ts';
import {City} from '../types/city.ts';
import {SortingMode} from '../types/sorting-mode.ts';
import {SortingModes} from '../sorting-modes/sorting-modes.tsx';
import {Spinner} from '../spinner/spinner.tsx';

function MainPage(): JSX.Element {
  function getPlacesText(count: number): string {
    if (count === 1) {
      return 'place';
    } else {
      return 'places';
    }
  }

  const [selectedOfferId, setSelectedOfferId] = useState<Nullable<string>>();
  const [sortingMode, setSortingMode] = useState<SortingMode>('Popular');
  const dispatch = useDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const activeOffers = useAppSelector((state) => state.offers);

  const filteredOffers = activeOffers.filter((offer) => offer.city.name === activeCity.name);
  const sortedOffers = filteredOffers.sort((first, second) => {
    switch (sortingMode) {
      case 'Price: high to low':
        return second.price - first.price;
      case 'Price: low to high':
        return first.price - second.price;
      case 'Top rated first':
        return second.rating - first.rating;
      default:
        return 0;
    }
  });

  const points: Point[] = filteredOffers.map((offer) => ({
    title: offer.id,
    lat: offer.location.latitude,
    lng: offer.location.longitude
  }));

  const handleCityChange = (city: City) => {
    dispatch(setActiveCity(city));
  };

  const handleSortModeChange = (mode: SortingMode) => {
    setSortingMode(mode);
  };

  const isOffersDataLoading = useAppSelector((state) => state.isOffersLoadingStatus);
  if (isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={Cities} activeCity={activeCity} onCityChange={handleCityChange} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} {getPlacesText(filteredOffers.length)} to stay in {activeCity.name}</b>
              <SortingModes onModeChange={handleSortModeChange} />
              <OfferList offers = {sortedOffers} onItemHover={setSelectedOfferId}/>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={CitiesMock.find((city) => city.name === activeCity.name) ?? CitiesMock[0]}
                  points={points}
                  selectedPoint={points.find((p) => p.title === selectedOfferId)}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
