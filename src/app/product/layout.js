'use client'
import React from 'react';
import {useRouter} from "next/navigation";

const Layout = ({children}) => {
    const router = useRouter();

    const GoTo = ()=>{
        router.push("/orders")
    }
    const GoToProduct = ()=>{
        router.push("/product?id=202&name=iPhone&price=150000")
    }
    return (
        <div>
            <ul>
                <li>
                    <button onClick={GoTo}>Orders</button>
                </li>
                <li>
                    <button onClick={GoToProduct}>Product</button>
                </li>
            </ul>


            {children}
        </div>
    );
};

export default Layout;