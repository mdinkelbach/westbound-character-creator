import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { ADD_BUSINESS } from '../../utils/mutations';
import Auth from '../../utils/auth';

var categories = ['leather', 'woodworking', 'jewelry', 'textiles'];

function BusinessSignup({ isBusiness }) {

    // State variables
    const [formState, setFormState] = useState({ businessName: '', email: '', password: '', confirmPassword: '' });
    // Return data about ADD_BUSINESS mutation
    const [addBusiness] = useMutation(ADD_BUSINESS);

    // Login submit: perform mutation and pass in form data object as arguments
    const handleSubmit = async (event) => {
        //event.preventDefault();
        const addBusResponse = await addBusiness({
            variables: {
                businessName: formState.businessName,
                email: formState.email,
                password: formState.password,
                confirmPassword: formState.confirmPassword,
            },
        });
        const token = addBusResponse.data.addBusiness.token;
        Auth.login(token);
        console.log("FORM SUBMITTED");
        // Clear Form after success
        setFormState({
            businessName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })
    };

    // Create a variable that uses the useNavigate react function that will redirect to the called page
    const navigate = useNavigate();

    // Redirect to the home page
    const navigateHome = () => {
        navigate('/');
    }

    // When an form field is changed, update the formState
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //React Business Signup Form    
    return (
        <>
            <div className="bg-grey-lighter flex flex-col m-5 signup-form">
                <div className="container max-w-md mx-auto flex-1 flex flex-row items-center px-2">

                    {/* BUSINESS SIGNUP */}
                    <form onSubmit={navigateHome} className="flex flex-1 flex-col bg-white px-6 py-8 rounded shadow-md text-black min-w-fit border">
                        <h1 className="mb-8 text-3xl text-center">Create Business Account</h1>
                        <div className='flex flex-col border border-grey-light p-3 rounded mb-4'>
                            {/* Require these inputs!! */}
                            <input
                                type="text"
                                className="form-input block border border-grey-light w-full p-3 rounded mb-4"
                                name="businessName"
                                placeholder="Business Name"
                                onChange={handleFormChange}
                            />

                            <input
                                type="email"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="business@email"
                                onChange={handleFormChange}
                            />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                onChange={handleFormChange}
                            />
                            <input
                                type="password"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                onChange={handleFormChange}
                            />
                            <input
                                type="file"
                                id="image-file"
                                className="block w-full rounded mb-4"
                            />

                            {/* loops through the categories array to create checkbox */}
                            <div className='block border border-grey-light w-full p-3 rounded mb-4'>
                                {/* TODO: MAKE THIS REQUIRED */}
                                <h3 className="italic text-center mb-4">What categories do you sell?</h3>
                                {categories.map((categoryName, j) => {
                                    return (
                                        // add key here in case this specific item changes, then jsx knows to only change that specific element
                                        // make sure to use the category id from the typeDef(?)
                                        <div key={j}>
                                            <input
                                                className="flex-row dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary"
                                                type="checkbox"
                                                value=""
                                                id="checkboxDefault" />
                                            <label
                                                className="flex-row pl-[0.15rem] hover:cursor-pointer"
                                                htmlFor="checkboxDefault">
                                                {categoryName}
                                            </label>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="bg-orange-400 w-full text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                                onClick={handleSubmit}
                            >Submit Business Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default BusinessSignup;
