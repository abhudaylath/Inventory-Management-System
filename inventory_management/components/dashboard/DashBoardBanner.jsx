"use client";
import { CreditCard, X } from "lucide-react";
import { useState } from "react";
import React from "react";
export default function DashBoardBanner() {
  const [state, setState] = useState(false);
  return (
    <div
      className={`${
        state ? "hidden" : "flex gap-8 py-6 px-16 items-center relative"
      }`}
    >
      <CreditCard className="w-16 h-16 text-slate-500" />
      <div className="flex flex-col w-1/2">
        <h2 className="font-bold text-xl">Start accepting online payments.</h2>
        <p>
          Businesses are moving towards online payments as they are easy, secure
          and fast.Try them for your business today.
        </p>
      </div>
      <button className="bg-blue-700 text-white py-2.5 px-8 rounded-lg ml-28">
        ENABLE
      </button>
      <button
        onClick={() => setState(true)}
        className="text-slate-600 absolute top-5 right-5"
      >
        <X />
      </button>
    </div>
  );
}
