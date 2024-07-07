"use client"
import {
  BaggageClaim,
  BarChart,
  Cable,
  ChevronLeft,
  File,
  Forklift,
  Home,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import SubscriptionCard from "./subscriptionCard";
import SidebarDropDownLinks from "./SidebarDropDownLinks";
export default function Sidebar() {
  const InventoryLinks=[
    {
      title:"Items",
      href:"/dashboard/inventory"
    },
    {
      title:"Categories",
      href:"/dashboard/inventory"
    },
    {
      title:"Brands",
      href:"/dashboard/inventory"
    },
    {
      title:"Units",
      href:"/dashboard/inventory"
    },
    {
      title:"Warehouse",
      href:"/dashboard/inventory"
    },
    {
      title:"Inventory Adjustments",
      href:""
    }
  ]
  const SalesLinks=[
    {
      title:"Customers",
      href:""
    },
    {
      title:"Sales Order",
      href:""
    },
    {
      title:"Packages",
      href:""
    },
    {
      title:"Shipments",
      href:""
    },
    {
      title:"Invoices",
      href:""
    },
    {
      title:"Sales Receipt",
      href:""
    },
    {
      title:"Payments Received",
      href:""
    },
    {
      title:"Sales Return",
      href:""
    },
    {
      title:"Credit Notes",
      href:""
    }
  ]
  return (
    <div className="w-56 bg-slate-800 min-h-screen text-slate-50 fixed">
      <div className="flex flex-col">
        <div className="flex space-x-2 items-center bg-slate-950 py-3 px-4">
          <Forklift />
          <span className="font-semibold text-xl">Inventory</span>
        </div>
        <nav className="flex flex-col">
          <Link
            className="flex items-center p-3 space-x-2 bg-blue-600 rounded-md"
            href=""
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <SidebarDropDownLinks title="Inventory" links={InventoryLinks} icon={BaggageClaim}/>
          <SidebarDropDownLinks links={SalesLinks} icon={ShoppingCart} title="Sales"/>
          <button className="flex items-center p-3 space-x-2">
            <ShoppingBag className="w-4 h-4" />
            <span>Purchases</span>
          </button>
          <Link className="flex items-center p-3 space-x-2" href="">
            <Cable className="w-4 h-4" />
            <span>Integrations</span>
          </Link>
          <Link className="flex items-center p-3 space-x-2" href="">
            <BarChart className="w-4 h-4" />
            <span>Reports</span>
          </Link>
          <Link className="flex items-center p-3 space-x-2" href="">
            <File className="w-4 h-4" />
            <span>Documentation</span>
          </Link>
        </nav>
        <SubscriptionCard />
        <div className="py-3">
          <button className="flex w-full items-center bg-slate-950 py-3 px-4 justify-center">
            <ChevronLeft className="" />
          </button>
        </div>
      </div>
    </div>
  );
}