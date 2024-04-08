import Image from "next/image";
import Link from "next/link";
import Logo from "../Components/Logo";
import { FormEvent } from "react";
import { options } from "../api/auth/[...nextauth]/options";
import prisma from "../lib/prisma";
import { RedirectType, redirect } from "next/navigation";
import BackButton from "@/app/Components/BackButton";
import { cookies } from 'next/headers';

export default async function Login() {
  const teacher = await prisma.teacher.findMany();        // returns a list of records from the teacher database
  const student = await prisma.student.findMany();        // returns a list of records from the student database
  const admin = await prisma.administrator.findMany();    // returns a list of records from administrator database

  async function submitLogin(formData: FormData){         // function used for sending and submitting form data for login 
    "use server";                                         // use server string is used to denote that this is a server side command

    const username = formData.get("username");            // retrieving entry from username login field 
    const password = formData.get("password");            // retireving entry from password login fieldd

    const student = await prisma.student.findFirst({      // finds the student in database using the entry from the username login field
      where: {
        studentUsername: username as string,
      },
    });

    const teacher = await prisma.teacher.findFirst({      // finds the teacher in database using the entry from the username login field
      where: {
        teacherUsername: username as string,
      },
    });

    const administrator = await prisma.administrator.findFirst({    //finds the admin in database using the entry from the admin login field
      where: {
        adminUsername: username as string,
      },
    });

    if (student && (password as string === student.studentPassword)){     // check to ensure that entry from password entry field and students password tied to username in the database match
      const { studentPassword, ...studentWithoutPass } = student;         // if password entry field and database password match, redireect to student dashboard
      
      cookies().set('id', student?.studentId.toString() as string);
      cookies().set('role', 'student');
      redirect("../Dashboard/studentDashboard", RedirectType.replace);
    } else {
      console.log("Error");                                               // if password entry field and database password do not match, print error to console.log (going to need to workshop better solution)
    }

    if (teacher && (password as string === teacher.teacherPassword)){     // check to ensure that entry from password entry field and teachers password tied to username in the database match
      const { teacherPassword, ...teacherWithoutPass } = teacher;         // if password entry field and database password match, redirect to teacher dashboard
      
      cookies().set('id', teacher?.teacherId?.toString() as string)
      cookies().set('role', 'teacher');
      redirect("../Dashboard/teacherDashboard", RedirectType.replace);
    } else {
      console.log("Error");                                               // if password entry field and database password do not match, print error to console.log (going to need to workshop better solution)
    }

    if (administrator && (password as string === administrator.adminPassword)){     // check to ensure that entry from password entry field and admis password tied to username in the database match
      const { adminPassword, ...administratorWithoutPass } = administrator;         // if password entry field and database password match, redirect to admin dashboard
      
      cookies().set('id', administrator?.adminId?.toString() as string);
      cookies().set('role', 'admin');
      redirect("../Dashboard/adminDashboard", RedirectType.replace);
    } else {
      console.log("Error");                                                         // if password entry field and database password do not match, print error to console.log (going to need to workshop better solution)
    }
  }

  return (
    <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
       <BackButton
      params={{
        link: "./"
      }}
    />
      <Logo />
      <form action={submitLogin} method="POST"> {/*used to denote that when submit button is clicked, will use a POST request to run function labelled above */}
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Username:</div>
        <div>
          <input type="text" name="username" id ="username" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="text-center text-3xl lg:text-2xl lg:mx-4 sm:mx-2">Password:</div>
        <div>
          <input type="password" name="password" id = "password" className="w-full border rounded px-2 py-1 text-black" />
        </div>
        <div className="col-span-2 text-center mt-2">
            <button type="submit" className="bg-orange-500 text-white px-8 py-4 rounded border-2 border-orange-600 hover:bg-orange-600 hover:border-orange-700" style={{borderWidth: "4px"}}>Begin</button>
        </div>
      </div>
      </form>
      <div className="grid grid-cols-2">
      <div className="text-right text-xl lg:text-xl lg:mx-4 mt-6">New to eduQuest:</div>
      
      <Link href="/Register">
        <div className="text-left text-xl lg:text-xl lg:mx-4 text-blue-600 sm:mx-2 mt-6 hover:text-blue-800">Click Here</div>
      </Link>
      </div>
    </main>
  );
}
