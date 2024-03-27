import Assignment from "@/app/Components/Assignment";
import Link from "next/link";

export default async function Class({ params }: {
    params: { adminClassId: string }
}) {
    
    const gradeNav = "../Dashboard/" + params.adminClassId + "/" + params.adminClassId;
    return (
        <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col text-black">
            <div className="grid grid-cols-1">

                <figure>
                    <img
                        src="/classheaderv2.png"
                        className="mb-4 mt-4 align-middle"/>
                    <figcaption className="text-lg text-white">
                    <h1 className="text-5xl relative bottom-20 px-4">{params.adminClassId} - Admin View</h1>
                    </figcaption>
                </figure>
            </div>
            <div className="grid grid-rows-12 grid-cols-12 gap-20">
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/*To-Do Column (For teacher reminders, new assignments, etc.)*/}
                    <h1 className="text-3xl text-center mt-2">To-Do</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        
                        <p className="text-2xl">⦿ Class Meeting - 04/24/24 </p>
                    </div>
                </div>
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/*Quiz Column for Upcoming Quizzes*/}
                    <h1 className="text-3xl text-center mt-2">Quizzes</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        {/*Quiz Items*/}
                    <button className="text-white bg-green-400 px-8 py-4 text-2xl rounded"><strong>Quiz #1</strong><br></br>{params.adminClassId} Module 1<br></br>3/13/2023</button>
                </div>
                </div>
                <div className="col-span-6 row-start-1 row-end-10 bg-white text-black w-full rounded-lg">
                    {/*Assignments Column **Adjust row span based on the number of assignments recieved */}
                    <h1 className="text-3xl text-center mt-2">Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="grid grid-cols-1 gap-6 justify-items-center">
                        {/*Fetched Assignments*/}
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl rounded"><strong>{params.adminClassId} Assignment 1</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl hover:scale-125 rounded"><strong>{params.adminClassId} Assignment 2</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                        <button className="text-white bg-orange-400 px-8 py-4 text-2xl hover:scale-125 rounded"><strong>{params.adminClassId} Assignment 3</strong><br></br>Sub-Heading<br></br>Due: 3/13/2023</button>
                    </div>
                </div>
            </div>

        </main>
    )
}