﻿import {useAppSelector} from '../hooks';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {Link} from 'react-router-dom';

export function Header(){
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const email = useAppSelector((state) => state.email);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          <nav className="header__nav">
            {authorizationStatus === AuthorizationStatus.Auth
              ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__user-name user__name">{email}</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link to={AppRoute.Login}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
              :
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <Link to={AppRoute.Login}>
                    <span className="header__signout">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}
