import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function Items(){
    const supplier = await getData("items");
    const columns = ["title","description","buyingPrice","sellingPrice"]
    return(
        <div>
            <FixedHeader title="item" newlink="http://localhost:3000/dashboard/inventory/items/new"/>
            <div className="my-4 p-8">
            <DataTable data={supplier} columns={columns}/>
            </div>
        </div>
    );
}