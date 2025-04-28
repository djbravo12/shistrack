import React from 'react';

function StudentsGenderCount() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
      <h2 className="text-lg font-semibold mb-2">Students (Male & Female)</h2>
      <p className="text-md mb-1">👦 Male: 70</p>
      <p className="text-md">👧 Female: 50</p>
    </div>
  );
}

export default StudentsGenderCount;
