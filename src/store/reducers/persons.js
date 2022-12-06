const initialState = {
  persons: [],
};

const personsReducer = (state = initialState, action) => {
  console.log(action);
  if (action.type === "GET_USERS") {
    return {
      ...state,
      persons: action.payload,
    };
  }
  if (action.type === "REMOVE") {
    const filter = state.persons.filter((item) => {
      if (item.id !== action.id) {
        return item;
      }
      return null;
    });
    return {
      ...state,
      persons: filter,
    };
  }
  return state;
};
export default personsReducer;
