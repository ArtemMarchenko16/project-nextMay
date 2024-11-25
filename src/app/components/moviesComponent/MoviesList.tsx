'use client';
import React, { useEffect, useState } from 'react';
import styles from '../interface.module.css';
import Link from 'next/link';
import { getDataFromAPI } from '@/app/services/api.service';
import { IMovie } from '@/app/models/IMovie';
type Props = {
    page: string | string[];
};

const MoviesList = ({ page }: Props) => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies: IMovie[] = await getDataFromAPI.movies.getMovies(page);
            setMovies(movies);
        };

        fetchMovies();
    }, [page]);

    return (
        <div className={styles.moviesGrid}>
            {movies.map((movie) => (
                <div className={styles.movieBlock} key={movie.id}>
                    <Link href={`/movies/${movie.id}`}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.original_title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default MoviesList;

