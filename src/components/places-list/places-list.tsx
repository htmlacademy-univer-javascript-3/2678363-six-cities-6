import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useState } from 'react';

type PlacesListProps = {
  offers: Offer[];
  onSelect?: (offer: Offer | null) => void;
}

function PlacesList({ offers, onSelect }: PlacesListProps): JSX.Element {
  const [ , setActiveCard ] = useState<Offer | null>(null);

  const handleSelect = (offer: Offer | null) => {
    setActiveCard(offer);
    if (onSelect) {
      onSelect(offer);
    }
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
}

export default PlacesList;
