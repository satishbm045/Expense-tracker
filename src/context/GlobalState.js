import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
if(localStorage.getItem('transDetails') === null){
  var value = [];
}else{
  var value = JSON.parse(localStorage.getItem('transDetails'));
}
const initialState = {
  transactions: value
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    });
  }
  
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    });
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}