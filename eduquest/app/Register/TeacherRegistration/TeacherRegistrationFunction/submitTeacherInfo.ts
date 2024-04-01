"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export async function submitTeacherInfo(formData: FormData){   // function for inserting form data into teacher table in database
    
    const fname = formData.get("fname");                  // get teacher first name from form entry field titled fname
    const lname = formData.get("lname");                  // get teacher last name from form entry field titled lname
    const username = formData.get("username");            // get teacher username from form entry field titled username
    const email = formData.get("email");                  // get teacher email from form entry field titled email
    const facultyId = formData.get("facultyId");          // get teacher id from form entry field titled facutlyId
    const password = formData.get("password");            // get teacher password from form entry field titled password

    const teacher = await prisma.teacher.create({         // prisma function to create new entry in teacher table
      data: {
        teacherUid: Number(facultyId),                    // lines 23-31 show assigning data to data fields in the database, such as setting teacherUid to be facultyId
        teacherFirstName: fname as string,                // also ensuring the type of the variables that are being put, as this is typescrip
        teacherLastName: lname as string,
        teacherUsername: username as string,
        teacherPassword: password as string,
        teacherEmail: email as string,
        educationLevel: null,
        numOfCourses: null,
        numOfSessions: null
      }
    })
    
    // redirect("../../../Dashboard/teacherDashboard", RedirectType.replace);   // after successful registration, redirects to teacherDashboard
  }