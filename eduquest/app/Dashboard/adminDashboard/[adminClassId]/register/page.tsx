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

    const studentsUnregistered: Student[] = [{
      id: 7,
      studentNumber: 56789012,
      firstName: 'Emily',
      lastName: 'Davis',
      email: 'emily_davis@gmail.com',
      grade: 83,
    },
    {
      id: 8,
      studentNumber: 67890123,
      firstName: 'Michael',
      lastName: 'Martinez',
      email: 'michael_martinez@hotmail.com',
      grade: 89,
    },
    {
      id: 9,
      studentNumber: 78901234,
      firstName: 'Jennifer',
      lastName: 'Garcia',
      email: 'jennifer_garcia@gmail.com',
      grade: 84,
    },
    {
      id: 10,
      studentNumber: 89012345,
      firstName: 'Matthew',
      lastName: 'Taylor',
      email: 'matthew_taylor@hotmail.com',
      grade: 91,
    },
    {
      id: 11,
      studentNumber: 90123456,
      firstName: 'Jessica',
      lastName: 'Rodriguez',
      email: 'jessica_rodriguez@gmail.com',
      grade: 86,
    },
    {
      id: 12,
      studentNumber: 11223344,
      firstName: 'William',
      lastName: 'Anderson',
      email: 'william_anderson@hotmail.com',
      grade: 82,
    },
    {
      id: 13,
      studentNumber: 33445566,
      firstName: 'Amanda',
      lastName: 'Thomas',
      email: 'amanda_thomas@gmail.com',
      grade: 88,
    },
    {
      id: 14,
      studentNumber: 55667788,
      firstName: 'Daniel',
      lastName: 'Hernandez',
      email: 'daniel_hernandez@hotmail.com',
      grade: 85,
    },
    {
      id: 15,
      studentNumber: 77889900,
      firstName: 'Elizabeth',
      lastName: 'Young',
      email: 'elizabeth_young@gmail.com',
      grade: 90,
    },
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
            <h1 className="lg:text-3xl sm:text-2xl mt-8 mb-8 text-center font-bold">{params.adminClassId} Registered Students</h1>
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
              <h1 className="lg:text-3xl sm:text-2xl mt-8 mb-8 text-center font-bold">{params.adminClassId} Students Requesting Registration</h1>
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
                    <tr key={student.id} className="border-b border-black dark:border-white/10">
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
