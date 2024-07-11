import React from "react";
import SalesActivityCard from "./SalesActivityCard";
import InventorySummaryCard from "./InventorySummaryCard";
export default function SalesOverview() {
  return (
    <div className="bg-blue-100  border-b border-slate-600 grid grid-cols-12">
      <div className="col-span-full lg:col-span-8 border-r border-slate-300 px-8 py-10">
        <h2 className="mb-6 text-xl">Sales Activity</h2>
        <SalesActivityCard/>
      </div>
      <div className=" col-span-full lg:col-span-4 flex flex-col pl-12 px-8 py-10 ">
        <h2 className="mb-6 text-xl">Inventory Summary</h2>
        <InventorySummaryCard/>
      </div>
    </div>
  );
}
