import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try { 
        const items = await request.json();

        const warehouse = await db.warehouse.findUnique({
            where:{
                id:items.warehouseId
            }
        })

        const newStock = parseInt(warehouse.stockQty)+parseInt(items.qty)

        const updatedWarehouse = await db.warehouse.update({
            where:{
                id:items.warehouseId
            },
            data:{
                stockQty:newStock
            }
        })

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
                },
                include:{
                    category:true,
                    supplier:true,
                    unit:true,
                    brand:true,
                    warehouse:true
                }
            }
        )
        return NextResponse.json(warehouse)
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


export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id")
        const deleteBrand = await db.item.delete({
            where:{
                id
            }
        })
        return NextResponse.json(deleteBrand)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message:"failed to delete the item"
    },{
        status:500
    })
    }
}