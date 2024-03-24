import Assignment from "@/app/Components/Assignment";
import Link from "next/link";
const courses: { [key: string]: string } = {
    "Math100": "bg-red-500",
    "Chemistry111": "bg-blue-500",
    "Physics112": "bg-green-500",
    "Biology121": "bg-indigo-500",
    "Comp-Sci122": "bg-purple-500",
    "English112": "bg-pink-500",
}
export default function Class({ params }: {
    params: { teacherClassId: string }
}) {
    let bgColor = courses[params.teacherClassId];
    const gradeNav = "../teacherDashboard/" + params.teacherClassId + "/" + params.teacherClassId;
    return (
        <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <br></br>
            <div className={`${bgColor} w-[75rem] h-64 rounded-lg px-6`}><h1 className="text-5xl relative bottom-20 px-4">{params.teacherClassId}</h1>
                <Link href={gradeNav}>
                    <button className="relative left-1 bottom-10 text-white bg-gray-500 text-4xl hover:bg-gray-400 text-white py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg">Grade</button>
                </Link>
                <Link href={`${params.teacherClassId}/createAssignment`}>
                    <button className="relative left-4 bottom-10 text-white bg-gray-500 text-4xl hover:bg-gray-400 text-white py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg">Create Assignment</button>
                </Link>
                <Link href={`${params.teacherClassId}/createQuiz`}>
                    <button className="relative left-7 bottom-10 text-white bg-gray-500 text-4xl hover:bg-gray-400 text-white py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg">Create Quiz</button>
                </Link>
                <h1 className="text-white text-6xl pt-[5rem]">{params.teacherClassId}</h1>
            </div>
            <br></br>
        
            <div className="grid grid-rows-12 grid-cols-12 gap-20">
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/* To-Do Column (For teacher reminders, new assignments, etc.) */}
                    <h1 className="text-3xl text-center mt-2">To-Do</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        <p className="text-2xl">⦿ Class Meeting - 04/24/24 </p>
                    </div>
                </div>
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/* Quiz Column for Upcoming Quizzes */}
                    <h1 className="text-3xl text-center mt-2">Quizzes</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        {/* Quiz Items */}
                        <Link href = "../../Quiz/Quiz1">
                    <button className="text-white bg-green-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>Quiz #1</strong><br></br>{params.teacherClassId} Module 1<br></br>3/13/2023</button>
                    </Link><div className="static bottom-100 left-0"></div>
                    </div>
                </div>
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/* Assignments Column **Adjust row span based on the number of assignments received */}
                    <h1 className="text-3xl text-center mt-2">Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        {/* Fetched Assignments */}
                        <Link href = "../../Assignment/Assignment1">
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{params.teacherClassId} Assignment 1</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        </Link>
                        <Link href = "../../Assignment/Assignment2">
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{params.teacherClassId} Assignment 2</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        </Link>
                        <Link href = "../../Assignment/Assignment3">
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{params.teacherClassId} Assignment 3</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        </Link> </div>
                </div>
            </div>


        </main>
    )
}