import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Profile from './pages/Profile';
// import Search from './pages/Search';
import Signup from './pages/Signup';
import Business from './pages/Business';
import Modal from './components/ModalSignup';

const httpLink = createHttpLink({
    uri: '/graphql',
  });

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {

  const [isBusiness, setIsBusiness] = useState(false);

    return (
      <ApolloProvider client={client}>
        <Router>
          <div className='main'>
            <Nav 
              isBusiness={isBusiness}
              setIsBusiness={setIsBusiness} />
            <Routes>
            <Route 
                path="/" 
                element={<Home />}
              />
              <Route 
                path="/login" 
                element={<Login isBusiness={isBusiness} setIsBusiness={setIsBusiness}/>}
              />
              <Route 
                path="/signup" 
                // if one only puts <Signup isBusiness/>, then code assumes it is truthy, and does not assume the actual boolean value. Set isBusiness={isBusiness} to pass actual value to isBusiness
                element={<Signup isBusiness={isBusiness} />}
              />
              <Route 
                path="/profile" 
                element={<Profile isBusiness={isBusiness} />}
              />
              <Route 
                path="/about" 
                element={<About />}
              />
              <Route 
                path="/business/:id" 
                element={<Business />}
              />
              {/*<Route 
                path="/search" 
                element={<Search />}
              />*/}
            </Routes>
          </div>
        </Router>
    </ApolloProvider>
  );
}

export default App;
