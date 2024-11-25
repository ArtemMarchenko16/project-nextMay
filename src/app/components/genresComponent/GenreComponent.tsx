'use client'

import React, {useEffect, useState} from 'react';
import {getDataFromAPI} from "@/app/services/api.service";
import {IMovie} from "@/app/models/IMovie";

type GenreComponentProps = {
    genreId: string;
    page: string;
}

const GenreComponent = ({genreId, page}: GenreComponentProps) => {
    const [moviesByGenres, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getDataFromAPI.genres.getMoviesByGenres(Number(genreId), Number(page));
            console.log(movies);
            setMovies(movies);
        };

        fetchMovies();
    }, [genreId, page]);

    return (
        <div>
            {moviesByGenres.map(xxx => <div key={xxx.id}>{xxx.title}</div>)}
        </div>
    );
};

export default GenreComponent;
