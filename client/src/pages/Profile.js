import React, { useState } from 'react';
import Auth from "../utils/auth";
import BusinessProductList from '../components/BusinessProductList';
import UserFavoriteList from '../components/UserFavoriteList';
// import BusinessUpdateModal from "../components/BusinessUpdateModal";
import UserUpdateModal from '../components/UserUpdateModal';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_BUSINESS } from '../utils/queries';

function Profile() {

    // State variables
    const [showUserModal, setShowUserModal] = useState(false);
    // const [showBusinessModal, setShowBusinessModal] = useState(false);

    // Get business id from Auth util
    const bizId = Auth.getBusiness();

    // Return data if bizId is true QUERY_BUSINESS if false QUERY_ME
    const { loading, data } = useQuery(
        bizId ? QUERY_BUSINESS : QUERY_ME, {
        variables: bizId ? { id: bizId } : {}
    });
    // Chaining to check if data exists otherwise return empty array
    const userData = data?.me || [];

    // React profile page that renders based on whether user or business
    return loading ? <div>Loading...</div> : <div>
        {
            bizId ?
                <>
                    <div className='business-profile'>
                        <h2>Hello {data.business.businessName}</h2>
                        <div>
                            {/*<button>Add Product</button>*/}
                            <p>Add Products Coming Soon!</p>
                        </div>
                        <BusinessProductList />
                        <div>
                            {/* <button
                            type="button"
                            className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                            onClick={ () => {
                                setShowBusinessModal(true);
                                }
                            }
                        >
                            Click to Update Credentials
                        </button>
                        <BusinessUpdateModal
                            isVisible={showBusinessModal}
                            onClose={() => {
                            setShowBusinessModal(false);
                                }
                            }
                        /> */}
                        </div>
                    </div>
                </>
                : <>
                    <div className='user-profile'>
                        <h2>Hello, {userData.userName}!</h2>
                        {/* <p>Favorites list coming soon!</p> */}
                        <div>
                            <button
                                type="button"
                                className="bg-orange-400 text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                                onClick={() => {
                                    setShowUserModal(true);
                                }}>
                                Click to Update Credentials
                            </button>
                            <UserUpdateModal
                                isVisible={showUserModal}
                                onClose={() => {
                                    setShowUserModal(false);
                                }} />
                        </div>
                        <UserFavoriteList />
                    </div>
                </>
        }
    </div>
}

export default Profile;