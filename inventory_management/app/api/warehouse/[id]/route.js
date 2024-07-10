import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const warehouse = await db.warehouse.findUnique(
            {
                where: {
                    id
                }
            } 
        )
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to fetch a warehouse"
        }, {
            status: 500
        })
    }
}

export async function PUT(request,{params:{id}}) {
    const {title,location,description,warehouseType}=await request.json();
    try {
        const warehouse = await db.warehouse.update(
            {
                where: {
                    id
                },
                data:{
                    title,location,description,warehouseType
                }
            }
        )
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to update a warehouse"
        }, {
            status: 500
        })
    }
}