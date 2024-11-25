import React from 'react';
import MovieInfo from "../../../components/moviesComponent/MovieInfo";


type  Params  = Promise<{id:number}>

const DetailMoviePage = async ({params}:{params:Params} ) => {

    return (
        <div>
            <MovieInfo params={params}/>
        </div>
    );
};

export default DetailMoviePage;