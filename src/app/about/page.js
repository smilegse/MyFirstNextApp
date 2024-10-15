import React from 'react';
import Menu from "@/components/Menu";

export const metadata = {
    title: 'About',
}

function Page(props) {
    return (
        <div>
            <Menu/>
            <h1>This is product page</h1>
        </div>
    );
}

export default Page;