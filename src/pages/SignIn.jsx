
import React from "react";
import { useForm } from "react-hook-form";
//use react router dom for routing
//this code works inshallah (https://youtu.be/D2tPBaO4nbs?si=yN0Re0Mx0YmhLF1U&t=30)

const Signin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitHandler = async (data) => {
    console.log("Form Data:", data);
  };

  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen p-4 bg-white">
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
                validate: (value) => (value === watch("email") ? undefined : "E-mail must be the same as the e-mail used to register"),
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
            {...register("password", { 
              required: "This field is required", 
              minLength: { value: 8, message: "Password must be atleast 8 characters" },
              pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#½])[A-Za-z\d@$!%*?&#½]{8,}$/,
                  message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
              }
          })}
            type="password"
            onChange={(e) => console.log(e.target.value)}
            className="border border-gray-300 rounded-md p-2 w-full"
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
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
