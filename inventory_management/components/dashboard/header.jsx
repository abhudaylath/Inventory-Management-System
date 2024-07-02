import { Bell, ChevronDown, History, Plus, Settings, Users2 } from "lucide-react";
import React from "react";
import SearchInput from "./SearchInput";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-gray-100 h-10 flex items-center justify-between px-8 border-b border-slate-200">
      <div className="flex gap-3">
        <button>
          <History />
        </button>
        <SearchInput />
      </div>
      <div className="flex">
        <div className="pt-1 pr-3 border-r border-gray-300 ">
          <button className="p-1 rounded-lg bg-blue-600">
            <Plus className="text-slate-50 w-3 h-3" />
          </button>
        </div>
        <div className="  flex pr-2 border-r border-gray-300 space-x-2">
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Users2 className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Bell className="text-slate-900 w-4 h-4" />
          </button>
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3">
            <button className="flex pl-1 items-center">
                <span>abhuday</span>
                <ChevronDown className="w-4 h-4 "/>
            </button>
            <button>
                <Image src="/public/profile.png" alt="profile pic" width={360} height={355} className="rounded-full w-8 h-8 border-slate-900"/>
            </button>
        </div>
      </div>
    </div>
  );
}
