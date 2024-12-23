import OfferList from '../../components/offer-list/offer-list.tsx';
import {Nullable} from 'vitest';
import {useState} from 'react';
import {Map} from '../../components/map/map.tsx';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../hooks';
import {Point} from '../../types/point.ts';
import {setActiveCity} from '../../store/action.ts';
import {CitiesList} from '../../components/cities-list/cities-list.tsx';
import {Cities} from '../../const.ts';
import {City} from '../../types/city.ts';
import {SortingMode} from '../../types/sorting-mode.ts';
import {SortingModes} from '../../components/sorting-modes/sorting-modes.tsx';
import {Spinner} from '../../components/spinner/spinner.tsx';
import {Header} from '../../components/header/header.tsx';
import {selectOffers} from '../../store/reducer.ts';
import {EmptyOffersList} from '../../components/empty-offers-list/empty-offers-list.tsx';

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
  const activeOffers = useAppSelector(selectOffers);

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

  const isOffersDataLoading = useAppSelector((state) => state.isLoading);
  if (isOffersDataLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className={`page__main page__main--index ${filteredOffers.length === 0 && 'page__main--index-empty'}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList cities={Cities} activeCity={activeCity} onCityChange={handleCityChange} />
        </div>
        <div className="cities">
          { filteredOffers.length === 0 ? <EmptyOffersList currentCity={activeCity.name}/> :
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{filteredOffers.length} {getPlacesText(filteredOffers.length)} to stay in {activeCity.name} </b>
                <SortingModes onModeChange={handleSortModeChange}/>
                <OfferList offers={sortedOffers} onItemHover={setSelectedOfferId}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    city={activeCity}
                    points={points}
                    selectedPoint={points.find((p) => p.title === selectedOfferId)}
                  />
                </section>
              </div>
            </div>}
        </div>
      </main>
    </div>
  );
}

export default MainPage;
