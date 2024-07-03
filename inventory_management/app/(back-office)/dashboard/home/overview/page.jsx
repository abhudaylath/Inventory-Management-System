import DashBoardBanner from "@/components/dashboard/DashBoardBanner";
import SalesOverview from "@/components/dashboard/SalesOverview";
import React from "react";

export default function Dashboard(){
    return (
        <div>
            <DashBoardBanner/>
            <SalesOverview/>
            <h2>Dashboard</h2>
        </div>
    );
}