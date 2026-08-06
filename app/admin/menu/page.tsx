"use client";

import { useState } from "react";

export default function NewMenuPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      description: (form.elements.namedItem("description") as HTMLTextAreaElement).value,
      category: (form.elements.namedItem("category") as HTMLInputElement).value,
      price: Number(
        (form.elements.namedItem("price") as HTMLInputElement).value
      ),
    };

    const res = await fetch("/api/menu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    alert(result.message);

    form.reset();

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Add Menu Item
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            name="name"
            placeholder="Food Name"
            className="w-full border rounded-lg p-3"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            className="w-full border rounded-lg p-3"
            rows={4}
            required
          />

          <input
            name="category"
            placeholder="Category"
            className="w-full border rounded-lg p-3"
            required
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            className="w-full border rounded-lg p-3"
            required
          />

          <button
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-lg"
          >
            {loading ? "Saving..." : "Add Menu"}
          </button>
        </form>
      </div>
    </main>
  );
}