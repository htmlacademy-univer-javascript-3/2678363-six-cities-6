import { CITIES } from '../../mocks/cities';
import { getCity } from '../../store/selectors';
import { changeCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks';

function CitiesList(): JSX.Element {
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector(getCity);

  const handleCityChange = (city: string) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li key={city.title} className="locations__item">
              <a className={`locations__item-link tabs__item ${
                currentCity === city.title ? 'tabs__item--active' : ''
              }`}
              href="#"
              onClick={(evt) => {
                evt.preventDefault();
                handleCityChange(city.title);
              }}
              >
                <span>{city.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CitiesList;
