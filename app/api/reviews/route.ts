import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("GET /api/reviews error:", error);

    return NextResponse.json(
      { error: "Failed to load reviews" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, review, rating } = body;

    if (!name?.trim() || !review?.trim()) {
      return NextResponse.json(
        { error: "Name and review are required." },
        { status: 400 }
      );
    }

    const numericRating = Number(rating);

    if (
      !Number.isInteger(numericRating) ||
      numericRating < 1 ||
      numericRating > 5
    ) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5." },
        { status: 400 }
      );
    }

    const newReview = await prisma.review.create({
      data: {
        name: name.trim(),
        review: review.trim(),
        rating: numericRating,
      },
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error("POST /api/reviews error:", error);

    return NextResponse.json(
      { error: "Failed to submit review." },
      { status: 500 }
    );
  }
}