import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {PreviewOffer} from '../types/previewOffer.ts';
import {City} from '../types/city.ts';
import {AppDispatch, State} from '../types/state.ts';
import {AxiosInstance} from 'axios';
import {APIRoute, AuthorizationStatus} from '../const.ts';
import {AuthData} from '../types/auth-data.ts';
import {UserData} from '../types/user-data.ts';
import {dropToken, saveToken} from '../services/token.ts';
import {Offer} from '../types/offer.ts';
import {Review} from '../types/review.ts';

export const setActiveCity = createAction<City>('setActiveCity');

export const setOffers = createAction<PreviewOffer[]>('setOffers');

export const setOffer = createAction<Offer>('setOffer');

export const setOffersNearby = createAction<PreviewOffer[]>('setOffersNearby');

export const setFavorites = createAction<PreviewOffer[]>('setFavorites');

export const setFavoriteStatus = createAction<{id: string; status: boolean}>('setFavoriteStatus');

export const setLoadingStatus = createAction<boolean>('setLoadingStatus');

export const setUserEmail = createAction<string>('setUserEmail');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<PreviewOffer[]>(APIRoute.Offers);
    dispatch(setLoadingStatus(false));
    dispatch(setOffers(data));
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffersNearby',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<PreviewOffer[]>(APIRoute.OffersNearby.replace(':id', offerId));
    dispatch(setOffersNearby(data));
  }
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (offerId, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer>(APIRoute.Offer.replace(':id', offerId));
    dispatch(setOffer(data));
    dispatch(fetchOffersNearbyAction(offerId));
  },
);

export const fetchFavoritesAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFavorites',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<PreviewOffer[]>(APIRoute.Favorite);
    dispatch(setFavorites(data));
  },
);

export const setOfferFavoriteStatus = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/markAsFavorite',
  async (offerId, {dispatch, extra: api}) => {
    await api.post(APIRoute.OfferFavoriteStatus.replace(':offerId', offerId).replace(':status', '1'));
    dispatch(setFavoriteStatus({ id: offerId, status: true }));
  }
);

export const removeOfferFavoriteStatus = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/unmarkAsFavorite',
  async (offerId, {dispatch, extra: api}) => {
    await api.post(APIRoute.OfferFavoriteStatus.replace(':offerId', offerId).replace(':status', '0'));
    dispatch(setFavoriteStatus({ id: offerId, status: false }));
  }
);

export const fetchReviewsAction = createAsyncThunk<Review[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<Review[]>(APIRoute.Reviews.replace(':offerId', offerId));
    return data;
  }
);

export const AddReviewAction = createAsyncThunk<Review, {id: string; comment: string; rating: number}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addReview',
  async ({id, comment, rating,}, {extra: api}) => {
    const {data} = await api.post<Review>(APIRoute.Reviews.replace(':offerId', id), {comment, rating});
    return data;
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserData>(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserEmail(data.email));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserEmail(email));
    dispatch(fetchOffersAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(fetchOffersAction());
  },
);
