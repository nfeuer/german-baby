export default function RelatedVocabulary({ vocabulary, currentMonth }) {
  if (!vocabulary || vocabulary.length === 0) {
    return null;
  }

  // Filter vocabulary based on baby's current age
  const ageAppropriate = vocabulary.filter((item) => item.minMonth <= currentMonth);

  if (ageAppropriate.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 pt-4 border-t border-gray-300">
      <h4 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
        <span>📚</span> Related Vocabulary
      </h4>
      <div className="grid grid-cols-1 gap-2">
        {ageAppropriate.map((item, index) => (
          <div
            key={index}
            className="bg-white/50 rounded-lg p-2 text-sm hover:bg-white/80 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <span className="font-medium text-gray-800">{item.english}</span>
                <span className="mx-2 text-gray-400">→</span>
                <span className="font-bold text-gray-900">{item.german}</span>
              </div>
            </div>
            <div className="text-xs text-gray-600 font-mono mt-1">
              {item.pronunciation}
            </div>
          </div>
        ))}
      </div>
      {vocabulary.length > ageAppropriate.length && (
        <p className="text-xs text-gray-500 mt-2 italic">
          + {vocabulary.length - ageAppropriate.length} more items unlocked as baby grows
        </p>
      )}
    </div>
  );
}
