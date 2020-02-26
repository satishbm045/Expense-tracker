export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TRANSACTION':
      var data = state.transactions.filter(transaction => transaction.id !== action.payload);
      localStorage.transDetails = JSON.stringify(data);
      return {
        ...state,
        transactions: data
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      }
    default:
      return state;
  }
}