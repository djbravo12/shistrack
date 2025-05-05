import React from 'react';
import { Mars, Venus } from 'lucide-react'; // Importing the Mars icon from Lucide react

function StudentsGenderCount() {
  return (
    <div className={` bg-white group flex flex-row justify-evenly sm:jusify-between gap-4`}>
      {/* <h2 className="text-lg font-semibold mb-2">Students (Male & Female)</h2> */}
      <div className='w-1/2 flex flex-col justify-center items-center pt-4 pb-2 px-6 rounded-xl rounded-xl ring ring-indigo-500 hover:shadow-lg transition-all'>
        <p className='text-4xl lg:text-6xl  font-bold'>70</p>
        <div className="flex items-center justify-center mt-2">
          <Mars className={`text-[#4f46e5 ]`} />
          <p className="text-sm font-semibold text-center">Male Student</p>
        </div>
      </div>
      <div className='w-1/2 flex flex-col justify-center items-center pt-4 pb-2 px-6 rounded-xl rounded-xl  ring ring-indigo-500 hover:shadow-lg transition-all'>

        <p className="text-4xl lg:text-6xl font-bold ">50</p>
        <div className="flex items-center justify-center mt-2">
          <Venus className={`text-[#4f46e5 ]  `} />
          <p className="text-sm font-semibold text-center">Female Student</p></div>
      </div>
    </div>
  );
}

export default StudentsGenderCount;
