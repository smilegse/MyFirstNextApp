'use client'
import React from 'react';
import Menu from "@/components/Menu";
import {useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation"

const Page = () => {
    const params = useSearchParams()


    return (
        <div>
            <Menu/>
            <h1>This is product page</h1>
            <h1>Id: {params.get('id')}</h1>
            <h1>Product Name: {params.get('name')}</h1>
            <h1>Price: {params.get('price')}</h1>


        </div>
    );
};

export default Page;