import { useDispatch } from 'react-redux'; // For accessing dispatch function
import { loginThunk } from '../redux/loginThunk';
import React from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import { setUser } from '../redux/clientReducer';
//use react router dom for routing
//this code works inshallah (https://youtu.be/D2tPBaO4nbs?si=yN0Re0Mx0YmhLF1U&t=30)

const Signin = () => {
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();

  const dispatch = useDispatch(); // Accessing dispatch function

  const onSubmitHandler = async (data) => {
    await loginThunk(data)(dispatch);
    try {
      const users = [
        {
          "email": "customer@commerce.com",
          "password": "123456",
          "role": "customer"
        },
        {
          "email": "store@commerce.com",
          "password": "123456",
          "role": "store",
          "store": {
            "name": "Store 1",
            "phone": "905551234567",
            "taxId": "1111111111",
            "bankAccount": "TR1234567890123456"
          }
        },
        {
          "email": "admin@commerce.com",
          "password": "123456",
          "role": "admin"
        }
      ];
      const userExists = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (userExists) {
        dispatch(setUser(data.email));
        toast.success('Login successful');
        setTimeout(() => {
          window.history.back();
        }, 1000);
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const {watch} = useForm();

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-white">
        <ToastContainer />
    <div className="h-24 w-24 rounded-full bg-red-500 text-white flex items-center justify-center text-4xl">
               <i className="fa-solid fa-address-card"></i>
            </div>
            <h1 className="text-4xl font-bold text-black">Sign in</h1>
            <p className="text-xl leading-relaxed mb-8 text-gray-500">
                Sign in to your account
            </p>
      <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col w-96">
        <div id="email" className="flex flex-col">
            <label className="mb-4">
            E-mail:
            <input
                {...register("email", {
                required: {
                    value: true,
                    message: "This field is required",
                },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                },
                })}
                onChange={(e) => console.log(e.target.value)}
                className={`border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>
        </div>

        <div id="emailValidation" className="mb-4">
            <label className="mb-4">
            Validate E-mail:
            <input
                {...register("emailValidation", {
                required: "This field is required",
                validate: (value) => (value === getValues("email") || "E-mail must be the same as the e-mail used to register"),
                })}
                onChange={(e) => console.log(e.target.value)}
                className={`border ${errors.emailValidation ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
            />
            {errors.emailValidation && <span className="text-red-500">{errors.emailValidation.message}</span>}
            </label>
        </div>


        <div id="password" className="mb-4">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
          <input
            {...register("password")}
            type="password"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div id="keepmesignedcheckbox" className="mb-4 flex items-center">
          <input
            {...register("keepMeSignedIn")}
            type="checkbox"
            className="border border-gray-300 rounded-md mr-2"
          />
          <label htmlFor="keepmesignedcheckbox" className="text-sm font-medium text-gray-900 dark:text-white">Keep me signed in</label>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 rounded-md p-2 text-white flex items-center justify-center">
          Sign in
        </button>
      </form>
</div>
    </>
  );
};

export default Signin;
