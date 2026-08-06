export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Gallery Management
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Upload Images
          </h2>

          <p className="text-gray-500 mt-2">
            Drag & Drop restaurant images here
          </p>

          <input
            type="file"
            multiple
            className="mt-6 block w-full"
          />

          <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg">
            Upload Images
          </button>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1,2,3,4,5,6].map((item)=>(
            <div
              key={item}
              className="bg-gray-200 h-48 rounded-lg flex items-center justify-center"
            >
              Image {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}