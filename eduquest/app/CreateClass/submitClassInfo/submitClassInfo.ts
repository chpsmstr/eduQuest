"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export async function submitClassInfo(formData: FormData){

    //gets course information from submitted form data and put into variables
    const istest = formData.get("istest");
    const className = formData.get("className")
    const teacherId = formData.get("teacherId")
    const classColor = formData.get("classColor")
    const classSection = formData.get("classSection")
    const classCode = formData.get("classCode")

    //function to create course information and insert that information into the database
    const course = await prisma.course.create({
        data: {
            courseName: className as string,
            courseSection: Number(classSection),
            courseCode: classCode as string,
            courseColour: classColor as string,
            teacherId: Number(teacherId)
        }
    })
    if(istest === "nottest"){
        redirect("../Dashboard/adminDashboard", RedirectType.replace); // Redirects to correct page after submitting information to database
       }
}