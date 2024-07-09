import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function Brands(){
    const supplier = await getData("brands");
    const columns = ["title"]
    return(
        <div>
            <FixedHeader title="Brands" newlink="http://localhost:3000/dashboard/inventory/brands/new"/>
            <div className="my-4 p-8">
            <DataTable data={supplier} columns={columns}/>
            </div>
        </div>
    );
}