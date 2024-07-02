import React from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
export default function Layout({ children }) {
    return (
        <div className="flex">
            <Sidebar/>
            <main className="ml-60 w-full bg-slate-100 min-h-screen">
                <Header/>
                {children}
            </main>
        </div>
    );
} 