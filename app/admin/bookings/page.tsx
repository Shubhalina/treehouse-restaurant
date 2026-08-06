import { prisma } from "@/lib/prisma";

export default async function BookingsPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Booking Management
      </h1>

      <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
        <table className="min-w-full">
          <thead className="bg-yellow-500 text-black">
            <tr>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Phone</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Booking Type</th>
              <th className="px-6 py-4 text-left">Date</th>
              <th className="px-6 py-4 text-left">Time</th>
              <th className="px-6 py-4 text-left">Guests</th>
              <th className="px-6 py-4 text-left">Budget</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="text-center py-10 text-gray-500"
                >
                  No bookings found.
                </td>
              </tr>
            ) : (
              bookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-6 py-4">{booking.name}</td>

                  <td className="px-6 py-4">{booking.phone}</td>

                  <td className="px-6 py-4">{booking.email}</td>

                  <td className="px-6 py-4">
                    {booking.bookingType}
                  </td>

                  <td className="px-6 py-4">
                    {new Date(booking.date).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4">
                    {booking.time}
                  </td>

                  <td className="px-6 py-4">
                    {booking.guests}
                  </td>

                  <td className="px-6 py-4">
                    {booking.budget || "-"}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}