import axios from 'axios';
import { toast } from 'react-toastify';

export const loginThunk = (data) => async (dispatch) => {
  try {
    const response = await axios.post('/login', data);
    const user = response.data;
    dispatch(setUser(user));
    return user;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.data && error.response.data.message) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Something went wrong. Please try again later.');
    }
  }
};

