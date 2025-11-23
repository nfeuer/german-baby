import { useState } from 'react';

export default function Lullaby({ lullaby, topic }) {
  const [showPronunciation, setShowPronunciation] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(0);

  const verse = lullaby.verses[currentVerse];
  const hasMultipleVerses = lullaby.verses.length > 1;

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl shadow-lg p-6 border-2 border-indigo-200">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">{topic?.icon || '🎵'}</span>
            <h3 className="text-2xl font-bold text-gray-800">{lullaby.title}</h3>
          </div>
          <p className="text-lg text-gray-600 italic">{lullaby.englishTitle}</p>
          <p className="text-sm text-gray-500 mt-1">{lullaby.theme}</p>
        </div>
      </div>

      {/* Verse Navigation */}
      {hasMultipleVerses && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <button
            onClick={() => setCurrentVerse(Math.max(0, currentVerse - 1))}
            disabled={currentVerse === 0}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentVerse === 0
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-500 text-white hover:bg-indigo-600'
            }`}
          >
            ← Previous
          </button>
          <span className="text-gray-700 font-medium">
            Verse {currentVerse + 1} of {lullaby.verses.length}
          </span>
          <button
            onClick={() => setCurrentVerse(Math.min(lullaby.verses.length - 1, currentVerse + 1))}
            disabled={currentVerse === lullaby.verses.length - 1}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              currentVerse === lullaby.verses.length - 1
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-indigo-500 text-white hover:bg-indigo-600'
            }`}
          >
            Next →
          </button>
        </div>
      )}

      {/* German Lyrics */}
      <div className="bg-white/70 rounded-xl p-5 mb-4">
        <h4 className="text-sm font-semibold text-indigo-700 mb-2">🇩🇪 German</h4>
        <p className="text-lg text-gray-800 whitespace-pre-line leading-relaxed font-serif">
          {verse.german}
        </p>
      </div>

      {/* English Translation */}
      <div className="bg-white/70 rounded-xl p-5 mb-4">
        <h4 className="text-sm font-semibold text-blue-700 mb-2">🇬🇧 English</h4>
        <p className="text-lg text-gray-700 whitespace-pre-line leading-relaxed italic">
          {verse.english}
        </p>
      </div>

      {/* Pronunciation Toggle */}
      <button
        onClick={() => setShowPronunciation(!showPronunciation)}
        className="w-full mb-4 px-4 py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all font-medium"
      >
        {showPronunciation ? '🔽 Hide' : '🔊 Show'} Pronunciation Guide
      </button>

      {/* Pronunciation Guide */}
      {showPronunciation && (
        <div className="bg-purple-50 rounded-xl p-5 border-2 border-purple-200">
          <h4 className="text-sm font-semibold text-purple-700 mb-2">Pronunciation</h4>
          <p className="text-base text-gray-700 whitespace-pre-line leading-relaxed font-mono">
            {verse.pronunciation}
          </p>
        </div>
      )}

      {/* Topic Badge */}
      <div className="mt-4 flex items-center gap-2">
        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full text-xs font-medium">
          Topic: {lullaby.topic}
        </span>
        <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full text-xs font-medium">
          From {lullaby.startMonth} months
        </span>
      </div>
    </div>
  );
}
