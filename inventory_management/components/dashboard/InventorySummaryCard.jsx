import React from "react";
export default function InventorySummaryCard(){
    const InventorySummary = [
        {
          title: "Quantity in hand",
          number: 0,
        },
        {
          title: "Quantity to be received",
          number: 0,
        },
      ];
    return(
        <div>
            {InventorySummary.map((item, i) => {
          return (
            <div key={i} className="rounded-lg border border-slate-200 hover:border-blue-500 bg-white items-center cursor-pointer flex justify-between p-2 mb-3">
              <span className="uppercase text-sm">{item.title}</span>
              <span className="text-2xl font-semibold text-slate-500">{item.number}</span>
            </div>
          );
        })}
        </div>
    )
}