import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function Supplier(){
    const supplier = await getData("supplier");
    const columns = ["title","phone","email","address"]
    return(
        <div>
            <FixedHeader title="supplier" newlink="http://localhost:3000/dashboard/inventory/supplier/new"/>
            <div className="my-4 p-8">
            <DataTable data={supplier} columns={columns} updateLink="supplier/update" resourceName="supplier"/>
            </div>
        </div>
    );
}  