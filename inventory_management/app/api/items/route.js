import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const items = await request.json();
        const item = await db.item.create({
            data: {
                title: items.title,
                categoryId: items.categoryId,
                sku: items.sku,
                barcode: items.barcode,
                quantity: parseInt(items.qty),
                unitId: items.unitId,
                brandId: items.brandId,
                buyingPrice: parseFloat(items.buyingPrice),
                sellingPrice: parseFloat(items.sellingPrice),
                supplierId: items.supplierID,
                reOrderPoint: parseInt(items.reOrderPoint),
                warehouseId: items.warehouseId,
                imageUrl: items.imageUrl,
                weight: parseFloat(items.weight),
                dimensions: items.dimensions,
                taxrate: parseFloat(items.taxRate),
                description: items.description,
                notes: items.notes
            }
        })
        console.log(item);
        return NextResponse.json(item)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to create a item"
        }, {
            status: 500
        })
    }
}
export async function GET(request) {
    try {
        const warehouse = await db.item .findMany(
            {
                orderBy: {
                    createdAt: 'desc'
                }
            }
        )
        return NextResponse.json(warehouse)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to create a warehouse"
        }, {
            status: 500
        })
    }
}