import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request,{params:{id}}) {
    try {
        const supplier = await db.supplier.findUnique(
            {
                where: {
                    id
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

export async function PUT(request,{params:{id}}) {
    const { title, phone, email, address, contactPerson, supplierCode, paymentTerms, taxID, notes } = await request.json();
    try {
        const supplier = await db.supplier.update(
            {
                where: {
                    id
                },
                data:{
                    title, phone, email, address, contactPerson, paymentTerms, taxID, notes
                }
            }
        )
        return NextResponse.json(supplier)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message: "failed to update a supplier"
        }, {
            status: 500
        })
    }
}