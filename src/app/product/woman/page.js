'use client'
import {useEffect, useState} from 'react';

const Page =  () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        (async ()=>{
            let res = await fetch('https://jsonplaceholder.typicode.com/photos');
            const timeoutId = setTimeout(async () => {
                setData(await res.json());
            }, 10000);

        })()
    }, []);

    return (
        <div>
          <h1>This is Woman Product page</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default Page;