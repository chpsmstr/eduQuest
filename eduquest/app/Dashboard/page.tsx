import Link from "next/link";
export default function Dashboard() {
    return(
        <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <br></br>
        <Link href="Dashboard/Student">
        <h1 className="text-3xl bg-black">Student</h1> 
        </Link>
        <br></br>
        <Link href="Dashboard/Teacher">
        <h1 className="text-3xl bg-black">Teacher</h1> 
        </Link>
        <br></br>
        <Link href="Dashboard/Admin">
        <h1 className="text-3xl bg-black">Administrator</h1> 
        </Link>
        </main>
    )
}