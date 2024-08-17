// clientActions.js
import {
  setUser,
  setAdressList,
  setCreditCards,
  setRoles,
  setTheme,
  setLanguage,
} from './clientReducer';
import { createAction } from '@reduxjs/toolkit';

export const setUserAction = createAction(setUser.type);
export const setAdressListAction = createAction(setAdressList.type);
export const setCreditCardsAction = createAction(setCreditCards.type);
export const setRolesAction = createAction(setRoles.type);
export const setThemeAction = createAction(setTheme.type);
export const setLanguageAction = createAction(setLanguage.type);
