import {SortingMode} from '../../types/sorting-mode.ts';
import {useState} from 'react';
import {SORTING_MODE} from '../../const.ts';

type SortingModesProps = {
  onModeChange: (mode: SortingMode) => void;
}

export function SortingModes({ onModeChange }: SortingModesProps): JSX.Element {
  const [activeMode, setActiveMode] = useState<SortingMode>('Popular');
  const [isSortingModeVisible, setIsSortingModeVisible] = useState<boolean>(false);

  const handleClick = (mode: SortingMode) => {
    setActiveMode(mode);
    onModeChange(mode);
    setIsSortingModeVisible(false);
  };

  const handleArrow = () => {
    setIsSortingModeVisible(!isSortingModeVisible);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleArrow}>
        {activeMode}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortingModeVisible ? 'places__options--opened' : ''}`}>
        {SORTING_MODE.map((option) => (
          <li
            key={option}
            className={`places__option ${option === activeMode ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => handleClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
}
