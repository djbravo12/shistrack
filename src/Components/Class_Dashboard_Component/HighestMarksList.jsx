import React from 'react';

function HighestMarksList() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold mb-2">Top Scorers</h2>
      <ul className="list-disc list-inside text-sm">
        <li>John Doe - 98%</li>
        <li>Jane Smith - 96%</li>
        <li>Alex Johnson - 95%</li>
      </ul>
    </div>
  );
}

export default HighestMarksList;
