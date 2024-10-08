import CreateItemForm from "@/components/dashboard/CreateItemForm";
import FormHeader from "@/components/dashboard/FormHeader";
import { getData } from "@/lib/getData";
import React from "react";
export default async function NewItem({initialData={}, isUpdate=false}) {
  const categoriesData = await getData("categories")
  const unitsData = await getData("units")
  const brandsData = await getData("brands")
  const warehousesData = await getData("warehouse")
  const suppliersData = await getData("supplier") 
  const [categories,units,brands,warehouses,suppliers]=await Promise.all([categoriesData,unitsData,brandsData,warehousesData,suppliersData])
  return (
    <div>
      <FormHeader title={isUpdate?"Update Item":"New Item"} href="/dashboard/inventory/items"/>
      <CreateItemForm categories={categories} brands={brands} warehouses={warehouses} units={units} suppliers={suppliers} initialData={initialData} isUpdate={isUpdate}/> 
    </div>
  ); 
}  