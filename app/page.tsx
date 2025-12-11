export default function Home() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-12 max-w-4xl w-full">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Learn English Letters
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Practice writing capital and lowercase letters from A to Z!
        </p>
        
        {/* Alphabet Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">The English Alphabet</h2>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-13 gap-3">
            {alphabet.map((letter, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                <div className="text-4xl font-bold text-purple-600 mb-2">{letter}</div>
                <div className="text-2xl text-blue-600">{letter.toLowerCase()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tracing Section */}
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Letter Sequence</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Capital Letters:</p>
              <p className="text-3xl font-bold tracking-wider text-purple-600">
                {alphabet.join(' ')}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <div className="text-center w-full">
              <p className="text-sm text-gray-600 mb-2">Lowercase Letters:</p>
              <p className="text-3xl font-bold tracking-wider text-blue-600">
                {alphabet.join('').toLowerCase().split('').join(' ')}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Section */}
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
            Practice Writing
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition font-semibold">
            Pronunciation
          </button>
        </div>
      </div>
    </main>
  );
}
