import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import {MovieCard} from './MovieCard'



function Favourites (){
    const { FavList } = useContext(GlobalContext)

    return (
        <div>

<h2> Favourites</h2>
        {/* {FavList?.length > 0 ? (
            <div> */}
                {/* {FavList.map((movie) => (
                    <MovieCard movie={movie} type="FavList" />
                ))}
            </div>
        ) : ( */}
            <h2> No Movies in Your Favourite List </h2>
        {/* )} */}

        </div>
        
     
// <div>
// fav
// </div>

    )
}
export default Favourites;




