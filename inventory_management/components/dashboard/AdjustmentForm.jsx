"use client";
import AddInventoryForm from "@/components/dashboard/AddInventoryForm";
import FormHeader from "@/components/dashboard/FormHeader";
import TransferInventoryForm from "@/components/dashboard/TransferInventoryForm";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
export default function AdjustmentForm({items,warehouse}) {
  const tabs = [
    {
      title: "Add Stocks",
      icon: Plus,
      form:"add"
    },
    {
      title: "Transfer Stocks",
      icon: Minus,
      form:"transfer"
    },
  ];
  const [activeForm,setActiveForm]=useState("add");
  return (
    <div>
      <FormHeader title="New Adjustment" href="/dashboard/inventory/adjustments" />

      <div className="border-b dark:border-gray-700 w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 mx-auto mt-4">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {tabs.map((item, i) => {
            const Icon = item.icon;
            return(
              <li className="me-2" key={i}>
              <button
                onClick={()=>setActiveForm(item.form)}
                className={`${activeForm===item.form?"inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group":"inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 group"}`}
              >
                <Icon className={`${activeForm===item.form?"w-4 h-4 me-2 text-blue-600 dark:text-blue-500":"w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"}`}/>
                {item.title}
              </button>
            </li>
            )
          })}

        </ul>
      </div>
          {activeForm==="add"?<AddInventoryForm items={items} warehouse={warehouse} />:<TransferInventoryForm items={items} warehouse={warehouse} />}
    </div>
  );
}
