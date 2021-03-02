import {environment} from '../../environments/environment';

export const API_ENDPOINT_URL = environment.BASE_URL;

export const API = {
  SEARCH_LIST: API_ENDPOINT_URL + '/businessList',
};

export const EStatusCode = {
  OK: 200,
  CREATED: 201,
  UNAUTHORIZED: 401,
  FAILURE: 404,
};
