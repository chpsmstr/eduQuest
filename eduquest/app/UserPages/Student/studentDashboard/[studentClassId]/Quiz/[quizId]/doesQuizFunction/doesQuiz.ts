"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function doesQuiz(formData: FormData){
    const istest = formData.get("istest")
    const quizId = formData.get("quizId")
    const cookieStore = cookies()
    const studentId = cookieStore.get("id")?.value
    const quizLength = Number(formData.get("quizLength"))
    let quizGrade = 0
    const question = await prisma.question.findMany({
        where:{
            quizId: Number(quizId)
        }
    })

    for(let i = 0;i < quizLength;i++){
        const quizCheck = formData.get("q"+(i+1))
        if(Number(quizCheck) === (Number(question[i].correctAnswer) - 1)){
            quizGrade++
        }
    }

    const quizGradeScaled = (quizGrade / quizLength) * 100
    const doesQuiz = await prisma.doesQuiz.create({
        data: {
            quizId: Number(quizId),
            studentId: Number(studentId),
            quizGrade: Number(quizGradeScaled)
        }
    })

    if(istest === 'nottest'){
        redirect("../", RedirectType.replace)
    }
}