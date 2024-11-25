import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Movie details'
}
type Props = { children: React.ReactNode }
const PostsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostsLayout;