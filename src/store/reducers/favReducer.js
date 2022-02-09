const INITIAL_STATE = [];

export default function favoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "Add_FAVOURITE_MOVIE":
      return [...state, action.payload];
    case "remove_FAVOURITE_MOVIE":
      const arr = state.filter((movie) => movie.id !== action.payload);
      return arr;
    default:
      return state;
  }
}
