import React, { useState } from 'react';
import Auth from "../../utils/auth";
import { useMutation } from '@apollo/client';
import { BUSINESS_LOGIN } from '../../utils/mutations';

function BusinessLogin() {

  // State variables
  const [formState, setFormState] = useState({ email: '', password: '' });
  // Return data about BUSINESS_LOGIN mutation
  const [businessLogin, { error }] = useMutation(BUSINESS_LOGIN);

  // Form submit: perform mutation and pass in form data object as arguments
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await businessLogin({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.businessLogin.token;

      Auth.login(token);
      Auth.setBusiness(mutationResponse.data.businessLogin.business._id)
    } catch (e) {
      console.log(e);
    }
  };

  // When an form field is changed, update the formState
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // React Business Login form
  return (
    <div className="container my-5 mx-auto flex flex-col items-center mb-10 login-form">
      <h2 className='text-2xl mt-5'>Business Login</h2>
      <form onSubmit={handleFormSubmit} className='flex flex-col border px-6 py-8 rounded shadow-md items-center'>
        <div className="flex-row space-between my-2">
          <label htmlFor="email">Email address:</label>
          <input
            className='block border border-grey-light p-2 rounded mb-4'
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="businessemail"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            className='block border border-grey-light p-2 rounded mb-4'
            placeholder="******"
            name="password"
            type="password"
            id="businesspwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end">
          <button onClick={handleFormSubmit} 
            id="buslogin"
            type="submit"
            className={`bg-orange-400 w-full text-center p-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1`}
          >Submit
          </button>
        </div>
      </form >
    </div >
  )
};

export default BusinessLogin;