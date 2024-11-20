import React from 'react';
import MovieInfo from "../../components/MovieInfo";


type  Params  = Promise<{id:string}>

const DetailMoviePage = async ({params}:{params:Params} ) => {

    return (
        <div>
            <MovieInfo params={params}/>
        </div>
    );
};

export default DetailMoviePage;