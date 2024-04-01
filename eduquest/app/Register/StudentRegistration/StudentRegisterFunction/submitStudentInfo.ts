"use server"; // indicates that this is a server side function

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export async function submitStudentInfo(formData: FormData){
    const fname = formData.get("fname");                  // gets student first name from form entry field titled fname
    const lname = formData.get("lname");                  // gets student last name from form entry field titled lname
    const username = formData.get("username");            // gets student username from form entry field titled username
    const email = formData.get("email");                  // gets student email from form entry field titled email
    const studentId = formData.get("studentId");          // gets student Id from form entry field titled studentId
    const password = formData.get("password");            // gets student password from form entry field titled password

  
    const student = await prisma.student.create({         // creates new student in the database
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
    
    // redirect("../../../Dashboard/studentDashboard", RedirectType.replace); // Redirects to correct page after submitting information to database
  }