import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,abbreviation}=await request.json();
        const unit = await db.unit.create({
            data:{
                title,
                abbreviation
            }
        })
        console.log(unit);
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message:"failed to create a unit"
    },{
        status:500
    })
    }   
}

export async function GET(request) {
    try {
        const unit = await db.unit.findMany(
            {
                orderBy: {
                    createdAt: 'desc'
                }
            }
        )
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to fetch a unit"
        }, {
            status: 500
        })
    }
}