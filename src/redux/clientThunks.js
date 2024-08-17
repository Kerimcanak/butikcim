// clientThunks.js
import axiosInstance from 'axios'; // Assuming you have axios configured
import { setUser } from './clientReducer'; // Import the setUser action

export const signupUser = (data) => async (dispatch) => {
  setIsSubmitting(true); // Assuming setIsSubmitting is a state setter function

  try {
    const { confirmPassword, ...formData } = data;
    const { store, ...user } = formData;
    const formattedData = {
      name: user.name,
      email: user.email,
      password: user.password,
      role_id: user.role_id, // Accessing the role_id from the form data
      store: {
        name: user.storename,
        phone: user.storephone,
        tax_no: user.taxid,
        bank_account: user.storebankaccount,
      },
    };

    const response = await axiosInstance.post('/api/signup', formattedData);

    if (response.status === 200) {
      // Handle successful signup
      dispatch(setUser(response.data.user)); // Dispatch setUser action with user data
      toast.success("You need to click link in email to activate your account!!");
      setTimeout(() => {
        window.history.back();
      }, 1000);
    } else {
      throw new Error('Signup unsuccessful!');
    }
  } catch (error) {
    toast.error(error.message);
  } finally {
    setIsSubmitting(false);
  }
};