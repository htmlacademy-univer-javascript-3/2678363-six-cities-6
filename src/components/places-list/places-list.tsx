import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type PlacesListProps = {
  offers: Offer[];
}

function PlacesList({ offers }: PlacesListProps): JSX.Element {
  const [ activeCard, setActiveCard ] = useState<Offer | null>(null);

  const handleCardMouseEnter = (offer: Offer) => {
    setActiveCard(offer);
  };

  const handleCardMouseLeave = () => {
    setActiveCard(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default PlacesList;
