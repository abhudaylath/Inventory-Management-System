import React from "react";
import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";
export default async function NewAdjustment() {
  const itemsData = getData("items");
  const warehouseData = getData("warehouse");
  const[items,warehouse]= await Promise.all([itemsData,warehouseData])
  return (
    <AdjustmentForm items={items} warehouse={warehouse}/>
  );
}
