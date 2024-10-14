import React from 'react';

const getData = async () =>{
    let res = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await res.json();
}

const Page = async () => {

    let data = await getData();

    return (
        <div>
            <h1>This is Men Product page</h1>
            <p> {JSON.stringify(data)}</p>
        </div>
    );
};

export default Page;