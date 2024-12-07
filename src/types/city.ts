import {Location} from './location.ts';

export type City = {
  name: CitiesNames;
  location: Location;
};

export type CitiesNames = 'Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf';
