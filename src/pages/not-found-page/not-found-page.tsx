import { Link } from 'react-router-dom';
import './not-found-page.css';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <img
          src="https://i.pinimg.com/736x/3b/87/ea/3b87eaaaee6b206735d29882f0d7dfb4.jpg"
          alt="Duck"
          className="not-found__image"
        />
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Страница не найдена</h2>
        <Link to="/" className="not-found__btn">
          На главную
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
