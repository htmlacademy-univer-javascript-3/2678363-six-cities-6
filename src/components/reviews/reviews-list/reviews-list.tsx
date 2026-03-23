import { reviews } from '../../../mocks/reviews';
import ReviewItem from '../review-item/review-item';

function ReviewsList(): JSX.Element {
  return(
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
  );
}

export default ReviewsList;
