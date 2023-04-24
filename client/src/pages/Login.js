import React, { useState } from "react";
import Modal from "../components/ModalSignup/index.js"
import UserLogin from "../components/UserLogin";
import BusinessLogin from "../components/BusinessLogin";

function Login({ isBusiness, setIsBusiness }) {

    // State variables
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className='container m-auto' >
                <div className="mx-auto flex-1 flex flex-row items-center justify-center text-grey-dark m-6 bg-white py-4 rounded shadow-md text-black w-full text-2xl border">
                    Don't have an account?
                    <a className=" mx-4 hover:underline" href="../signup/"
                        // when person clicks on "Signup", open the modal for selection
                        onClick={(e) => {
                            e.preventDefault();
                            setShowModal(true);
                            isBusiness = { isBusiness };
                            setIsBusiness = { setIsBusiness };
                        }}>
                        Signup
                    </a>
                    <Modal
                        isVisible={showModal}
                        onClose={() => {
                            setShowModal(false);
                        }}
                        isBusiness={isBusiness}
                        setIsBusiness={setIsBusiness}
                    ></Modal>
                </div>
                <div className="flex flex-wrap items-center justify-center">
                    <div>
                        <UserLogin
                            isBusiness={false}
                        />
                    </div>
                    <div>
                        <BusinessLogin
                            isBusiness={true}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;


