import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../../utils/mutations';

const UserUpdateModal = ({ isVisible, onClose }) => {
    // State varialbes
    const [formState, setFormState] = useState({
        userName: '',
        email: '',
        // password: '',
    });
    // Return data about UPDATE_USER mutation
    const [updateUser, { error }] = useMutation(UPDATE_USER);

    // Create a variable that uses the useNavigate react function that will redirect to the called page
    const navigate = useNavigate();
    // when this function is called, redirect the page to the signup page
    const navigateProfile = () => {
        navigate('/profile');
    }

    // When an form field is changed, update the formState
    const handleFormChange = async (event) => {
        const { name, value } = event.target;
        if (name === 'userName') {
            setFormState({ ...formState, [name]: value });
        } else if (name === 'email') {
            setFormState({ ...formState, [name]: value });
        // } else {
        //     setFormState({ ...formState, [name]: value });
        }
    };
    // Submit form with user input
    const updateFormSubmit = async (event) => {
        updateUser({
            variables: {
                userName: formState.userName,
                email: formState.email,
                // password: formState.password,
                // confirmPassword: formState.confirmPassword,
            },
        });
    }

    // when user clicks OUTSIDE the modal, then close the modal. the div id is called wrapper.
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') {
            onClose();
        }
    };

    // If this prop is false, do not show the modal
    if (!isVisible) return null;

    //React User Update Modal
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'
            /* This is where the id=wrapper allows user to close modal by clicking outside the modal */
            onClick={handleClose}>
            <div className='w-[600px] flex flex-col'>
                {/* User may also close the modal by clicking the 'X' on the modal edge */}
                <button className='text-white text-xl place-self-end'
                    onClick={() => {
                        onClose();
                    }}
                >
                    X
                </button>
                <form className="flex flex-1 flex-col bg-white px-6 py-8 rounded shadow-md text-black min-w-fit border">
                    <h1 className="mb-8 text-3xl text-center">Update User Account</h1>
                    <div className='flex flex-col border border-grey-light p-3 rounded mb-4'>
                        {/* Require these inputs!! */}
                        <input
                            type="text"
                            className="form-input block border border-grey-light w-full p-3 rounded mb-4"
                            name="userName"
                            placeholder="Username"
                            onChange={handleFormChange}
                        />
                        <input
                            type="email"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="user@email"
                            onChange={handleFormChange}
                        />
                        {/* <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={handleFormChange}
                        />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleFormChange}
                        /> */}
                    </div>
                    {/* UPDATE BUTTON */}
                    <button
                        type="submit"
                        className='bg-orange-400 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 mb-4'
                        onClick={() => {
                            updateFormSubmit();
                            onClose();
                            navigateProfile();
                        }}
                    >Submit Updates
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UserUpdateModal