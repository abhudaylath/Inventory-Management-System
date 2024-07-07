import { X } from "lucide-react";
import Link from "next/link";
import react from "react";
export default function FormHeader({title,href}){
    return(
        <div className="flex items-center justify-between py-4 bg-white px-10">
            <h2 className="text-xl font-semibold">{title}</h2>
            <Link href={href}><X/></Link>
        </div>
    );
}