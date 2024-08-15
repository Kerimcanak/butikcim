import React from "react";
import { useForm } from "react-hook-form";
import { Axios } from "axios";
//use react hook form for form validation
//use react router dom for routing

const Signup = () => {
    const { register, handleSubmit, setError, clearErrors, formState: { errors } } = useForm();


    return (
        <div className="flex flex-col items-center justify-center h-screen p-4 bg-white">
            <div className="h-24 w-24 rounded-full bg-red-500 text-white flex items-center justify-center text-4xl">
               <i className="fa-solid fa-address-card"></i>
            </div>
            <h1 className="text-4xl font-bold text-black">Sign up</h1>
            <p className="text-xl leading-relaxed mb-8 text-gray-500">
                Join us to get access to all the features
                of our platform.
            </p>

            <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col">
            <label className="mb-4">
            Name:
            <input
            {...register("name", {
                required: true,
                minLength: {
                value: 3,
                message: "Minimum 3 characters",
                },
            })}
            onChange={(e) => {
                setValue("name", e.target.value);
                validate("name");
            }}
            className={`border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </label>
                <label className="mb-4">
                    E-mail:
                    <input
                    {...register("email", { required: "This field is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                    onChange={(e) => console.log(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </label>
                <label className="mb-4">
                    Password:
                    <input
                    {...register("password", { required: "This field is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                    onChange={(e) => console.log(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </label>
                <label className="mb-4">
                    Confirm Password:
                    <input
                    {...register("confirmPassword", { required: "This field is required", minLength: { value: 3, message: "Minimum 3 characters" } })}
                    onChange={(e) => console.log(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 w-full"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </label>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 rounded-md p-2 text-white"
                    onClick={handleSubmit((data) => console.log(data))}
                >
                    Sign up
                </button>
            </form>
        </div>
    );
};

export default Signup;

