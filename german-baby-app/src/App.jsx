import { useState, useEffect } from 'react';
import MonthSelector from './components/MonthSelector';
import TopicFilter from './components/TopicFilter';
import PhraseCard from './components/PhraseCard';
import ProgressBar from './components/ProgressBar';
import phrasesData from './data/phrases.json';

function App() {
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [favorites, setFavorites] = useState(new Set());
  const [learned, setLearned] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('germanBabyFavorites');
    const savedLearned = localStorage.getItem('germanBabyLearned');
    if (savedFavorites) setFavorites(new Set(JSON.parse(savedFavorites)));
    if (savedLearned) setLearned(new Set(JSON.parse(savedLearned)));
  }, []);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem('germanBabyFavorites', JSON.stringify([...favorites]));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('germanBabyLearned', JSON.stringify([...learned]));
  }, [learned]);

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const toggleLearned = (id) => {
    const newLearned = new Set(learned);
    if (newLearned.has(id)) {
      newLearned.delete(id);
    } else {
      newLearned.add(id);
    }
    setLearned(newLearned);
  };

  const toggleTopic = (topicId) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  // Filter phrases based on selected month and topics
  const filteredPhrases = phrasesData.phrases.filter((phrase) => {
    const monthMatch = phrase.startMonth <= selectedMonth;
    const topicMatch =
      selectedTopics.length === 0 || selectedTopics.includes(phrase.topic);
    const searchMatch =
      searchTerm === '' ||
      phrase.english.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phrase.german.toLowerCase().includes(searchTerm.toLowerCase());
    const favoriteMatch = !showOnlyFavorites || favorites.has(phrase.id);

    return monthMatch && topicMatch && searchMatch && favoriteMatch;
  });

  // Count phrases by topic for current month
  const phrasesByTopic = phrasesData.phrases
    .filter((phrase) => phrase.startMonth <= selectedMonth)
    .reduce((acc, phrase) => {
      acc[phrase.topic] = (acc[phrase.topic] || 0) + 1;
      return acc;
    }, {});

  // Get topic details
  const getTopicDetails = (topicId) => {
    return phrasesData.topics.find((t) => t.id === topicId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🇩🇪 German Baby Learning 👶
          </h1>
          <p className="text-xl text-gray-600">
            Learn German phrases for your baby's developmental journey
          </p>
        </header>

        {/* Month Selector */}
        <MonthSelector
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />

        {/* Progress Bar */}
        <ProgressBar
          learned={learned.size}
          total={phrasesData.phrases.filter((p) => p.startMonth <= selectedMonth).length}
        />

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search phrases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-blue-500 focus:outline-none"
          />
          <button
            onClick={() => setShowOnlyFavorites(!showOnlyFavorites)}
            className={`px-6 py-3 rounded-xl border-2 transition-all ${
              showOnlyFavorites
                ? 'bg-yellow-400 border-yellow-500 text-gray-800'
                : 'bg-white border-gray-300 text-gray-700 hover:border-yellow-400'
            }`}
          >
            ⭐ {showOnlyFavorites ? 'Show All' : 'Show Favorites'} ({favorites.size})
          </button>
        </div>

        {/* Topic Filter */}
        <TopicFilter
          topics={phrasesData.topics}
          selectedTopics={selectedTopics}
          onTopicToggle={toggleTopic}
          phrasesByTopic={phrasesByTopic}
        />

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-lg text-gray-700 font-medium">
            Showing {filteredPhrases.length} phrases
          </p>
        </div>

        {/* Phrase Cards Grid */}
        {filteredPhrases.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">
              No phrases found. Try adjusting your filters!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhrases.map((phrase) => (
              <PhraseCard
                key={phrase.id}
                phrase={phrase}
                topic={getTopicDetails(phrase.topic)}
                onToggleFavorite={toggleFavorite}
                isFavorite={favorites.has(phrase.id)}
                onMarkLearned={toggleLearned}
                isLearned={learned.has(phrase.id)}
                currentMonth={selectedMonth}
              />
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-600">
          <p className="text-sm">
            💡 Tip: Click any card to flip between English and German!
          </p>
          <p className="text-sm mt-2">
            Made with ❤️ for your baby's language learning journey
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
