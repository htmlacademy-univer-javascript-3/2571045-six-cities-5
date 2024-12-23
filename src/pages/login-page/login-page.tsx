import React, {useEffect, useState} from 'react';
import { Header } from '../../components/header/header.tsx';
import {Link, useNavigate} from 'react-router-dom';
import {checkAuthAction, loginAction} from '../../store/action.ts';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {AppRoute, AuthorizationStatus} from '../../const.ts';
import {AuthData} from '../../types/auth-data.ts';

function LoginPage() {
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.authorizationStatus === AuthorizationStatus.Auth);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const activeCity = useAppSelector((state) => state.activeCity);

  useEffect(() => {
    appDispatch(checkAuthAction());
    if (isAuthenticated) {
      navigate(AppRoute.Root);
    }
  }, [appDispatch, isAuthenticated, navigate]);

  const isValidPassword = (pass: string) => /[a-zA-Z]/.test(pass) && /\d/.test(pass);

  const getAuthData : () => AuthData = () => ({
    login: email,
    password: password
  } as AuthData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError('Email is required');
      return;
    }

    if (!isValidPassword(password)) {
      setError('Password must contain at least one letter and one number');
      return;
    }

    appDispatch(loginAction(getAuthData()));
    navigate('/');
  };

  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="login__error">{error}</p>}
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link to={AppRoute.Root}>
                <span>{activeCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
