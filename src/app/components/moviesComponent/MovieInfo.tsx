import React from 'react';
import {IMovie} from "@/app/models/IMovie";
import {getDataFromAPI} from "@/app/services/api.service";
import styles from "./stylesForMoviesInfo.module.css"
import {Rating} from "@mui/material";


type Params = Promise<{id:number}>
const MovieInfo = async ({params} : {params: Params}) => {
    const request  = await params;
    const movies: IMovie = await getDataFromAPI.movies.getMoviesById(request.id)
    console.log(movies)

    return (
        <div className={styles.container}>
            <div className={styles.positionForData}>
                <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} alt={movies.title}/>

                <p>{movies.original_title}</p>
                <p>Release date: {movies.release_date}</p>
                <p>Overview:</p> <p>{movies.overview}</p>
                <p>Rating: {movies.vote_average}</p>
                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />

            </div>

        </div>
    );
};

export default MovieInfo;