"use client"
import React, { useState } from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { Toaster } from "react-hot-toast";
export default function Layout({ children }) {
    const [sidebar,setSidebar]=useState(false);
    return (
        <div className="flex">
            <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
            <main className="lg:ml-56 w-full bg-slate-100 min-h-screen ml-0">
                <Header setSidebar={setSidebar}/>
                <Toaster position="top-center" reverseOrder={false}/>
                {children}
            </main>
        </div>
    );
} 