import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function FixedHeader({newlink,title}) {
  return (
    <div className="flex justify-between px-5 py-6 bg-white">
      <button className="font-semibold text-xl">{title}</button>
      <div className="flex space-x-4">
        <Link href={newlink} className="bg-blue-600 rounded-lg flex p-1 items-center text-white space-x-2 px-2">
          <Plus className="w-4 h-4" />
          <span>New</span>
        </Link>

        <div className="flex rounded-md overflow-hidden">
          <button className="bg-gray-300 p-2 border-r border-slate-400">
            <List className="w-4 h-4"/>
          </button>
          <button className="bg-gray-200 p-2">
            <LayoutGrid className="w-4 h-4"/>
          </button>
        </div>
        <button className="bg-gray-200 p-2 rounded-md">
            <MoreHorizontal className="w-4 h-4"/>
        </button>
        <button className="bg-orange-500 rounded-md p-2">
            <HelpCircle className="w-5 h-5"/>
        </button>
      </div>
    </div>
  );
}
