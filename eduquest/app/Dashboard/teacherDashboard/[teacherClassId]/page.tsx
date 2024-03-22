import Assignment from "@/app/Components/Assignment";
import Link from "next/link";
export default function Class({ params }: {
    params: { teacherClassId: string }
}) {
    const gradeNav = "../Dashboard/" + params.teacherClassId + "/" + params.teacherClassId;
    return (
        <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <div className="grid grid-cols-1 relative">
    <img src="/classheaderv2.png" className="mb-4 mt-4 align-middle" />
    <figcaption className="text-lg text-white absolute bottom-0 left-0 right-0 top-8">
    <div className="flex flex-col items-end justify-center mb-10 rounded-full">
    <div className="relative">
        <Link href={`${params.teacherClassId}/createAssignment`}>
            <button className="text-2xl text-black lg:text-2xl lg:mx-4 sm:mx-2 p-4 border-grey-400 bg-white hover:text-blue-500 rounded-md transition duration-500 hover:scale-125 rounded-full">
                Create a Quiz
            </button>
        </Link>
    </div>
    <div className="relative mt-4">
        <Link href={`${params.teacherClassId}/createAssignment`}>
            <button className="text-2xl text-black lg:text-2xl lg:mx-4 sm:mx-2 p-4 border-grey-400 bg-white hover:text-blue-500 rounded-md transition duration-500 hover:scale-125 rounded-full">
                Create Assignment
            </button>
        </Link>
    </div>
</div>

        <h1 className="text-5xl px-4">{params.teacherClassId} - Teacher View</h1>
    </figcaption>
</div>





            



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
            <button className="text-white bg-green-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>Quiz #1</strong><br></br>{params.teacherClassId} Module 1<br></br>3/13/2023</button>
            <div className="static bottom-100 left-0"></div>
        </div>
    </div>
    <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
        {/* Assignments Column **Adjust row span based on the number of assignments received */}
        <h1 className="text-3xl text-center mt-2">Assignments</h1>
        <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="grid grid-cols-1 gap-6 justify-items-center">
            {/* Fetched Assignments */}
            <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{params.teacherClassId} Assignment 1</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
            <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{params.teacherClassId} Assignment 2</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
            <button className="text-white bg-orange-400 px-8 py-4 text-2xl transition duration-500 hover:scale-125 rounded"><strong>{params.teacherClassId} Assignment 3</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
        </div>
    </div>
</div>


        </main>
    )
}