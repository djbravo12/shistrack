import React from 'react';

function TopPerformers() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold mb-2">Top 3 Performers</h2>
      <ol className="list-decimal list-inside text-sm">
        <li>Emily Clark</li>
        <li>David Warner</li>
        <li>Emma Watson</li>
      </ol>
    </div>
  );
}

export default TopPerformers;
