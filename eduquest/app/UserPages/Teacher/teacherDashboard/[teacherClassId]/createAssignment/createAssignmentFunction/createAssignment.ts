"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export async function createAssignment(formData: FormData){

    //gets assignment information from formdata and puts it into variables
    const isTest = formData.get("istest")
    const classId = formData.get("classId")
    const assignmentName = formData.get("assignmentName") 
    const startDateTemp = formData.get("startDate") as string
    const startDate = new Date(startDateTemp)
    const dueDateTemp = formData.get("dueDate") as string
    const dueDate = new Date(dueDateTemp) 
    const assignmentQuestion = formData.get("assignmentQuestion")
    const marks = formData.get("marks")
    
    //function to create new assignment, and insert assignment and related info into database
    const assignment = await prisma.assignment.create({
        data: {
            assignmentName: assignmentName as string,
            startDate: startDate,
            dueDate: dueDate,
            worth: Number(marks),
            assignmentQuestion: assignmentQuestion as string,
            classId: Number(classId)
        }
    })

    //if isTest from formdata is "nottest", then redirect works, else it does now redirect (used specifically for testing functions)
    if(isTest ==="nottest"){
        let redirectLink = "../" + classId
        redirect(redirectLink, RedirectType.replace);
    }
}