import { useReducer } from 'react';
import { UPDATE_USER, UPDATE_BUSINESS } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        
        default:
            return state;
    }
};

export function useAccoutReducer(initialState){
    return useReducer(reducer, initialState);
}