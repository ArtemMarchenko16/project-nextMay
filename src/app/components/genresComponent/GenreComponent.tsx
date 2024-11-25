'use client'

import React, { useEffect, useState } from 'react';
import { getDataFromAPI } from "@/app/services/api.service";
import { IMovie } from "@/app/models/IMovie";
import styles from "./genreMovie.module.css";
import Link from "next/link";

const GenreComponent = ({ id, page }: { id: number; page: number }) => {
    const [moviesByGenres, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const lmf = async () => {
            const moviesByGenres: IMovie[] = await getDataFromAPI.genres.getMoviesByGenres(await id, await page);
            setMovies(moviesByGenres);
        };
        lmf();
    }, [id, page]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.moviesContainer}>
                {moviesByGenres.map((movie) => (
                    <div key={movie.id} className={styles.movieBlock}>
                        <Link href={`/movies/${movie.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                            <div className={styles.styleForTitle}>
                                <p>{movie.title}</p>

                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreComponent;
