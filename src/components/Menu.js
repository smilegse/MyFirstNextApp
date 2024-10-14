'use client'
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const Menu = () => {
    let currentRoute = usePathname();

    return (
        <div>
            <Link className={currentRoute === "/"? "active-link": "pending-link"} href={"/"}>Home</Link><br/>
            <Link className={currentRoute === "/about"? "active-link": "pending-link"} href={"/about"}>About</Link><br/>
            <Link className={currentRoute === "/services"? "active-link": "pending-link"} href={"/services"}>Services</Link><br/>
            <Link className={currentRoute === "/product"? "active-link": "pending-link"} href={{pathname: "/product", query: {id:"101", name: "Book", price:"250Tk"}}}>Product</Link><br/>
        </div>
    );
};

export default Menu;