import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortType } from '../../store/selectors';
import { setSortType } from '../../store/action';
import { SortOptions } from '../../types/sort-option';

const sortOptions: SortOptions = [
  { type: 'Popular', label: 'Popular' },
  { type: 'Price: low to high', label: 'Price: low to high' },
  { type: 'Price: high to low', label: 'Price: high to low' },
  { type: 'Top rated first', label: 'Top rated first' }
];

function SotingType(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentSortType = useAppSelector(getSortType);
  const [isOpen, setIsOpen] = useState(false);

  const handleSortClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSortChange = (sortType: string) => {
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

export default SotingType;
