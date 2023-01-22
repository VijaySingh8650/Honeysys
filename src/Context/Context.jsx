import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer';

export const ContextProvider = createContext();

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <ContextProvider.Provider value={{state,dispatch}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default Context
