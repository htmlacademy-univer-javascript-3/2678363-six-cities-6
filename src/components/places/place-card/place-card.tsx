import { Link } from 'react-router-dom';
import { Offer, OfferId } from '../../../types/offer';
import { Variant } from '../../../const';


type PlaceCardProps = {
  offer: Offer;
  onSelect?: (offer: Offer | OfferId | null) => void;
  variant?: Variant.Cities | Variant.NearPlaces;
}

function PlaceCard({ offer, onSelect, variant = Variant.Cities }: PlaceCardProps): JSX.Element {
  const { id, previewImage, isPremium, price, title, type, isFavorite } = offer;

  const handleMouseEnter = () => {
    if (onSelect) {
      onSelect(offer);
    }
  };

  const handleMouseLeave = () => {
    if (onSelect) {
      onSelect(null);
    }
  };

  const getCardClassName = (): string => {
    switch (variant) {
      case Variant.NearPlaces:
        return 'near-places__card place-card';
      case Variant.Cities:
      default:
        return 'cities__card place-card';
    }
  };

  const getImageWrapperClassName = (): string => {
    switch (variant) {
      case Variant.NearPlaces:
        return 'near-places__image-wrapper place-card__image-wrapper';
      case Variant.Cities:
      default:
        return 'cities__image-wrapper place-card__image-wrapper';
    }
  };

  return (
    <article
      className={getCardClassName()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={getImageWrapperClassName()}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
