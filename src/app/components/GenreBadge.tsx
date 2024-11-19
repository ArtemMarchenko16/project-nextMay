import React from 'react';
import {IGenre} from "@/app/models/IGenre";
import {getDataFromAPI} from "@/app/services/api.service";
import styles from "./stylesForGenres.module.css"
import Link from "next/link";

const GenreBadge = async () => {
    const response = await getDataFromAPI.genres.getGenres();
    const genres = response.genres || [];
    console.log(genres);
    return (
        <div>
            <div className={styles.settingsForTitle}>
                <h2>Genres:</h2>
            </div>
            <div className={styles.genreBlock}>
                <div>
                    {genres.map((genre: IGenre) => (<div className={styles.styleForText} key={genre.id}><Link href={"/movie/"}>{genre.name}</Link></div>))}
                </div>
            </div>


        </div>




    );
}


export default GenreBadge;
