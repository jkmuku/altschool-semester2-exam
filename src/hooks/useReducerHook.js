function countReducer(initialState = 0, action) {
    if (action.type === 'increment') {
      return initialState + 1;
    } else if (action.type === 'decrement') {
      return initialState - 1;
    } else if (action.type === 'reset') {
      return 0;
    } else {
      return initialState;
    }
  }

  export default countReducer