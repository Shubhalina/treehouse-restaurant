export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Restaurant Settings
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">

        <div className="grid gap-6">

          <input
            placeholder="Restaurant Name"
            className="border rounded-lg p-4"
          />

          <input
            placeholder="Phone Number"
            className="border rounded-lg p-4"
          />

          <input
            placeholder="Email Address"
            className="border rounded-lg p-4"
          />

          <textarea
            rows={4}
            placeholder="Restaurant Address"
            className="border rounded-lg p-4"
          />

          <input
            placeholder="Opening Hours"
            className="border rounded-lg p-4"
          />

          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 rounded-lg">
            Save Settings
          </button>

        </div>

      </div>

    </main>
  );
}