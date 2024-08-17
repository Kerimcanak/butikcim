import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
//use react hook form for form validation
//use react router dom for routing
//this code works inshallah (https://youtu.be/D2tPBaO4nbs?si=yN0Re0Mx0YmhLF1U&t=30)

const Signup = () => {
    const { register, handleSubmit, setError, clearErrors, watch, formState: { errors } } = useForm();
    const axiosInstance = axios.create({
        baseURL: 'https://workintech-fe-ecommerce.onrender.com',
        timeout: 1000,
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const onSubmitHandler = async (data) => {
        setIsSubmitting(true);
        try {
            // handle the form data here
            const { confirmPassword, ...formData } = data;
            const { store, ...user } = formData;
            const formattedData = {
                name: user.name,
                email: user.email,
                password: user.password,
                role_id: user.role_id,
                store: {
                    name: user.storename,
                    phone: user.storephone,
                    tax_no: user.taxid,
                    bank_account: user.storebankaccount,
                },
            };
            const response = await axiosInstance.post('/api/signup', formattedData);
            const users = require('../backend/users.json');
            users.push(formattedData);
            require('fs').writeFileSync('../backend/users.json', JSON.stringify(users));
            if (response.status === 200) {
                toast.success("You need to click link in email to activate your account!!");
                setTimeout(() => {
                    window.history.back();
                }, 1000);
            } else {
                throw new Error('Signup unsuccessful!')
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };
 


    return (
        <>
        <Header />
        <ToastContainer />
        <div className="flex flex-col items-center justify-center h-screen p-4 bg-white">
            <div className="h-24 w-24 rounded-full bg-red-500 text-white flex items-center justify-center text-4xl">
               <i className="fa-solid fa-address-card"></i>
            </div>
            <h1 className="text-4xl font-bold text-black">Sign up</h1>
            <p className="text-xl leading-relaxed mb-8 text-gray-500">
                Join us to get access to all the features
                of our platform.
            </p>

            <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col w-96">

                <div className="flex flex-col">
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
                        className={`w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="mb-4">
                        E-mail:
                        <input
                        {...register("email", {
                            required: "This field is required",
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

                <div className="flex flex-col">
                    <label className="mb-4">
                        Password:
                        <input
                        {...register("password", { 
                            required: "This field is required", 
                            minLength: { value: 8, message: "Password must be atleast 8 characters" },
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#½])[A-Za-z\d@$!%*?&#½]{8,}$/,
                                message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                            }
                        })}
                        onChange={(e) => console.log(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </label>
                </div>

                <div className="flex flex-col">
                    <label className="mb-4">
                        Confirm Password:
                        <input
                        {...register("confirmPassword", {
                            required: "This field is required",
                            validate: (value) => value === watch("password") || "Passwords do not match",
                        })}
                        onChange={(e) => console.log(e.target.value)}
                        className={`border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
                        />
                        {errors.confirmPassword && <span className="text-red-500">Passwords do not match</span>}
                    </label>
                </div>
                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a role
                <select id="role" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register("role", { required: true })}>
                    <option value="customer">Customer</option>
                    <option value="store">Store</option>
                </select>
                </label>
                {errors.role && <p className="text-red-500">Role is required</p>}
                {watch("role") === "store" && (
                    <>
                        <div className="flex flex-col mt-4">
                            <label className="mb-4">
                                Store Name:
                                <input
                                {...register("storename", {
                                    required: "This field is required",
                                    minLength: { value: 3, message: "Store name must be at least 3 characters" },
                                })}
                                className={`border ${errors.storename ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
                                />
                                {errors.storename && <p className="text-red-500">{errors.storename.message}</p>}
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-4">
                                Store Phone:
                                <input
                                {...register("storephone", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^(\+90|0)?\s?\d{10}$/,
                                        message: "Phone number must be a valid Türkiye phone number"
                                    }
                                })}
                                className={`border ${errors.storephone ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
                                />
                                {errors.storephone && <p className="text-red-500">{errors.storephone.message}</p>}
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-4">
                                Store Tax ID:
                                <input
                                {...register("taxid", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: "Tax ID must match the pattern TXXXXVXXXXXX"
                                    }
                                })}
                                className={`border ${errors.taxid ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
                                />
                                {errors.taxid && <p className="text-red-500">{errors.taxid.message}</p>}
                            </label>
                        </div>

                        <div className="flex flex-col">
                            <label className="mb-4">
                                Store Bank Account:
                                <input
                                {...register("storebankaccount", {
                                    required: "This field is required",
                                    pattern: {
                                        value: /^TR\d{24}$/,
                                        message: "Bank account must be a valid IBAN address"
                                    }
                                })}
                                className={`border ${errors.storebankaccount ? "border-red-500" : "border-gray-300"} rounded-md p-2 w-full`}
                                />
                                {errors.storebankaccount && <p className="text-red-500">{errors.storebankaccount.message}</p>}
                            </label>
                        </div>
                    </>
                )}

                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 rounded-md p-2 text-white flex items-center justify-center"
                disabled={isSubmitting}
                >
                {/*{isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 text-white mr-2" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"  
                stroke-linecap="round" stroke-linejoin="round" />
                    <line class="opacity-75" x1="12" y1="6" x2="12" y2="12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                ) : null}*/
                /*this spinner works, but it is disabled as requested*/}
                Sign up
                </button>
            </form>
        </div>
        <Footer />
        </>
    );
};

export default Signup;

