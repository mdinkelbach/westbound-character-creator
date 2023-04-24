import React, { createContext, useContext } from 'react';
import { useAccountReducer } from './reducers';

const AccountContext = createContext;
const { Provider } = AccountContext;

const AccountProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useAccountReducer({
        
    })
}