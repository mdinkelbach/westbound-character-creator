import React from 'react';
// import { useNavigate } from "react-router-dom";

// TODO: Future v2 development
const BusinessUpdateModal = ({ isVisible, onClose }) => {

    // Create a variable that uses the useNavigate react function that will redirect to the called page
    // const navigate = useNavigate();

    // Redirect to the signup page
    // const navigateSignup = () => {
    //     navigate('/signup');
    // }

    // When an form field is changed, update the formState
    const handleFormChange = (event) => {
        // const { name, value } = event.target;
        // setFormState({
        //     ...formState,
        //     [name]: value,
        // });
    };

    // When user clicks OUTSIDE the modal, close the modal. The div id is called wrapper.
    const handleClose = (e) => {
        if (e.target.id === 'wrapper') {
            onClose();
        }
    }

    // If this prop is false, do not show the modal
    if (!isVisible) return null;

    // React Business update Modal
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
                <form className="flex flex-1 flex-col bg-white px-6 py-8 rounded shadow-md text-black min-w-fit border">
                    <h1 className="mb-8 text-3xl text-center">Update Business Account</h1>
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
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={handleFormChange}
                        />
                    </div>
                    {/* UPDATE BUTTON */}
                    <button
                        type="submit"
                        className='bg-orange-400 text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1 mb-4'
                        // when BUSINESS button is clicked, setIsBusiness=true so that the BUSINESS signup appears on the signup page
                        onClick={() => {
                            onClose();
                        }}
                    >Submit Updates
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BusinessUpdateModal