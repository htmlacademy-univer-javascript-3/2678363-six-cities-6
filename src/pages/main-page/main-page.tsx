import { useState } from 'react';
import PlacesList from '../../components/places/places-list/places-list.tsx';
import Map from '../../components/map/map.tsx';
import { Variant } from '../../const.ts';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import { CITIES } from '../../const.ts';
import { useAppSelector } from '../../hooks/index.ts';
import { getCity, getSortedFilteredOffers } from '../../store/selectors.ts';
import { getPointsFromOffers } from '../../utils.ts';
import { Offer } from '../../types/offer.ts';
import SortingTypes from '../../components/sorting-types/sorting-types.tsx';
import Header from '../../components/header/header.tsx';

function MainPage(): JSX.Element {
  const currentCityName = useAppSelector(getCity);
  const sortedFilteredOffers = useAppSelector(getSortedFilteredOffers);

  const [selectedOffer, setSelectedOffer] = useState<Offer | null>(null);

  const currentCity = CITIES.find((city) => city.name === currentCityName) || CITIES[0];

  const points = getPointsFromOffers(sortedFilteredOffers);

  const handleListItemHover = (offer: Offer | null) => {
    setSelectedOffer(offer);
  };

  const selectedPoint = selectedOffer
    ? {
      id: selectedOffer.id,
      latitude: selectedOffer.location.latitude,
      longitude: selectedOffer.location.longitude
    }
    : null;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedFilteredOffers.length} {sortedFilteredOffers.length === 1 ? 'place' : 'places'} to stay in {currentCityName}
              </b>
              <SortingTypes />
              <PlacesList
                offers={sortedFilteredOffers}
                onSelect={handleListItemHover}
                variant={Variant.Cities}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={currentCity}
                  points={points}
                  selectedPoint={selectedPoint}
                  height={767}
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
