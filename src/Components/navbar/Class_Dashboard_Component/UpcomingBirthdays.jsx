import React from 'react';

function UpcomingBirthdays() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold mb-2">Upcoming Birthdays</h2>
      <ul className="list-disc list-inside text-sm">
        <li>Sarah (May 5)</li>
        <li>Mike (May 7)</li>
      </ul>
    </div>
  );
}

export default UpcomingBirthdays;
