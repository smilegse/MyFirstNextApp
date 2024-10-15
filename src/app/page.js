import React from 'react';
import styles from "./page.module.css";
import Menu from "@/components/Menu";
import AlertButton from "@/client-components/alert-button";

async function getData(){
    let res = await fetch('https://dummyjson.com/products');
    let json = await res.json();
    return json['products'];
}

export const metadata = {
    title: 'Home',
}


const Page = async () => {

    let data = await getData()

    return (
        <div>
          <Menu/>
          <h1 className={styles.myHeadLine}>This is Home Page</h1>
            <div>
                <AlertButton/>
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