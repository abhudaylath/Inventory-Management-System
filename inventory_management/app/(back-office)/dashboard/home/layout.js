import HomeNav from "@/components/dashboard/HomeNav";
import { Divide } from "lucide-react";
import React from "react";

export default function Layout({children}){
    return(
        <div className="">
            <HomeNav/>
            {children}
        </div>
    )
}