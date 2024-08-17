import { SET_ROLES } from './clientReducer';

export const clientThunks = {
  handleRole: (roleThunk) => (dispatch) => {
    dispatch({
      type: SET_ROLES,
      payload: roleThunk,
    });
  },
};

