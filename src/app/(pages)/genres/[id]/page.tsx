import React from 'react';
import GenreComponent from "@/app/components/genresComponent/GenreComponent";
import PaginationComponent from "@/app/components/moviesComponent/PaginationComponent";

interface Props {
    params: {
        id: string;
        page: string
    }
}



const Page = async ({ searchParams }: { searchParams: {[id: string], [key: string]: string | string[] | undefined } }) => {
    debugger;
    const params = await searchParams;
    console.log(params);
    // const page: string | string[] = xxx.page || '1';


    return (
        <div>
            <GenreComponent params={params}/>
            <PaginationComponent currentPage={Number(1)}/>
        </div>
    );
};

export default Page;