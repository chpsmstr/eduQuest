// Import React
import React from 'react';
import Link from "next/link";
import BackButton from "@/app/Components/BackButton";
import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient();
// Define the interface for the Student type
interface Student {
  id: number;
  studentNumber: number|null;
  firstName: string|null;
  lastName: string|null;
  email: string|null;
  grade: Prisma.Decimal|number|null;
}


export default async function main({ params }: { params: { adminClassId: string } }){
  "use server";
  const users = await prisma.student.findMany();
  let studentsRegistered: Student[] = new Array();
   users.forEach(element => {
    let temp : Student = {
    id: element.studentId,
    studentNumber: element.studentUid,
    firstName: element.studentFirstName,
    lastName: element.studentLastName,
    email: element.studentEmail,
    grade: element.overallGrade
    }
    studentsRegistered.push(temp);
  });

    const studentsUnregistered: Student[] = [
      //Not impleneted for backend
      //Used to let students register in a course
      //Don't want dummy value for our finished product
  ];
  


  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <BackButton
      params={{
        link: "../"
      }}
    />
      <br />
      <br></br>
      <h1 className="lg:text-4xl sm:text-4xl font-bold">{params.adminClassId} Student Registration List</h1>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-12 border-black">
          <div className="inline-block min-w-full py-10 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
            <h1 className="lg:text-3xl sm:text-2xl mt-8 mb-8 text-center font-bold"> Registered Students</h1>
              <table className="min-w-full text-left text-sm font-light text-black border-black sm:text-xl">
                <thead className="border-b border-black font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-3 py-4 text-left sm:px-3 sm:py-2 lg:px-8 lg:py-4 lg:text-2xl sm:text-xl">Student Number</th>
                    <th scope="col" className="px-3 py-4 text-left sm:px-3 sm:py-2 lg:px-8 lg:py-4 lg:text-2xl sm:text-xl">Name</th>
                    <th scope="col" className="px-3 py-4 text-left sm:px-3 sm:py-2 lg:px-8 lg:py-4 lg:text-2xl sm:text-xl"></th>
                  
                  </tr>
                </thead>
                <tbody>
                  {studentsRegistered.map((student) => (
                    <tr key={student.id} className="border-b border-black dark:border-white/10">
                      <td className="whitespace-nowrap text-left px-3 py-4 sm:px-3 sm:py-2 lg:px-6 lg:py-4 lg:text-xl sm:text-l">{student.studentNumber}</td>
                      <td className="whitespace-nowrap text-left px-3 py-4 sm:px-3 sm:py-2 lg:px-6 lg:py-4 lg:text-xl sm:text-l">{student.firstName} {student.lastName}</td>
                      <td className="whitespace-nowrap text-left px-3 py-4 sm:px-3 sm:py-2 lg:px-6 lg:py-4 lg:text-xl sm:text-l"><Link href = "">
        <div className="bg-orange-500 text-white text-center px-1 py-2 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mb-4" style={{borderWidth: "4px"}}>Drop</div>
         
        </Link></td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
                    <br></br>
              <h1 className="lg:text-3xl sm:text-2xl mt-8 mb-8 text-center font-bold"> Students Requesting Registration</h1>
              <table className="min-w-full text-left text-sm font-light text-black border-black sm:text-xl">
                <thead className="border-b border-black font-medium dark:border-white/10">
                  <tr>
                    <th scope="col" className="px-3 py-4 text-left sm:px-3 sm:py-2 lg:px-8 lg:py-4 lg:text-2xl sm:text-xl">Student Number</th>
                    <th scope="col" className="px-3 py-4 text-left sm:px-3 sm:py-2 lg:px-8 lg:py-4 lg:text-2xl sm:text-xl">Name</th>
                    <th scope="col" className="px-3 py-4 text-left sm:px-3 sm:py-2 lg:px-8 lg:py-4 lg:text-2xl sm:text-xl"></th>
                  
                  </tr>
                </thead>
                <tbody>
                  {studentsUnregistered.map((student) => (
                    <tr key={student.id} className="border-b border-black dark:border-white/10"> {/*Where we would load unregistered students if the database was connected*/}
                      <td className="whitespace-nowrap text-left px-3 py-4 sm:px-3 sm:py-2 lg:px-6 lg:py-4 lg:text-xl sm:text-l">{student.studentNumber}</td>
                      <td className="whitespace-nowrap text-left px-3 py-4 sm:px-3 sm:py-2 lg:px-6 lg:py-4 lg:text-xl sm:text-l">{student.firstName} {student.lastName}</td>
                      <td className="whitespace-nowrap text-left px-3 py-4 sm:px-3 sm:py-2 lg:px-6 lg:py-4 lg:text-xl sm:text-l"><Link href = "">
                      <div className="bg-orange-500 text-white text-center px-3 py-2 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mb-4" style={{borderWidth: "4px"}}>Add</div>
                      </Link></td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </div>
      <Link href = "../">
        <button className="bg-orange-500 text-white align-center justify-center px-8 py-4 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mb-4" style={{borderWidth: "4px"}}>Back</button>
         
        </Link>
    </main>
  );
};
