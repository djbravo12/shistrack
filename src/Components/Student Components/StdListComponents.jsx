import { Settings } from "lucide-react"

const students = [
    {
        rollNo: 101,
        name: "Alice Smith",
        bloodGroup: "A+",
        attendance: 95,
        score: 85,
        action: "Pass"
    },
    {
        rollNo: 102,
        name: "Bob Johnson",
        bloodGroup: "B-",
        attendance: 88,
        score: 78,
        action: "Pass"
    },
    {
        rollNo: 103,
        name: "Clara Brown",
        bloodGroup: "O+",
        attendance: 92,
        score: 65,
        action: "Needs Improvement"
    },
    {
        rollNo: 104,
        name: "David Lee",
        bloodGroup: "AB+",
        attendance: 75,
        score: 55,
        action: "Fail"
    },
    {
        rollNo: 105,
        name: "Emma Davis",
        bloodGroup: "A-",
        attendance: 98,
        score: 92,
        action: "Excellent"
    }
];




const StdListComponents = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3">Roll No</th>
                        <th className="px-6 py-3">Student Name</th>
                        <th className="px-6 py-3">blood Group</th>
                        <th className="px-6 py-3">Attendance</th>
                        <th className="px-6 py-3">Score</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {/* <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">iPhone 14</td>
                        <td className="px-6 py-4">$799</td>
                        <td className="px-6 py-4">25</td>
                        <td className="px-6 py-4">★★★★☆</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4">Pixel 7</td>
                        <td className="px-6 py-4">$599</td>
                        <td className="px-6 py-4">30</td>
                        <td className="px-6 py-4">★★★★★</td>
                    </tr> */}
                    {students.map((student) => (
                        <tr className="hover:bg-gray-50" key={student.rollNo}>
                            <td className="px-6 py-4">{student.rollNo}</td>
                            <td className="px-6 py-4">{student.name}</td>
                            <td className="px-6 py-4">{student.bloodGroup}</td>
                            <td className="px-6 py-4">{student.attendance}</td>
                            <td className="px-6 py-4">{student.score}</td>
                            <td className="px-6 py-4"><a href="#"><Settings /></a></td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>

    );
}

export default StdListComponents;