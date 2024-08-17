// clientThunks.js
import { setUserAction,
    setAdressListAction,
    setCreditCardsAction,
    setRolesAction,
    setThemeAction,
    setLanguageAction,

 } from './clientActions';

export const fetchRoles = () => async (dispatch) => {
  // Replace this with actual API call
  const response = await fetch('/api/roles');
  const roles = await response.json();
  dispatch(setUserAction({ roles }));
  return roles;
};

export const fetchUser = () => async (dispatch) => {
  const response = await fetch('/api/user');
  const userData = await response.json();
  dispatch(setUserAction({ userData }));
  return userData;
};

export const fetchAdressList = () => async (dispatch) => {
  const response = await fetch('/api/address');
  const addressList = await response.json();
  dispatch(setAdressListAction({ addressList }));
  return addressList;
};

export const fetchCreditCards = () => async (dispatch) => {
  const response = await fetch('/api/creditCards');
  const creditCards = await response.json();
  dispatch(setCreditCardsAction({ creditCards }));
  return creditCards;
};

export const fetchUserRoles = () => async (dispatch) => {
  const response = await fetch('/api/userRoles');
  const roles = await response.json();
  dispatch(setRolesAction({ roles }));
  return roles;
};

export const fetchTheme = () => async (dispatch) => {
  const response = await fetch('/api/theme');
  const theme = await response.json();
  dispatch(setThemeAction({ theme }));
  return theme;
};

export const fetchLanguage = () => async (dispatch) => {
  const response = await fetch('/api/language');
  const language = await response.json();
  dispatch(setLanguageAction({ language }));
  return language;
};

