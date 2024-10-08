import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        const {title,description}=await request.json();
        const category = await db.category.create({
            data:{
                title,
                description
            }
        })
        return NextResponse.json(category)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message:"failed to fetch a category"
    },{
        status:500
    })
    }   
}
export async function GET(request) {
    try {
        const warehouse = await db.category.findMany(
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


export async function DELETE(request){
    try {
        const id = request.nextUrl.searchParams.get("id")
        const deleteCategory = await db.category.delete({
            where:{
                id
            }
        })
        return NextResponse.json(deleteCategory)
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            error,
            message:"failed to delete the category"
    },{
        status:500
    })
    }
}