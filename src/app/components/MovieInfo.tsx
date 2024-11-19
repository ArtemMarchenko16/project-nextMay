import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import {getDataFromAPI} from "@/app/services/api.service";

type Params = Promise<{id:string}>
const MovieInfo = async ({params} : {params: Params}) => {

    const xxx  = await params;
    console.log(xxx);
    const movies: IMovie = await getDataFromAPI.movies.getMoviesById(xxx.id)
    return (
        <div>
            {
                movies.title
            }
        </div>
    );
};

export default MovieInfo;