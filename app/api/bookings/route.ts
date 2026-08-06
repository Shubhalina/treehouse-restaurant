import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const booking = await prisma.booking.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        bookingType: body.bookingType,
        date: new Date(body.date),
        time: body.time,
        guests: Number(body.guests),
        budget: body.budget || null,
        message: body.message || null,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Booking saved successfully!",
      booking,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save booking.",
      },
      {
        status: 500,
      }
    );
  }
}