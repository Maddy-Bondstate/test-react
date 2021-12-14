/* eslint-disable import/no-cycle */
/* SETTINGS */
export const CHANGE_LOCALE = 'CHANGE_LOCALE';

/* AUTH */
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';
export const REGISTER_USER = 'REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';
export const LOGOUT_USER = 'LOGOUT_USER';
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';

/* MENU */
export const MENU_SET_CLASSNAMES = 'MENU_SET_CLASSNAMES';
export const MENU_CONTAINER_ADD_CLASSNAME = 'MENU_CONTAINER_ADD_CLASSNAME';
export const MENU_CLICK_MOBILE_MENU = 'MENU_CLICK_MOBILE_MENU';
export const MENU_CHANGE_DEFAULT_CLASSES = 'MENU_CHANGE_DEFAULT_CLASSES';
export const MENU_CHANGE_HAS_SUB_ITEM_STATUS =
  'MENU_CHANGE_HAS_SUB_ITEM_STATUS';

/* SPACE */
export const SPACE_GET_LOCATION_LIST = 'SPACE_GET_LOCATION_LIST';
export const SPACE_GET_LOCATION_LIST_SUCCESS ='SPACE_GET_LOCATION_LIST_SUCCESS';
export const SPACE_GET_LOCATION_LIST_ERROR = 'SPACE_GET_LOCATION_LIST_ERROR';

/* SINGLE SPACE - DETAILS */
  export const SINGLE_SPACE = 'SINGLE_SPACE';
  export const SINGLE_SPACE_SUCCESS ='SINGLE_SPACE_SUCCESS';
  export const SINGLE_SPACE_ERROR = 'SINGLE_SPACE_ERROR';  

/* ADD FLOOR */
export const ADD_FLOOR = 'ADD_FLOOR';
export const ADD_FLOOR_SUCCESS = 'ADD_FLOOR_SUCCESS';
export const ADD_FLOOR_ERROR = 'ADD_FLOOR_ERROR';

/* ADD LOCATION */
export const ADD_LOCATION = 'ADD_LOCATION';
export const ADD_LOCATION_SUCCESS = 'ADD_LOCATION_SUCCESS';
export const ADD_LOCATION_ERROR = 'ADD_LOCATION_ERROR';


export * from './menu/actions';
export * from './settings/actions';
export * from './auth/actions';
export * from './space/actions';
