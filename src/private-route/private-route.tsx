import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {useAppDispatch, useAppSelector} from '../hooks';
import {useEffect, useState} from 'react';
import {checkAuthAction} from '../store/action.ts';
import {Spinner} from '../spinner/spinner.tsx';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(checkAuthAction())
      .then(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
