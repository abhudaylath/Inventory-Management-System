"use client"
import React from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import Link from "next/link";
import { ChevronRight, PlusCircle } from "lucide-react";
export default function SidebarDropDownLinks({ title, links, icon:Icon, newlink}) {
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
            <Link
              href={item.href}
              key={i}
              className="flex items-center justify-between pl-7 ml-2 pr-4 rounded-lg hover:bg-slate-950 pt-2 pb-2 transition-all duration-300 mr-1"
            >
              <span>{item.title}</span>
              <PlusCircle className="w-4 h-4" />
            </Link>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
