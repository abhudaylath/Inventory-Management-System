import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CollapsibleLink({ href, title, setSidebar }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between pl-7 ml-2 pr-4 rounded-lg hover:bg-slate-950 pt-2 pb-2 transition-all duration-300 mr-1"
      onClick={() => setSidebar(false)}
    >
      <span>{title}</span>
      <PlusCircle className="w-4 h-4" />
    </Link>
  );
}
