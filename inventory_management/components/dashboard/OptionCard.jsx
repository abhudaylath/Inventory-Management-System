import { Shirt } from "lucide-react";
import Link from "next/link";
import React from "react";
export default function OptionCard({ options}) {
  let { title, p,icon:Icon, href, button, enabled } = options;
  return (
    <div className="shadow-xl bg-white flex flex-col gap-4 items-center justify-center p-10 mr-4 mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="">
        <Icon strokeWidth={"0.5px"} className="w-28 h-28" />
      </div>
      <p>{p}</p>
      {enabled ? (
        <Link
          href={href}
          className="bg-blue-600 rounded-lg flex p-1 items-center text-white space-x-2 px-2"
        >
          <span>{button}</span>
        </Link>
      ) : (
        <button className="bg-blue-600 rounded-lg flex p-1 items-center text-white space-x-2 px-2" >
          Enable
        </button>
      )}
    </div>
  );
}
