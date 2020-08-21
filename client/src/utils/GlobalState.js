import React, { createContext, useReducer, useContext } from "react";
import {
    UPDATE_USERNAME,
    UPDATE_HOUSEHOLD,
    UPDATE_MEMBERS,
    UPDATE_CHORES,
    UPDATE_CHORE,
    ADD_CHORE,
    REMOVE_CHORE,
    UPDATE_REPETITIONS,
    COMPLETE_REPETITION,
    UNDO_REPETITION

} from './actions';
import API from "./API";

const ChoreContext = createContext();
const { Provider } = ChoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:            
            return {
                ...state,
                username: action.username
            }
        
        case UPDATE_HOUSEHOLD:
            return {
                ...state,
                household: action.household
            };

        case UPDATE_MEMBERS:
            return {
                ...state,
                members: action.members
            };
        
        case UPDATE_CHORES:
            return {
                ...state,
                chores: action.chores
            };
        
        case UPDATE_CHORE:
            return {
                ...state,
                chore: action.chore
            };

        case ADD_CHORE:
            return {
                ...state,
                chores: [...state.chores, action.chores],
            };
            
        case REMOVE_CHORE:
            return {
                ...state,
                id: (chores.id === action.id ? " " : chores.id)
            };


        case UPDATE_REPETITIONS:
            return {
                ...state
            };

        case COMPLETE_REPETITION:
            return {
                ...state
            };

        case UNDO_REPETITION:
            return {
                ...state
            }
    }
}

const ChoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = userReducer(reducer, {

    })
}