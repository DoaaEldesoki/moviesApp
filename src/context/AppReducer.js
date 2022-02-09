export default (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist],
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) =>
                        movie.id !== action.payload
                ),
            }
            case "ADD_MOVIE_TO_FAVLIST":
                return {
                    ...state,
                    FavList: [action.payload, ...state.FavList],
                }
                case "REMOVE_MOVIE_FROM_FAVOURITE":
                    return {
                        ...state,
                        Favorite: state.Favorite.filter(
                            (movie) =>
                                movie.id !== action.payload
                        ),
                    }
        default:
            return state;
    }
};