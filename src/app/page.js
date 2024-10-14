'use client'
import React from 'react';
import styles from "./page.module.css";
import Menu from "@/components/Menu";

async function getData(){
    let res = await fetch('https://dummyjson.com/products');
    let json = await res.json();
    return json['products'];
}

const Page = async () => {

    let data = await getData()

    return (
        <div>
          <Menu/>
          <h1 className={styles.myHeadLine}>This is Home Page</h1>
            <div>
                <button onClick={()=> {alert('Hello')}}>Click</button>
                {
                    data.map((item, index)=>{
                        return(
                            <div key={index}>
                                <h1>Product Title: {item['title']}</h1>
                                <p>Price: {item['price']}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Page;