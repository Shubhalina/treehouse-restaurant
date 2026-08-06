export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-8">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-2xl font-bold text-yellow-500">
          TREE HOUSE
        </h2>

        <p className="mt-4 md:mt-0">
          © {new Date().getFullYear()} TREE HOUSE Restaurant.
          All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}