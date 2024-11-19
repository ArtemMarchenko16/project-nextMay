import React from 'react';
import styles from "@/app/components/Menu.module.css";
import Link from "next/link";
import {IMovie} from "@/app/models/IMovie";
import {getDataFromAPI} from "@/app/services/api.service";

const MoviesList =  async () => {

    const movies: IMovie[] = await getDataFromAPI.movies.getMovies();
    return (
        <div className={styles.moviesGrid}>
            {movies.map(movie => (
                <div className={styles.movieBlock} key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                        <h3>{movie.original_title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    )
}




export default MoviesList;