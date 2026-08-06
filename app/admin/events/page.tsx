export default function EventsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Event Management
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="grid gap-5">

          <input
            placeholder="Event Name"
            className="border rounded-lg p-4"
          />

          <textarea
            rows={5}
            placeholder="Event Description"
            className="border rounded-lg p-4"
          />

          <input
            type="date"
            className="border rounded-lg p-4"
          />

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-lg">
            Create Event
          </button>

        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">
          Upcoming Events
        </h2>

        <div className="space-y-4">

          <div className="border rounded-lg p-5">
            Birthday Celebration
          </div>

          <div className="border rounded-lg p-5">
            Wedding Reception
          </div>

          <div className="border rounded-lg p-5">
            Live Music Night
          </div>

        </div>

      </div>
    </main>
  );
}