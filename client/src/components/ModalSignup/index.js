import React from 'react';
import { useNavigate } from "react-router-dom";

const Modal = ({ isVisible, onClose, isBusiness, setIsBusiness }) => {

    // Create a variable that uses the useNavigate react function that will redirect to the called page
    const navigate = useNavigate();

    // Redirect to the signup page
    const navigateSignup = () => {
        navigate('/signup');
    }

    // When user clicks OUTSIDE the modal, close the modal. The div id is called wrapper.
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') {
            onClose();
        }
    }

    // If this prop is false, do not show the modal
    if (!isVisible) return null;

    // React Signup Modal that asks if signing up as Business or User
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center' id='wrapper'
            /* This is where the id=wrapper allows user to close modal by clicking outside the modal */
            onClick={handleClose}>

            <div className='w-[600px] flex flex-col'>
                {/* User may also close the modal by clicking the 'X' on the modal edge */}
                <button className='text-white text-xl place-self-end'
                    onClick={() => {
                        onClose();
                    }
                    }
                >
                    X
                </button>
                <div className='bg-white p-2 rounded'>
                    <div className='modal-text'>
                        <p className='text-xl text-center'>
                            Howdy, y'all!
                        </p>
                        <p className='text-xl text-center'>
                            Click an option to mosey on into Bexar County Market
                        </p>
                    </div>
                    {/* SIGNUP SELECTION BUTTONS */}
                    <div className='border border-grey-light w-full p-3 rounded mb-4'>
                        <button
                            type="submit"
                            className='bg-orange-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 mb-4'
                            // when BUSINESS button is clicked, setIsBusiness=true so that the BUSINESS signup appears on the signup page
                            onClick={() => {
                                setIsBusiness(true);
                                onClose();
                                navigateSignup();
                            }
                            }
                        >Signup as a Business
                        </button>
                        <button
                            type="submit"
                            className="bg-orange-400 w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            // when USER button is clicked, setIsBusiness=false so that the USER signup appears on the signup page
                            onClick={() => {
                                setIsBusiness(false);
                                onClose();
                                navigateSignup();
                            }
                            }
                        >Signup as a User
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal