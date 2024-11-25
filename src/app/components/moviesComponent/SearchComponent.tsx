'use client';
import React from 'react';
import styles from '../interface.module.css';
import { useRouter } from 'next/navigation';

export const SearchComponent = () => {
    const router = useRouter();

    const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const query = (event.target as HTMLFormElement).query.value;
        if (query) {
            router.push(`/search?query=${query}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className={styles.header}>
            <input
                name="query"
                type="text"
                placeholder="Search movie"
                className={styles.searchBar}
            />
            <button className={styles.searchButton} type="submit">
                Search movie
            </button>
        </form>
    );
};
