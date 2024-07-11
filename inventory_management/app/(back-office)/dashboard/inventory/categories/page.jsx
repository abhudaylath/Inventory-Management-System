import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function Categories(){
    const data = await getData("categories");
    const columns = ["title","description"]
    return(
        <div>
            <FixedHeader title="Categories" newlink="http://localhost:3000/dashboard/inventory/categories/new"/>
            <div className="my-4 p-8">
            <DataTable data={data} columns={columns} updateLink="categories/update" resourceName="categories"/>
            </div>
        </div>
    );
}