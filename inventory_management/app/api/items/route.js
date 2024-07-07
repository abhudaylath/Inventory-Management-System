import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, categoryID, sku, barcode, qty, unitId, brandId, buyingPrice, sellingPrice, supplierID, reOrderPoint, warehouseId, imageUrl, weight, dimensions, taxRate, description, notes } = await request.json();
        const item = { title, categoryID, sku, barcode, qty, unitId, brandId, buyingPrice, sellingPrice, supplierID, reOrderPoint, warehouseId, imageUrl, weight, dimensions, taxRate, description, notes };
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