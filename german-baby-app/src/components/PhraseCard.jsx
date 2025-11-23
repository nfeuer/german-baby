import { useState } from 'react';
import RelatedVocabulary from './RelatedVocabulary';

export default function PhraseCard({ phrase, topic, onToggleFavorite, isFavorite, onMarkLearned, isLearned, currentMonth }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleFlip = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const hasVocabulary = phrase.relatedVocabulary && phrase.relatedVocabulary.length > 0;
  const cardHeight = hasVocabulary ? 'min-h-96' : 'h-64';

  return (
    <div className={`perspective-1000 ${cardHeight}`}>
      <div
        className={`relative w-full h-full cursor-pointer transition-transform duration-600 card-flip ${
          isFlipped ? 'flipped' : ''
        }`}
        onClick={handleFlip}
      >
        {/* Front of card - English */}
        <div className="absolute w-full h-full card-front">
          <div
            className={`w-full h-full rounded-2xl shadow-lg p-6 flex flex-col justify-between ${topic.color} border-2 border-gray-200 hover:shadow-xl transition-shadow`}
          >
            <div className="flex justify-between items-start">
              <span className="text-4xl">{topic.icon}</span>
              <div className="flex gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(phrase.id);
                  }}
                  className={`text-2xl transition-transform hover:scale-110 ${
                    isFavorite ? 'animate-bounce-gentle' : ''
                  }`}
                >
                  {isFavorite ? '⭐' : '☆'}
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkLearned(phrase.id);
                  }}
                  className={`text-2xl transition-transform hover:scale-110`}
                >
                  {isLearned ? '✅' : '⬜'}
                </button>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <p className="text-3xl font-bold text-gray-800 text-center">
                {phrase.english}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600 italic">{phrase.context}</p>
              <p className="text-xs text-gray-500 mt-2">Click to see German 🇩🇪</p>
            </div>
          </div>
        </div>

        {/* Back of card - German */}
        <div className="absolute w-full h-full card-back">
          <div
            className={`w-full h-full rounded-2xl shadow-lg p-6 flex flex-col ${topic.color} border-2 border-gray-200 ${hasVocabulary ? 'overflow-y-auto' : 'justify-between'}`}
          >
            <div className="flex justify-between items-start">
              <div className="flex-1"></div>
              <span className="text-4xl">{topic.icon}</span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-4 py-4">
              <p className="text-4xl font-bold text-gray-800 text-center">
                {phrase.german}
              </p>
              <p className="text-xl text-gray-600 font-mono bg-white/50 px-4 py-2 rounded-lg">
                {phrase.pronunciation}
              </p>
              <p className="text-sm text-gray-600">{phrase.english}</p>
            </div>

            {/* Related Vocabulary Section */}
            <div onClick={(e) => e.stopPropagation()}>
              <RelatedVocabulary
                vocabulary={phrase.relatedVocabulary}
                currentMonth={currentMonth}
              />
            </div>

            <div className="text-center mt-4">
              <p className="text-xs text-gray-500">Click to flip back</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
