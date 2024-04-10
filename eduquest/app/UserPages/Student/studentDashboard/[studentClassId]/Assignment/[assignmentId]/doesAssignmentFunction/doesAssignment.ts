"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function doesAssignment(formData: FormData){
    const istest = formData.get("istest")
    const assignmentId = formData.get("assignmentId")
    const cookieStore = cookies()
    const studentId = cookieStore.get("id")?.value
    const response = formData.get("essay")

    const create = await prisma.doesAssignment.create({
        data: {
            assignmentId: Number(assignmentId),
            studentId: Number(studentId),
            response: response as string,
        }
    })

    if(istest === 'nottest'){
        redirect("../", RedirectType.replace)
    }
}