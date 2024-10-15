'use client'
import React, {useState,useEffect} from 'react';
import Loading from "@/app/product/woman/loading";

const WomenPage = () => {
    const [dataIsEmpty, setDataIsEmpty] = useState(null)
    const [data, setData] = useState([]);

    useEffect(() => {
        (async ()=>{
            let res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const timeoutId = setTimeout(async () => {
                setData(await res.json());
                setDataIsEmpty("data loaded")
            }, 1000);

        })()
    }, []);

    return (
        <div>
            <h1>This is Woman Product page</h1>
            <p>{ dataIsEmpty ? JSON.stringify(data) : <Loading/> }</p>
        </div>
    );
};

export default WomenPage;