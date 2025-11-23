export default function MonthSelector({ selectedMonth, onMonthChange }) {
  const monthRanges = [
    { label: '0-3 months', value: 0, description: 'Newborn' },
    { label: '3-6 months', value: 3, description: 'Growing awareness' },
    { label: '6-9 months', value: 6, description: 'Sitting & exploring' },
    { label: '9-12 months', value: 9, description: 'Crawling & standing' },
    { label: '12-15 months', value: 12, description: 'First steps' },
    { label: '15-18 months', value: 15, description: 'Walking & talking' },
    { label: '18-21 months', value: 18, description: 'Little explorer' },
    { label: '21-24 months', value: 21, description: 'Toddler talk' },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span>👶</span>
        Select Baby's Age
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {monthRanges.map((range) => (
          <button
            key={range.value}
            onClick={() => onMonthChange(range.value)}
            className={`p-4 rounded-xl border-2 transition-all transform hover:scale-105 ${
              selectedMonth === range.value
                ? 'bg-blue-500 text-white border-blue-600 shadow-lg'
                : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
            }`}
          >
            <div className="font-bold">{range.label}</div>
            <div className="text-sm opacity-80">{range.description}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
