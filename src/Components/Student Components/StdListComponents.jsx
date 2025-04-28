import { Settings, User } from "lucide-react"

const students = [
    {
        rollNo: 101,
        name: "Alice Smith",
        Age: 20,
        // img: 'User',
        bloodGroup: "A+",
        attendance: 95,
        score: 85,
        action: "Pass"
    },
    {
        rollNo: 102,
        name: "Bob Johnson",
        Age: 20,
        // img: 'User',
        bloodGroup: "B-",
        attendance: 88,
        score: 78,
        action: "Pass"
    },
    {
        rollNo: 103,
        name: "Clara Brown", Age: 20,
        // img: 'User',
        bloodGroup: "O+",
        attendance: 92,
        score: 65,
        action: "Needs Improvement"
    },
    {
        rollNo: 104,
        name: "David Lee", Age: 20,
        // img: 'User',
        bloodGroup: "AB+",
        attendance: 75,
        score: 55,
        action: "Fail"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    },
    {
        rollNo: 105,
        name: "Emma Davis", Age: 20,
        // img: 'User',
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    }
];




const StdListComponents = () => {
    return (
        <div className="overflow-x-scroll max-w-79 sm:min-w-full sm:overflow-hidden">
            <table className="min-w-full text-sm text-center">
                <thead className="bg-[#1E263D] text-white ">
                    <tr>
                        <th className="px-4 py-2">Roll No</th>
                        <th className="px-4 py-2">Student Name</th>
                        <th className="px-4 py-2">Age</th>
                        <th className="px-4 py-2">blood Group</th>
                        <th className="px-4 py-2">Attendance</th>
                        <th className="px-4 py-2">Score</th>
                        <th className="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">

                    {students.map((student) => (
                        <tr className="hover:bg-gray-50 border-b-[0.8px]" key={student.rollNo}>
                            <td className="px-4 py-2  text-[#000] font-semibold">{student.rollNo}</td>
                            <td className="px-4 py-2 flex gap-3 items-center justify-center " ><div className="bg-white m-x-4"><User className="w-10 h-10" /></div> <div className="w-20 text-left">{student.name}</div> </td>
                            <td className="px-4 py-2">{student.Age}</td>
                            <td className="px-4 py-2">{student.bloodGroup}</td>
                            <td className="px-4 py-2">{student.attendance}</td>
                            <td className="px-4 py-2">{student.score}</td>
                            <td className="px-4 py-2 "><a href="#" className="flex items-center justify-center"><Settings className="w-4 h-4 sm:w-6 sm:h-6" /></a></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}

export default StdListComponents;