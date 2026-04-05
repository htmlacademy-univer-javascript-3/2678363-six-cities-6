import { useParams } from 'react-router-dom';
import NotFoundPage from '../not-found-page/not-found-page';
import { Variant } from '../../const';
import Header from '../../components/header/header';
import ReviewForm from '../../components/reviews/review-form/review-form';
import ReviewsList from '../../components/reviews/reviews-list/reviews-list';
import { CITIES } from '../../const';
import Map from '../../components/map/map';
import PlacesList from '../../components/places/places-list/places-list';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getCurrentOffer, getNearOffers, getReviews } from '../../store/selectors';
import { fetchNearOffers, fetchOffer, fetchReviews } from '../../store/api-actions';
import { useEffect } from 'react';
import { Point, Points } from '../../types/map';

function OfferPage(): JSX.Element {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  const currentOffer = useAppSelector(getCurrentOffer);

  const nearOffers = useAppSelector(getNearOffers);
  const reviews = useAppSelector(getReviews);

  useEffect(() => {
    if (id) {
      dispatch(fetchOffer(id));
      dispatch(fetchNearOffers(id));
      dispatch(fetchReviews(id));
    }
  }, [dispatch, id]);

  if (!currentOffer) {
    return <NotFoundPage />;
  }

  const {title, images, type, price, bedrooms, maxAdults, isFavorite, rating, goods, host, location, city} = currentOffer;

  const currentCity = CITIES.find((item) => item.name === city.name) || CITIES[0];

  const currentPoint: Point = {
    id: id,
    latitude: location.latitude,
    longitude: location.longitude,
  };

  const nearPoints: Points = nearOffers.slice(0, 3).map((offer) => ({
    id: offer.id,
    latitude: offer.location.latitude,
    longitude: offer.location.longitude,
  }));

  const points: Points = [...nearPoints, currentPoint];

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.slice(0, 6).map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img className="offer__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <button
                  className={`offer__bookmark-button button ${
                    isFavorite ? 'offer__bookmark-button--active' : ''
                  }`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms === 1 ? '1 Bedroom' : `${bedrooms} Bedrooms`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {maxAdults === 1 ? 'Max 1 adult' : `Max ${maxAdults} adults`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''}  user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews}/>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <Map
              city={currentCity}
              points={points}
              selectedPoint={currentPoint}
              height={579}
              width={1144}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <PlacesList
              offers={nearOffers.slice(0, 3)}
              variant={Variant.NearPlaces}
            />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
