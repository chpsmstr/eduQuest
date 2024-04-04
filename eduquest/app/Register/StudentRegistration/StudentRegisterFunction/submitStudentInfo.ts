"use server"; // indicates that this is a server side function

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export async function submitStudentInfo(formData: FormData){
    //sets form data to variables to put into database
    const fname = formData.get("fname");                  
    const lname = formData.get("lname");                  
    const username = formData.get("username");           
    const email = formData.get("email");                  
    const studentId = formData.get("studentId");          
    const password = formData.get("password");            

    // creates new student in the database using formdata provided above
    const student = await prisma.student.create({         
      data: {
        studentUid: Number(studentId),                   
        studentFirstName: fname as string,               
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