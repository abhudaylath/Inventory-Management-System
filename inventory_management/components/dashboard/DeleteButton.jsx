"use client"
import { Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation';
import React from 'react'
import Swal from 'sweetalert2';

export default function DeleteButton({id,endpoint}) {
  const router = useRouter();
    function handleDelete(){
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then(async(result) => {
          if (result.isConfirmed) {
            await fetch(`http://localhost:3000/api/${endpoint}?id=${id}`,{
              method:"DELETE",
            })
            router.refresh();
            Swal.fire({
              title: "Deleted!",
              text: `Your ${endpoint} has been deleted.`,
              icon: "success"
            });
          }
        });
    }
  return (
    <div>
        <button onClick={handleDelete} className="font-medium text-red-600 dark:text-blue-500 flex">
                    <Trash2 className="w-4 h-4" />
                  </button>
    </div>
  )
}
