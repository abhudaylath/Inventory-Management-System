"use client"
import React from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import Link from "next/link";
import { ChevronRight, PlusCircle } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";
import { set } from "react-hook-form";
export default function SidebarDropDownLinks({ title, links, icon:Icon,setSidebar }) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center justify-between w-full">
      <div className="flex items-center p-3 space-x-2">
        <Icon className="w-4 h-4" />
        <span>{title}</span>
        </div>
        <ChevronRight className="w-4 h-4 mr-2" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        {links.map((item, i) => {
          return (
            <CollapsibleLink key={i} title={item.title} href={item.href} setSidebar={setSidebar}/>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
