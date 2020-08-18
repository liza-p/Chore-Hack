import React, { createContext, useReducer, useContext } from "react";
import {
ADD_USER,
UPDATE_USER,
REMOVE_USER,
ADD_HOUSEHOLD,
UPDATE_HOUSEHOLD,
REMOVE_HOUSEHOLD,
ADD_CHORE,
UPDATE_CHORE,
REMOVE_CHORE
} from './actions';

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state
            };
        
        case UPDATE_USER:
            return {
                ...state
            };

        case REMOVE_USER:
            return {
                ...state
            };
        
        case ADD_HOUSEHOLD:
            return {
                ...state
            };

        case UPDATE_HOUSEHOLD:
            return {
                ...state
            };

        case REMOVE_HOUSEHOLD:
            return {
                ...state
            };

        case ADD_CHORE:
            return {
                ...state
            };

        case UPDATE_CHORE:
            return {
                ...state
            };

        case REMOVE_CHORE:
            return {
                ...state
            }
    }
}