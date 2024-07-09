import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title}=await request.json();
        const brand = await db.brand.create({
            data:{
                title
            }
        })
        console.log(brand);
        return NextResponse.json(brand)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message:"failed to create a brand"
    },{
        status:500
    })
    }   
}
export async function GET(request) {
    try {
        const brand = await db.brand.findMany(
            {
                orderBy: {
                    createdAt: 'desc'
                }
            }
        )
        return NextResponse.json(brand)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to fetch a brand"
        }, {
            status: 500
        })
    }
}