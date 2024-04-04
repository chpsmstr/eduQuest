"use server";

import prisma from "@/app/lib/prisma";

export async function submitClassInfo(formData: FormData){

    //gets course information from submitted form data and put into variables
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
}