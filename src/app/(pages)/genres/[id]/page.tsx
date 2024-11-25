import React from 'react';
import GenreComponent from "@/app/components/genresComponent/GenreComponent";
import PaginationComponent from "@/app/components/moviesComponent/PaginationComponent";

interface Props {
    params: {
        id: string;
    };
    searchParams?: {
        genre?: string;
        page?: string;
    };
}

const Page = async ({params, searchParams,}: { params: Props['params']; searchParams?: Props['searchParams']; }) => {

    const page = searchParams?.page || '1';

    return (
        <div>
            <GenreComponent params={params} />
            <PaginationComponent currentPage={Number(page)} />
        </div>
    );
};

export default Page;