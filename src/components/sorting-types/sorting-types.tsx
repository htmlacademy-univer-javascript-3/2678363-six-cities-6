import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortType } from '../../store/selectors';
import { setSortType } from '../../store/action';
import { SortOptions, SortType } from '../../types/sorting';

const sortOptions: SortOptions = [
  { type: SortType.Popular, label: 'Popular' },
  { type: SortType.PriceLowToHigh, label: 'Price: low to high' },
  { type: SortType.PriceHighToLow, label: 'Price: high to low' },
  { type: SortType.TopRatedFirst, label: 'Top rated first' }
];

function SortingTypes(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector(getSortType);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (sortType: SortType) => {
    dispatch(setSortType(sortType));
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortClick}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`}>
        {sortOptions.map((option) => (
          <li
            key={option.type}
            className="places__option places__option--active"
            tabIndex={0}
            onClick={() => handleSortChange(option.type)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default SortingTypes;
