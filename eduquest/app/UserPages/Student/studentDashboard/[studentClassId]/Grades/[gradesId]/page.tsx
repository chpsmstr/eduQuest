import BackButton from '@/app/Components/BackButton';
const courses: { [key: string]: string } = {
    "Math100": "bg-red-500",
    "Chemistry111": "bg-blue-500",
    "Physics112": "bg-green-500",
    "Biology121": "bg-indigo-500",
    "Comp-Sci122": "bg-purple-500",
    "English112": "bg-pink-500",
  };
export default function Grades({ params }: {
    params: { studentClassId: string }
}) {
    let bgColor = courses[params.studentClassId];
    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <BackButton
      params={{
        link: "../"
      }}
    />
            {/*Show student grades based on the class Id, classId is passed from studentClassId when a student clicks view grades.
            Both graded assignments and ungraded assignments will be shown to the user along with an average grade for the class.*/}
             <br></br>
                <div className={`${bgColor} w-[75rem] h-64 rounded-lg px-6`}><h1 className="text-5xl relative bottom-20 px-4">{params.studentClassId}</h1>
                    <h1 className="text-white text-6xl pt-[8rem]">{params.studentClassId}</h1>
            </div>
            <br></br>
            <div className="grid grid-rows-[25rem,8fr] grid-cols-[25rem,8fr] gap-20 justify-items-center">
                <div className="col-span-12 row-start-1 row-end-12 bg-white text-black w-full rounded-lg">
                    <h1 className="text-4xl text-center mt-2">Graded Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <p className="text-3xl bg-orange-400 text-white mt-2 px-20 py-3 text-center rounded-lg">{/*Assignment Name*/}{params.studentClassId} Assignment #1 : <span className="text-3xl px-20">
                        {/*Grade*/}91%</span></p>
                    <h1 className="text-4xl text-center mt-20">Ungraded Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <p className="text-3xl bg-orange-400 text-white mt-2 px-20 py-3 text-center rounded-lg">{/*Assignment Name*/}{params.studentClassId} Assignment #2 : 
                    {/*Submitted/Unsubmitted */}<span className="text-3xl px-20">Submitted</span></p>
                </div></div>
        </main>
    )
}