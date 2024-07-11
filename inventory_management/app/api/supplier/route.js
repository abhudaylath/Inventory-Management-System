import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const { title, phone, email, address, contactPerson, supplierCode, paymentTerms, taxID, notes } = await request.json(); 
        const supplier = await db.supplier.create({
            data: {
                title, phone, email, address, contactPerson, supplierCode, paymentTerms, taxID, notes
            }
        })
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to create a supplier"
        }, {
            status: 500
        })
    }
}

export async function GET(request) {
    try {
        const supplier = await db.supplier.findMany(
            {
                orderBy: {
                    createdAt: 'desc'
                }
            }
        )
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to fetch a supplier"
        }, {
            status: 500
        })
    }
}

export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id")
        const deleteBrand = await db.supplier.delete({
            where:{
                id
            }
        })
        return NextResponse.json(deleteBrand)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message:"failed to delete the supplier"
    },{
        status:500
    })
    }
}