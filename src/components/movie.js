import React from 'react';
import'../index.css'
import CreateIconButton from './mybutton';



// const IMG_path= "https://image.tmdb.org/t/p/w500/";
// const Movie =  ({ title, poster_path, overview, vote_average})=> (

//     <div className='movie'>
//          <img src={IMG_path + poster_path} alt={title}/> 
//          <div className='movie-info'>
//          <h3> {title}</h3>
//          <span> {vote_average}</span>
//          </div>
//        <div className='movie-over' >
//            <h2> Overview:</h2>
//            <p>{overview}</p>
//            <div><CreateIconButton /></div>

//        </div>

//     </div>
//   )
//   ;



  function Movie({ title, poster_path, overview, vote_average,release_date,original_language}){
    const IMG_path= "https://image.tmdb.org/t/p/w500/"
   
    return (
      <div >
       
        <div className='movie'>
         <img src={IMG_path + poster_path} alt={title}/> 
         <div className='movie-info'>
          <h3> {title}</h3>
         <span> {vote_average}</span>
        </div>
        <div className='movie-over' >
            <h2> Overview:</h2>
           <p>{overview}</p>
           <div><CreateIconButton /></div>
           </div>
          
     </div>
  </div>


    )

  }
export default Movie;
