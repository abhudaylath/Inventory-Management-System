import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
    try {
        const item = await db.item.findUnique(
            {
                where: {
                    id
                }
            }
        )
        return NextResponse.json(item)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to fetch a item"
        }, {
            status: 500
        })
    }
}

export async function PUT(request, { params: { id } }) {
    const items = await request.json();
    try {
        const item = await db.item.update(
            {
                where: {
                    id
                },
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
            }
        )
        return NextResponse.json(item)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to update a item"
        }, {
            status: 500
        })
    }
}