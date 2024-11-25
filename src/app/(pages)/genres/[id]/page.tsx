import React from 'react';
import GenreComponent from "@/app/components/genresComponent/GenreComponent";
import PaginationComponent from "@/app/components/moviesComponent/PaginationComponent";
import styles from "./stylesPaginatoin.module.css"

interface Props {
    params: {
        id: number;
    };
    searchParams: {
        [key: string]: number;
    };
}

const Page = async ({ params, searchParams }: { params: Props['params']; searchParams: Props['searchParams'] }) => {


    const id: number = await params.id;
    const page: number = await searchParams.page || 1;

    return (
        <div>
            <GenreComponent id={id} page={page}/>
            <div className={styles.styleForPagination}>
                <PaginationComponent currentPage={Number(page)} />
            </div>
        </div>
    );
};

export default Page;