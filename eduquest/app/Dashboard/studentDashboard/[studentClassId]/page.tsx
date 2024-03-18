export default function Dashboard({ params }: {
    params: {studentClassId: string}
}) {
    return(
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <br></br>
        <h1 className="text-3xl">Example {params.studentClassId} Student Class</h1> 
        </main>
    )
}