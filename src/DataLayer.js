import { createContext, useContext, useReducer } from "react";


// preparing data layer
export const StateContext = createContext();

export const DataLayer = ({initialState, reducer, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = ()=> { return useContext(StateContext);}