export default function ProgressBar({ learned, total }) {
  const percentage = total > 0 ? Math.round((learned / total) * 100) : 0;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-gray-800">Learning Progress</h3>
        <span className="text-2xl font-bold text-blue-600">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-sm text-gray-600 mt-2">
        {learned} of {total} phrases learned
      </p>
    </div>
  );
}
