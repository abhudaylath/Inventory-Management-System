"use client";
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function HomeNav() {
  const pathName = usePathname();
  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview",
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Recent Updates",
      href: "/dashboard/home/updates",
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
    },
  ];
  return (
    <div>
      <div className="h-32 bg-slate-200 border-b border-slate-400">
        <div className="flex p-5 space-x-3">
          <div className="flex h-11 w-11 bg-white rounded-lg items-center justify-center">
            <Building2 />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-slate-700">
              Hello, Parimal Contractor
            </p>
            <span className="text-sm">Parimal</span>
          </div>
        </div>
        <nav className="sticky mt-5 px-5 flex space-x-4">
          {navLinks.map((item,i) => {
            return (
              <Link key={i}
                href={item.href}
                className={`${
                  pathName === item.href
                    ? " border-b-2 border-blue-600 text-black"
                    : ""
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}