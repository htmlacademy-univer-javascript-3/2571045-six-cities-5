import {FavoritesList} from '../../components/favorites-list/favorites-list.tsx';
import {Header} from '../../components/header/header.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

function FavoritesPage() {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link to={AppRoute.Root}>
          <img
            className="footer__logo"
            src="../../img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
