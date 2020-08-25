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

const ChoreContext = createContext();
const { Provider } = ChoreContext;

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USERNAME:            
            return {
                ...state,
                username: action.username,
                userId: action.userId
            }
        
        case UPDATE_HOUSEHOLD:
            return {
                ...state,
                household: action.household,
                inviteCode: action.inviteCode
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
                chores: state.chores.map(chore => {
                    return (chore.id !== action.id ? chore : action.chore);
                })
            };

        case ADD_CHORE:
            return {
                ...state,
                chores: [...state.chores, action.chore],
            };
            
        case REMOVE_CHORE:
            return {
                ...state,
                chores: state.chores.filter(chore => {
                    return chore.id !== action.id;
                })
            };

        case UPDATE_REPETITIONS:
            return {
                ...state,
                repetitions: action.repetitions
            };

        case COMPLETE_REPETITION:
            return {
                ...state,
                repetitions: state.repetitions.map(repetition => {
                    return (repetition.id !== action.id ? repetition : {...repetition, complete:true});
                })
            };

        case UNDO_REPETITION:
            return {
                ...state,
                repetitions: state.repetitions.map(repetition => {
                    return (repetition.id !== action.id ? repetition : {...repetition, complete:false});
                })
            }

            default:
                return state;
            
    }
}

const ChoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        members: [],
        chores: [],
        repetitions: []

    });

    return <Provider value={[state, dispatch]} {...props} />
};

const useChoreContext = () => {
    return useContext(ChoreContext);
};

export { ChoreProvider, useChoreContext };