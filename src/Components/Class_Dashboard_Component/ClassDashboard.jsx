import React, { Component } from 'react';

import NumberOfStudents from './NumberOfStudents';
import AverageAttendance from './AverageAttendance';
import HighestMarksList from './HighestMarksList';
import StudentsGenderCount from './StudentsGenderCount';
import TopPerformers from './TopPerformers';
import UpcomingBirthdays from './UpcomingBirthdays';

// import NumberOfStudents from './NumberOfStudents';
// import StudentsGenderCount from './StudentsGenderCount';
// import AverageAttendance from './AverageAttendance';
// import HighestMarksList from './HighestMarksList';
// import UpcomingBirthdays from './UpcomingBirthdays';
// import TopPerformers from './TopPerformers';

class ClassPage extends Component {
    render() {
        return (
            <div className="max-w-6xl flex flex-col mx-auto">
                <div className='p-4 lg:px-6 grid  gap-4 sm:grid-cols-2 lg:grid-cols-3'>
                    <NumberOfStudents />
                    <StudentsGenderCount />
                    <AverageAttendance />
                    <HighestMarksList />
                    <UpcomingBirthdays />
                    <TopPerformers />
                </div>
            </div>
        );
    }
}

export default ClassPage;