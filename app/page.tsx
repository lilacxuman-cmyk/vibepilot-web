export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-12 max-w-2xl w-full text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Hello, this is my first test
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to my custom webpage! This is my first attempt at creating and deploying a website.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
            Get Started
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
