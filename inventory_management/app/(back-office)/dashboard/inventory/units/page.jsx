import DataTable from "@/components/dashboard/DataTable";
import FixedHeader from "@/components/dashboard/FixedHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function Units(){
    const supplier = await getData("units");
    const columns = ["title","abbreviation"]
    return(
        <div>
            <FixedHeader title="Units" newlink="http://localhost:3000/dashboard/inventory/units/new"/>
            <div className="my-4 p-8">
            <DataTable data={supplier} columns={columns}/>
            </div>
        </div>
    );
}