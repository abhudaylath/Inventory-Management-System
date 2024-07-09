import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function Adjustments(){
    const addAjustments = await getData("adjustments/add");
    const transferAjustments = await getData("adjustments/transfer");
    const columns = ["referenceNumber","addStockQty"]
    const columns1 = ["referenceNumber","transferStockQty"]
    return(
        <div>
            <FixedHeader title="Brands" newlink="http://localhost:3000/dashboard/inventory/adjustments/new"/>
            <div className="my-4 p-8">
                <h2 className="p-2 text-xl font-semibold">Stock Increment Adjustment</h2>
            <DataTable data={addAjustments} columns={columns}/>
            </div>
            <div className="my-4 p-8">
            <h2 className="p-2 text-xl font-semibold">Stock Transfer Adjustment</h2>
            <DataTable data={transferAjustments} columns={columns1}/>
            </div>
        </div>
    );
}