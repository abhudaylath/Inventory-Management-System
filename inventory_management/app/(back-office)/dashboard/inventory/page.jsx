import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import {  Box, Boxes, Component, NotepadText, Shapes, Shirt, ShirtIcon } from "lucide-react";
import React from "react";

export default function Inventory() {
    const options=[
        {
            title:"Items",
            p:"Create standalone items and services that you buy and sell",
            icon:Shirt,
            href:"/dashboard/inventory/items/new",
            button:"New Item",
            enabled:true
        },
        {
            title:"Categories",
            p:"Create multiple variants of the same item using Item Groups",
            icon:Boxes,
            href:"/dashboard/inventory/categories/new",
            button:"New Category",
            enabled:true
        },
        {
            title:"Brands",
            p:"Bundle different items together and sell them as kits",
            icon:Shapes,
            href:"/dashboard/inventory/brands/new",
            button:"New Brand",
            enabled:true
        },
        {
            title:"Units",
            p:"Tweak your item prices for specific contracts or transactions",
            icon:Component,
            href:"/dashboard/inventory/units/new",
            button:"New Unit",
            enabled:true
        },
        {
            title:"Warehouses",
            p:"Tweak your item prices for specific contracts or transactions",
            icon:NotepadText,
            href:"/dashboard/inventory/warehouse/new",
            button:"New Warehouse",
            enabled:true
        },
        {
            title:"Inventory Adjustments",
            p:"Transfer stock from the Main Warehouse",
            icon:NotepadText,
            href:"/dashboard/inventory/adjustments/new",
            button:"New Adjustment",
            enabled:true
        }
    ]
  return (
    <div>
      <FixedHeader newlink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 mt-6 ml-16">
        {
            options.map((item,i)=>{
                return(
                    <OptionCard options={item}/>
                )
            })
        }
      </div>
    </div>
  );
}
