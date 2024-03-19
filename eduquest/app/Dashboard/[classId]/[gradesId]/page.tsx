export default function Grades({ params }: {
    params: { classId: string }
}) {
    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <div className="grid grid-cols-1">
                <figure>
                    <img
                        src="/classheaderv2.png"
                        className="mb-4 mt-4 align-middle" />
                    <figcaption className="text-lg text-white">
                        <h1 className="text-5xl relative bottom-20 px-4">{params.classId} <span className="bg-orange-300 rounded-full px-8">
                            {/*Class Overall Grade*/}89%</span></h1>
                    </figcaption>
                </figure>
            </div>
            <div className="grid grid-rows-[25rem,8fr] grid-cols-[25rem,8fr] gap-20 justify-items-center">
                <div className="col-span-12 row-start-1 row-end-12 bg-white text-black w-full rounded-lg">
                    <h1 className="text-4xl text-center mt-2">Graded Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <p className="text-3xl bg-orange-400 text-white mt-2 px-20 py-3 text-center rounded-lg">{/*Assignment Name*/}{params.classId} Assignment #1 : <span className="text-3xl px-20">
                        {/*Grade*/}91%</span></p>
                    <h1 className="text-4xl text-center mt-20">Ungraded Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <p className="text-3xl bg-orange-400 text-white mt-2 px-20 py-3 text-center rounded-lg">{/*Assignment Name*/}{params.classId} Assignment #2 : 
                    {/*Submitted/Unsubmitted */}<span className="text-3xl px-20">Submitted</span></p>
                </div></div>
        </main>
    )
}