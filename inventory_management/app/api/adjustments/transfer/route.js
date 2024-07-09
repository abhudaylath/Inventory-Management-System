import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { itemId, 
            transferStockQty, 
            givingWarehouseId, 
            receivingWarehouseId,
            referenceNumber, 
            notes } = await request.json();
        const adjustment = await db.transferStockAdjustment.create({
            data: {
                itemId, 
                transferStockQty, 
                givingWarehouseId, 
                receivingWarehouseId,
                referenceNumber, 
                notes
            }
        })
        return NextResponse.json(adjustment)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to create a adjustment"
        }, {
            status: 500
        })
    }
}
export async function GET(request) {
    try {
        const brand = await db.TransferStockAdjustment.findMany(
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
            message: "failed to fetch a Adjustment"
        }, {
            status: 500
        })
    }
}