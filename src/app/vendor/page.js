import React from 'react';
import {PrismaClient} from "@prisma/client";
import Menu from "@/components/Menu";

const db = new PrismaClient();

const Page = async() => {
    const createVendor = await db.vendor.create({
        data: {
            BusinessEntityID:1690,
            AccountNumber: "4321470000527795",
            Name: "Md. Abu Bakar Siddiuqe",
            CreditRating:1,
            PurchasingWebServiceURL:null
        }
    })

    const vendors = await db.vendor.findMany({
        where: {
            ActiveFlag:true
        },
        orderBy: {
            Name: "asc"
        },
        take:10,
        skip:10,
        select: {
            Name:true,
            AccountNumber:true,
            CreditRating:true
        }
    })
    console.log("vendors: ", vendors)

    return (
        <div>
            <Menu/>
            <h1>Vendor List</h1>
            {
                vendors.map((item, index)=>{
                    return (
                        <ul key={index}>
                            <li>{item.Name}</li>
                        </ul>
                    )
                })
            }
        </div>
    );
};

export default Page;