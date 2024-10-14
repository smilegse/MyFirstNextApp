import React from 'react';
import {PrismaClient} from "@prisma/client";

const db = new PrismaClient();


const Page = async() => {

    const allUsers = await db.user.findMany();
    // const allUsers = await db.user.findMany({
    //     where: {
    //         name: "admin"
    //     },
    //     take: 10,
    //     skip: 10,
    //     select: {
    //         name: true,
    //     }
    // });

    console.log("allUser: ", allUsers)

    return (
        <div>

        </div>
    );
};

export default Page;