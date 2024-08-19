import React from "react";
import AdjustmentForm from "@/components/dashboard/AdjustmentForm";
import { getData } from "@/lib/getData";
export default async function NewAdjustment() {
  const itemsData = getData("items");
  const warehouseData = getData("warehouse");
  const suppliersData = getData("supplier");
  const[items,warehouse,suppliers]= await Promise.all([itemsData,warehouseData,suppliersData])
  return (
    <AdjustmentForm items={items} warehouse={warehouse} suppliers= {suppliers}/>
  );
}