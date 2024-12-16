import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../const.ts';
import {useAppDispatch, useAppSelector} from '../hooks';
import {checkAuthAction} from '../store/action.ts';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const dispatch = useAppDispatch();
  const {children} = props;
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    dispatch(checkAuthAction());
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
