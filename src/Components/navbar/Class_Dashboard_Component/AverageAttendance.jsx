import React from 'react';

function AverageAttendance() {
  return (
    <div className="bg-white pt-4 pb-2 rounded-xl shadow-md group hover:shadow-lg hover:bg-green-600 hover:text-white transition-all flex flex-col justify-center items-center">
      <p className="text-6xl font-bold text-green-600 text-center group-hover:text-white">87%</p>
      <h2 className="text-lg font-semibold mb-2">Average Attendance</h2>
    </div>
  );
}

export default AverageAttendance;
