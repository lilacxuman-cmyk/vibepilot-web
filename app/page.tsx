export default function Home() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  
  // Component for handwriting guide with 4 lines
  const HandwritingGuide = ({ letter }: { letter: string }) => {
    return (
      <div className="relative h-48 w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
        {/* Four writing guide lines */}
        <svg className="absolute w-full h-full" style={{ pointerEvents: 'none' }}>
          {/* Top line (cap height) */}
          <line x1="0" y1="30" x2="100%" y2="30" stroke="#e5e7eb" strokeWidth="2" />
          {/* Upper middle line (x-height top) */}
          <line x1="0" y1="75" x2="100%" y2="75" stroke="#bfdbfe" strokeWidth="2" />
          {/* Lower middle line (x-height bottom/baseline) */}
          <line x1="0" y1="120" x2="100%" y2="120" stroke="#bfdbfe" strokeWidth="2" />
          {/* Bottom line (descender) */}
          <line x1="0" y1="165" x2="100%" y2="165" stroke="#e5e7eb" strokeWidth="2" />
        </svg>

        {/* Letter display area */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-8xl font-bold text-purple-600">
            {letter}
          </div>
        </div>

        {/* Instructions */}
        <div className="absolute bottom-2 left-2 text-xs text-gray-500">
          <span className="block">Cap line</span>
          <span className="block">Mid line</span>
          <span className="block">Base line</span>
        </div>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-5xl w-full">
        <h1 className="text-5xl font-bold text-gray-800 mb-4 text-center">
          Learn English Letters
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Practice writing capital and lowercase letters from A to Z with handwriting guides!
        </p>
        
        {/* Guide Lines Explanation */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded">
          <h3 className="font-bold text-blue-900 mb-2">📝 How to Use the Handwriting Guides:</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>🔴 <strong>Top Line (Red):</strong> Capital letter height</li>
            <li>🔵 <strong>Blue Lines:</strong> Show where lowercase letters sit</li>
            <li>⚫ <strong>Bottom Line (Black):</strong> Descender line for letters like g, p, q</li>
          </ul>
        </div>

        {/* Alphabet Grid with Handwriting Guides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">Practice Writing Each Letter</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alphabet.map((letter, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg p-4 shadow-md hover:shadow-lg transition">
                <div className="mb-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    Letter: <span className="text-purple-600">{letter}</span> / <span className="text-blue-600">{letter.toLowerCase()}</span>
                  </p>
                  <HandwritingGuide letter={letter} />
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Lowercase Guide:</p>
                  <HandwritingGuide letter={letter.toLowerCase()} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Section */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition font-semibold">
            ✏️ Practice Writing
          </button>
          <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition font-semibold">
            🔊 Pronunciation
          </button>
        </div>
      </div>
    </main>
  );
}
