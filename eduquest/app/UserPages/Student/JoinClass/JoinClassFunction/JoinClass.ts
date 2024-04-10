"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function joinClass(formData: FormData){
    const istest = formData.get("istest")
    const classCode = formData.get("courseCode")
    const cookieStore = cookies();
    const studentId = cookieStore.get("id")?.value

    const course = await prisma.course.findFirst({
        where: {
            courseCode: classCode as string
        }
    })
    const courseId = course?.courseId
    const enrolled = await prisma.enrolled.create({
        data: {
            studentId: Number(studentId),
            courseId: Number(courseId)
        }
    })

    if(istest === 'nottest'){
        redirect("../../UserPages/Student/studentDashboard", RedirectType.replace)
    }
}