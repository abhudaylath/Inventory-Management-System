import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";
import DeleteButton from "./DeleteButton";

export default function DataTable({ data = [], columns = [], updateLink , resourceName}) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
     {
      data.length>0?(
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {columns.map((item, i) => {
                return (
                  <th key={i} scope="col" className="px-6 py-3">
                    {item.includes(".")?(item.split(".")):(item==="imageUrl"?("Image"):(item))}
                  </th>
                );
              })}
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  {columns.map((colName, i) => {
                    return (
                      <td key={i} className="px-6 py-4">
                        {colName.includes(".")?(
                          colName.split(".").reduce((obj,key)=>obj[key],item)
                        ):(
                        colName === "imageUrl" ? (
                          <img
                            src={item.imageUrl}
                            alt={`Image for ${item.title}`}
                            className="w-10 h-10 rounded-full"
                          />
                        ) : colName === "createdAt" || colName === "updatedAt" ? (
                          new Date(item[colName]).toLocaleString()
                        ) : (
                          item[colName]
                        ))}
                      </td>
                    );
                  })}
                  <td className="px-6 py-4 text-right flex space-x-2 items-end justify-end">
                    <Link
                      href={`${updateLink}/${item.id}`}
                      className="font-medium text-blue-600 dark:text-blue-500 flex "
                    >
                      <Pencil className="w-4 h-4" />
                    </Link>
                    <DeleteButton id={item.id} endpoint={resourceName}/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        ):(
          <p className="p-4 text-2xl bg-white text-center">There is no data to display</p>
        )
     }
    </div>
  );
}
