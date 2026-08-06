import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const menu = await prisma.menu.create({
      data: {
        name: body.name,
        description: body.description,
        category: body.category,
        price: Number(body.price),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Menu item added successfully!",
      menu,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to add menu item.",
      },
      {
        status: 500,
      }
    );
  }
}