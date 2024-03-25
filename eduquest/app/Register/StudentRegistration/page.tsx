import Image from "next/image";
import Link from "next/link";
import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export default async function StudentRegistration() {
  const student = await prisma.student.findMany();        // keeps records of student database

  async function submitStudentInfo(formData: FormData){   // function to insert form data to student table in database
    "use server";                                         // "use server" is used to denote server side functions

    const fname = formData.get("fname");                  // gets student first name from form entry field titled fname
    const lname = formData.get("lname");                  // gets student last name from form entry field titled lname
    const username = formData.get("username");            // gets student username from form entry field titled username
    const email = formData.get("email");                  // gets student email from form entry field titled email
    const studentId = formData.get("studentId");          // gets student Id from form entry field titled studentId
    const password = formData.get("password");            // gets student password from form entry field titled password

    const student = await prisma.student.create({         // prisma function to create new entry into student databases
      data: {
        studentUid: Number(studentId),                    // lines 21-29 show assigning data to the different fields in the database, such as setting studentUid to be studentId
        studentFirstName: fname as string,                // also ensuring the type of the variables that are being put, as this is typescript
        studentLastName: lname as string,
        studentUsername: username as string,
        studentPassword: password as string,
        studentEmail: email as string,
        overallGrade: null,
        attendence: null,
        leaderboardPosition: null
      }
    })

    redirect("../../Dashboard/studentDashboard", RedirectType.replace); // after successful registration, redirects to student dashboard
  }
  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
      <img
        src="/eduQuestpxArtLogo.png"
        alt="Eduquest logo"
        className="h-64 w-64 xs:h-48 xs:w-48 lg:h-64 lg:w-64"
      />
      <div className="grid text-center text-left text-4xl lg:text-3xl lg:mx-4 sm:mx-2 mb-12">
          Create an Account
      </div>
      <form action={submitStudentInfo} method="POST"> {/*used to denote that when submit button is clicked, will use a POST request to run function labelled above */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">First Name:</div>
        <div>
          <input type="text" name = "fname" id = "firstName" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Last Name:</div>
        <div>
          <input type="text" name= "lname" id= "lastName" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Username:</div>
        <div>
          <input type="text" name = "username" id = "username" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Email:</div>
        <div>
          <input type="email" name = "email" id = "email" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Student ID:</div>
        <div>
          <input type="text" name = "studentId" id = "studentId" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Password:</div>
        <div>
          <input type="password" name = "password" id = "firstPassword" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-left text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Confirm Password:</div>
        <div>
          <input type="password" id = "confirmPassword" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="col-span-2 text-center mt-4">
            <button type="submit" className="bg-orange-500 text-white px-12 py-6 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700 mt-4" style={{borderWidth: "4px"}}>Submit</button>
          </div>
      </div>
      </form>
      <Link href="/">
        <h1 className="text-center text-2xl lg:text-xl lg:mx-4 sm:mx-2 mt-4 mb-4">Back Home</h1>
      </Link>
    </main>
  );
}

