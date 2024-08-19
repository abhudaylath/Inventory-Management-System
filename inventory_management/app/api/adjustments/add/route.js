import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { itemId, addStockQty, warehouseId, notes, referenceNumber, supplierId } = await request.json();

        const itemToUpdate = await db.item.findUnique({
            where: {
                id: itemId,
            }
        })
        const newQty = parseInt(itemToUpdate.quantity) + parseInt(addStockQty);
        const updateItem = await db.item.update({
            where: {
                id: itemId
            },
            data: {
                quantity: newQty
            }
        })

        const warehouse = await db.warehouse.findUnique({
            where: {
                id: warehouseId
            }
        })

        const newStock = parseInt(warehouse.stockQty) + parseInt(addStockQty)

        const updatedWarehouse = await db.warehouse.update({
            where: {
                id: warehouseId
            },
            data: {
                stockQty: newStock
            }
        })


        const adjustment = await db.addStockAdjustment.create({
            data: {
                itemId,
                addStockQty,
                warehouseId,
                referenceNumber,
                notes,
                supplierId
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
        const brand = await db.AddStockAdjustment.findMany(
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

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id")
        const deleteBrand = await db.AddStockAdjustment.delete({
            where: {
                id
            }
        })
        return NextResponse.json(deleteBrand)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to delete the adjustment"
        }, {
            status: 500
        })
    }
}