import React from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
export default function SalesActivityCard() {
  const SalesActivity = [
    {
      title: "To be packed",
      number: 0,
      unit: "Qty",
      href: "#",
      color: "text-blue-600",
    },
    {
      title: "To be shipped",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-red-600",
    },
    {
      title: "To be delievered",
      number: 0,
      unit: "Pkgs",
      href: "#",
      color: "text-green-600",
    },
    {
      title: "To be invoiced",
      number: 0,
      unit: "Qty",
      href: "#",
      color: "text-yellow-600",
    },
  ];
  return (
    <div className="grid grid-cols-4">
      {SalesActivity.map((item, i) => {
        return (
          <Link
            href={item.href}
            key={i}
            className="shadow flex flex-col rounded-lg border border-slate-200 hover:border-blue-500 bg-white p-4 items-center cursor-pointer gap-3 transition-all duration-300 mr-3"
          >
            <h4 className={`text-4xl ${item.color}`}>{item.number}</h4>
            <small className="text-slate-500">{item.unit}</small>
            <div className="flex items-center">
              <CheckCircle className="w-3 h-3 text-slate-500" />
              <span className="text-slate-500 text-sm">{item.title}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
