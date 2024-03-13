export default function Dashboard({ params }: {
    params: {dashboardId: string}
}) {
    return(
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
        <h1 className="text-3xl bg-black">Example {params.dashboardId} Dashboard</h1> 
        </main>
    )
}