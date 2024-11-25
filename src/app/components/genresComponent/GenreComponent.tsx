'use client'

import React, {useEffect, useState} from 'react';
import {getDataFromAPI} from "@/app/services/api.service";
import {IMovie} from "@/app/models/IMovie";

type  Params  = Promise<{id:number}>

const GenreComponent =  ({params}: Params) => {
    const [moviesByGenres, setMovies] = useState<IMovie[]>([])
    useEffect(() => {
        const lmf = async () => {
            const getMovieId = await params;
            const moviesByGenres:IMovie[] = await getDataFromAPI.genres.getMoviesByGenres(getMovieId.id);

            console.log(moviesByGenres);
            setMovies(moviesByGenres)
        }
        lmf()

    }, []);

    return (
        <div>
            {
                moviesByGenres.map(xxx => <div key={xxx.id}>{xxx.title}</div>)
            }
        </div>
    );
};

export default GenreComponent;