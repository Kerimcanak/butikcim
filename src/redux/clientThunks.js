import { thunk } from 'redux-thunk';
import { setRoles } from './clientReducer';

export const roleThunks = {
    setRoles: thunk((_, {dispatch}, roleThunk) => {
        dispatch({
            type: setRoles,
            payload: roleThunk,
        });
    }),
};