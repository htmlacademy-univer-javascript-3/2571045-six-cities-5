import {CitiesNames, City} from '../../types/city.ts';
import {CITIES} from './CITIES.ts';

type CitiesListProps = {
  cities: CitiesNames[];
  activeCity: { name: string };
  onCityChange: (city: City) => void;
};

export function CitiesList({ cities, activeCity, onCityChange }: CitiesListProps): JSX.Element {
  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city) => (
          <li className="locations__item" key={city}>
            <a
              className={`locations__item-link tabs__item ${city === activeCity.name ? 'tabs__item--active' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onCityChange(CITIES.find((newCity: City) => newCity.name === city) ?? CITIES[0]);
              }}
            >
              <span>{city}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
