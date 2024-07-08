import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { transferStockQty, warehouseId, referenceNumber, notes } = await request.json();
        const adjustment = { transferStockQty, warehouseId, referenceNumber, notes };
        console.log(adjustment);
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