import Link from "next/link";
import React from "react";
export default function SubscriptionCard() {
  return (
    <div className="p-2">
      <div className=" rounded-lg mt-20 bg-slate-900">
        <div className="border-b border-slate-400 p-3">
          <p className="text-sm border-l-2 border-yellow-400 pl-2">
            Your premium plan's trial expires in{" "}
            <span className="text-yellow-400">13 days</span>.
          </p>
        </div>
        <div className="flex text-sm">
            <button className="border-r border-slate-400 p-2">Change Plan</button>
            <Link className="p-2" href="">Upgrade</Link>
        </div>
      </div>
    </div>
  );
}
