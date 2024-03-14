import React from 'react';
import Link from "next/link";

const colors: string[] = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];

interface ClassProps {
  color: string;
  link: string;
  label: string;
}

const ClassBox: React.FC<ClassProps> = ({ color, link, label }) => {
  return (
    <div className="relative mb-4 w-56 sm:w-56">
      <Link href={link}>
        <div className="block h-56 cursor-pointer transition duration-300 ease-in-out transform hover:brightness-90">
          {/* Colored half at the top */}
          <div className={`absolute left-0 top-0 w-full h-1/2 ${color} transition duration-300 ease-in-out transform hover:brightness-110`}></div>
          {/* Remaining half */}
          <div className="absolute left-0 bottom-0 w-full h-1/2 bg-white"></div>
        </div>
      </Link>
      {/* Text */}
      <div className="absolute top-0 left-0 w-full p-2 text-black text-2xl font-bold pointer-events-none" style={{ marginTop: 'calc(1/6 * 6rem)' }}>
        {label}
      </div>
    </div>
  );
};

const ClassNames = () => {
  const links: string[] = ['Dashboard/Calculus', 'Dashboard/Chemistry', 'Dashboard/Physics', 'Dashboard/Biology', 'Dashboard/CompSci', 'Dashboard/Arts'];
  const labels: string[] = ['Calculus', 'Chemistry', 'Physics', 'Biology', 'CompSci', 'Arts'];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {colors.map((color, index) => (
        <ClassBox key={index} color={color} link={links[index]} label={labels[index]} />
      ))}
    </div>
  );
};


export default function Dashboard() {
    return(
        <main className="bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 mt-8 mb-16">Student Name Classes</h1>
            {/*<Link href="Dashboard/Student">
              <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 hover:border-indigo-600 border-indigo-700 hover:bg-indigo-500  bg-indigo-600 rounded-md" style={{borderWidth: "4px"}}>Student</h1> 
            </Link>
            <br />
            <Link href="Dashboard/Teacher">
              <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 hover:border-red-600 border-red-700 hover:bg-red-500  bg-red-600 rounded-md" style={{borderWidth: "4px"}}>Teacher</h1> 
            </Link>
            <br />
            <Link href="Dashboard/Admin">
              <h1 className="text-3xl lg:text-4xl lg:mx-4 sm:mx-2 p-4 hover:border-gree-600 border-green-700 hover:bg-green-500  bg-green-600 rounded-md" style={{borderWidth: "4px"}}>Administrator</h1> 
            </Link>
    */}
    
            <ClassNames/>
        </main>
    )
}
