import React from 'react';
import Menu from "@/components/Menu";

export const metadata = {
    title: 'Service',
}

const getData = async () => {
    try {
        const res1 = await fetch('https://jsonplaceholder.typicode.com/posts/');
        const res2 = await fetch('https://jsonplaceholder.typicode.com/users');
        const postsData = await res1.json();
        const usersData = await res2.json();
        return {posts:postsData, users:usersData}
    }catch(err){
        throw new Error('Error');
    }
}

const Page = async () => {

    const data = await getData()

    return (
        <div>
            <Menu/>
            <h1>This is services page</h1>
            {/*<p>{JSON.stringify(data['users'])}</p>*/}
            {
                data['posts'].map((post, postIndex) => (
                    <div key={postIndex}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        {
                            data['users'].map((user,userIndex)=>{
                                if(post.userId === user.id) {
                                    return (
                                        <div key={postIndex}>
                                            <h5>Posted by: {user.name}, Email: {user.email}</h5>
                                        </div>

                                    );
                                }
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
};

export default Page;