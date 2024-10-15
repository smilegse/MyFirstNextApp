import React from 'react';
import Menu from "@/components/Menu";


export const metadata = {
    title: 'Orders',
}

const Page = () => {
    return (
        <div>
            <Menu/>
            <h1>This is Order page</h1>
        </div>
    );
};

export default Page;