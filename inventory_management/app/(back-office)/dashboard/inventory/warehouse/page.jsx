import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function Warehouse(){
    const supplier = await getData("warehouse");
    const columns = ["title","location","description","warehouseType"]
    return(
        <div> 
            <FixedHeader title="Warehouses" newlink="http://localhost:3000/dashboard/inventory/warehouse/new"/>
            <div className="my-4 p-8">
            <DataTable data={supplier} columns={columns} updateLink="warehouse/update"/>
            </div>
        </div>
    );
}