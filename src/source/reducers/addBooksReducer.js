const initialState = {
  addbooks: [],
};

const addBooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        addbooks: [...state.addbooks, action.payload],
      };
    default:
      return state;
  }
};

export default addBooksReducer;
