import PlaceCard from '../place-card/place-card';
import { Offer, OfferId, Offers } from '../../../types/offer';
import { useState } from 'react';
import { Variant } from '../../../const';

type PlacesListProps = {
  offers: Offers;
  onSelect?: (offer: Offer | OfferId | null) => void;
  variant?: Variant.Cities | Variant.NearPlaces;
}

function PlacesList({ offers, onSelect, variant = Variant.Cities }: PlacesListProps): JSX.Element {
  const [ , setActiveCard ] = useState<Offer | OfferId | null>(null);

  const handleSelect = (offer: Offer | OfferId | null) => {
    setActiveCard(offer);
    if (onSelect) {
      onSelect(offer);
    }
  };

  const getContainerClassName = (): string => {
    switch (variant) {
      case Variant.NearPlaces:
        return 'near-places__list places__list';
      case Variant.Cities:
      default:
        return 'cities__places-list places__list tabs__content';
    }
  };

  return (
    <div className={getContainerClassName()}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onSelect={handleSelect}
          variant={variant}
        />
      ))}
    </div>
  );
}

export default PlacesList;
