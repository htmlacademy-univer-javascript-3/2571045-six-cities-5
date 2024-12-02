﻿import OfferList from '../offer-list/offer-list.tsx';
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

function MainPage(): JSX.Element {
  function getPlacesText(count: number): string {
    if (count === 1) {
      return 'place';
    } else {
      return 'places';
    }
  }

  const [selectedOfferId, setSelectedOfferId] = useState<Nullable<string>>();
  const dispatch = useDispatch();
  const activeCity = useAppSelector((state) => state.activeCity);
  const activeOffers = useAppSelector((state) => state.offers);

  const filteredOffers = activeOffers.filter((offer) => offer.city.name === activeCity.name);

  const points: Point[] = filteredOffers.map((offer) => ({
    title: offer.id,
    lat: offer.location.latitude,
    lng: offer.location.longitude
  }));

  const handleCityChange = (city: City) => {
    dispatch(setActiveCity(city));
  };

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
              Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li
                    className="places__option places__option--active"
                    tabIndex={0}
                  >
                    Popular
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: low to high
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Price: high to low
                  </li>
                  <li className="places__option" tabIndex={0}>
                    Top rated first
                  </li>
                </ul>
              </form>
              <OfferList offers = {filteredOffers} onItemHover={setSelectedOfferId}/>
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
