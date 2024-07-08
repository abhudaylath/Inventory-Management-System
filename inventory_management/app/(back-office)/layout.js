import React from "react";
import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import { Toaster } from "react-hot-toast";
export default function Layout({ children }) {
    return (
        <div className="flex">
            <Sidebar/>
            <main className="ml-56 w-full bg-slate-100 min-h-screen">
                <Header/>
                <Toaster position="top-center" reverseOrder={false}/>
                {children}
            </main>
        </div>
    );
} 