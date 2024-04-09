"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export async function submitTeacherInfo(formData: FormData){   // function for inserting form data into teacher table in database
    //takes in form data and sets it to variabls for database insertion
    const istest = formData.get("istest");
    const fname = formData.get("fname");                  
    const lname = formData.get("lname");                 
    const username = formData.get("username");            
    const email = formData.get("email");                 
    const facultyId = formData.get("facultyId");          
    const password = formData.get("password");            

    //takes above form data and inputs it into teacher table in database
    const teacher = await prisma.teacher.create({         
      data: {
        teacherUid: Number(facultyId),   
        teacherFirstName: fname as string,                 
        teacherLastName: lname as string,
        teacherUsername: username as string,
        teacherPassword: password as string,
        teacherEmail: email as string,
        educationLevel: null,
        numOfCourses: null,
        numOfSessions: null
      }
    })
    if(istest === "nottest"){
    redirect("../../../Login", RedirectType.replace);   // after successful registration, redirects to teacherDashboard
    }
  }