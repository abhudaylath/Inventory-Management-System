import FixedHeader from "@/components/dashboard/FixedHeader";
import OptionCard from "@/components/dashboard/OptionCard";
import {  Box, Boxes, NotepadText, Shapes, Shirt } from "lucide-react";
import React from "react";

export default function Inventory() {
    const options=[
        {
            title:"Item Groups",
            p:"Create multiple variants of the same item using Item Groups",
            icon:Boxes,
            href:"#",
            button:"New Item Group",
            enabled:false
        },
        {
            title:"Items",
            p:"Create standalone items and services that you buy and sell",
            icon:Box,
            href:"#",
            button:"New Item",
            enabled:true
        },
        {
            title:"Composite Items",
            p:"Bundle different items together and sell them as kits",
            icon:Shapes,
            href:"#",
            button:"New Composite Item",
            enabled:true
        },
        {
            title:"Price Lists",
            p:"Tweak your item prices for specific contracts or transactions",
            icon:NotepadText,
            href:"#",
            button:"New Item Group",
            enabled:false
        }
    ]
  return (
    <div>
      <FixedHeader newlink="/dashboard/inventory/items/new" />
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 ml-16">
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
