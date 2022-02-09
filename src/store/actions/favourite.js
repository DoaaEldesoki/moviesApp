// export const Add_FAVOURITE_MOVIE = "Add_FAVOURITE_MOVIE";
// export const remove_FAVOURITE_MOVIE = "remove_FAVOURITE_MOVIE";



// export const AddFavouriteAction = (payload) => {
//   return {
//     type: Add_FAVOURITE_MOVIE,
//     payload,
//   };
// };
// export const removeFavoriteAction = (payload) => {
//   return {
//     type: remove_FAVOURITE_MOVIE,
//     payload,
//   };
// };


export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export function addToFavorite(movie) {
    return {
        type: ADD_FAV,
        movie,
    };
}

export function removeFromFavorite(movie) {
    return {
        type: REMOVE_FAV,
        movie,
    };
}