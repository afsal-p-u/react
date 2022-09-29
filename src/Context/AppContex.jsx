import { createContext, useReducer } from "react"

const AppReducer = (state, action) => {
    switch(action.type){
        case 'ADD_EXPANSES':
            return {
                ...state,
                expanses: [...state.expanses, action.payload],
            }
        case 'DELETE_EXPANSE':
            return {
                ...state,
                expanses: state.expanses.filter(
                    (expanse) => expanse.id !== action.payload
                    )
            }
        default:
            return state; 
    }
}

const initialState = {
    budget: 1000,
    expanses: [
        { id: 12, name: "Shopping", cost: 40 },
        { id: 13, name: "Holiday", cost: 400 },
        { id: 14, name: "Car Services", cost: 50 },
    ],
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return(
        <AppContext.Provider 
            value={{
                budget: state.budget,
                expanses: state.expanses,
                dispatch,
            }}>
                {props.children}

        </AppContext.Provider>
    )
}