import React from 'react';
// import StudentsGenderCount from './StudentsGenderCount';

function NumberOfStudents() {
  return (
    <div className="bg-white pt-4 pb-2 rounded-xl shadow-md group hover:shadow-lg hover:bg-indigo-700 hover:text-white transition-all flex flex-col justify-center items-center">
      <div className="py-2">
        <p className="text-6xl font-bold text-indigo-600 text-center group-hover:text-white">120</p>
        <h2 className="text-sm mt-2 font-semibold text-center">Number of Students</h2>
      </div>
      {/* <div className=" sm:max-w-lg" > */}
        {/* <StudentsGenderCount className="group-hover:text-white  transition-all" /> */}
      {/* </div> */}
    </div>
  );
}

export default NumberOfStudents;
