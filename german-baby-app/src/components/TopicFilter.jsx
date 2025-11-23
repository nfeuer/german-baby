export default function TopicFilter({ topics, selectedTopics, onTopicToggle, phrasesByTopic }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Filter by Topic
      </h2>
      <div className="flex flex-wrap gap-3">
        {topics.map((topic) => {
          const count = phrasesByTopic[topic.id] || 0;
          const isSelected = selectedTopics.includes(topic.id);

          return (
            <button
              key={topic.id}
              onClick={() => onTopicToggle(topic.id)}
              disabled={count === 0}
              className={`px-4 py-2 rounded-full border-2 transition-all transform hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed ${
                isSelected
                  ? `${topic.color} border-gray-400 shadow-md`
                  : 'bg-white border-gray-300 hover:border-gray-400'
              }`}
            >
              <span className="mr-2">{topic.icon}</span>
              <span className="font-medium">{topic.name}</span>
              <span className="ml-2 text-sm text-gray-600">({count})</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
