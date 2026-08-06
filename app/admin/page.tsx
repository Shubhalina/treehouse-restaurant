import { prisma } from "@/lib/prisma";

export default async function BookingsPage() {
  const bookings = await prisma.booking.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Booking Management
        </h1>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          <table className="w-full">

            <thead className="bg-yellow-500 text-gray-900">
              <tr>
                <th className="px-6 py-5 text-left font-bold">Customer</th>
                <th className="px-6 py-5 text-left font-bold">Phone</th>
                <th className="px-6 py-5 text-left">Booking Type</th>
                <th className="px-6 py-5 text-left">Date</th>
                <th className="px-6 py-5 text-left">Time</th>
                <th className="px-6 py-5 text-left">Guests</th>
                <th className="px-6 py-5 text-left">Status</th>
              </tr>
            </thead>

            <tbody>

              {bookings.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="text-center py-12 text-gray-500"
                  >
                    No Bookings Found
                  </td>
                </tr>
              ) : (
                bookings.map((booking: any, index: number) => (
                  <tr
                    key={booking.id}
                    className={`${
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-gray-50"
                    } hover:bg-yellow-50 transition`}
                  >
                    <td className="px-6 py-5 text-gray-900 font-semibold">
                      {booking.name}
                    </td>

                    <td className="px-6 py-5 text-gray-800">
                      {booking.phone}
                    </td>

                    <td className="px-6 py-5 text-gray-800">
                      {booking.bookingType}
                    </td>

                    <td className="px-6 py-5 text-gray-800">
                      {new Date(
                        booking.date
                      ).toLocaleDateString()}
                    </td>

                    <td className="px-6 py-5 text-gray-800">
                      {booking.time}
                    </td>

                    <td className="px-6 py-5 text-gray-800">
                      {booking.guests}
                    </td>

                    <td className="px-6 py-5">
                      <span className="bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {booking.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}