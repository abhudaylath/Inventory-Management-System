import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const unit = await db.unit.findUnique(
            {
                where: {
                    id
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

export async function PUT(request,{params:{id}}) {
    const {title,abbreviation}=await request.json();
    try {
        const unit = await db.unit.update(
            {
                where: {
                    id
                },
                data:{
                    title,abbreviation
                }
            }
        )
        return NextResponse.json(unit)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to update a unit"
        }, {
            status: 500
        })
    }
}