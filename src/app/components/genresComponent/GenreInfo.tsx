import React from 'react';

import styles from "../stylesForGenres.module.css"
import Link from "next/link";
import {getDataFromAPI} from "@/app/services/api.service";
import {IGenre} from "@/app/models/IGenre";

const GenreInfo = async () => {
    const response = await getDataFromAPI.genres.getGenres();
    const genres = response.genres || [];
    console.log(genres);
    return (
        <div>
            <div className={styles.genreBlock}>
                <h2>Genres:</h2>
                <div className={styles.genreGrid}>
                    {genres.map((genre: IGenre) => (
                        <div className={styles.genreCard} key={genre.id}>
                            <Link className={styles.styleForText} href={`/genres/${genre.id}?genre=${genre.name}`}>
                                <p>{genre.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GenreInfo;
