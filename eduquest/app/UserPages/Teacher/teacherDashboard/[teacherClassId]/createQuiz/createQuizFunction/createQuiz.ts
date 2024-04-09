"use server";

import prisma from "@/app/lib/prisma";
import { RedirectType, redirect } from "next/navigation";

export async function createQuiz(formData: FormData){
    const isTest = formData.get("istest")
    const classId = formData.get("classId")
    const quizName = formData.get("quizName")
    const startDateTemp = formData.get("startDate") as string
    const startDate = new Date(startDateTemp)
    const dueDateTemp = formData.get("dueDate") as string
    const dueDate = new Date(dueDateTemp)
    const worth = formData.get("worth")

    const quiz = await prisma.quiz.create({
        data: {
            quizName: quizName as string,
            startDate: startDate,
            dueDate: dueDate,
            worth: Number(worth),
            classId: Number(classId)
        }
    })

    for(let i = 0; i < Number(worth);i++){

        let qci = "questionContent" + i
        let fai = "answerA" + i
        let sai = "answerB" + i
        let tai = "answerC" + i
        let foai = "answerD" + i
        let cai = "correct-answer-"+i

        const questionContent = formData.get(qci)
        const firstAnswer = formData.get(fai)
        const secondAnswer = formData.get(sai)
        const thirdAnswer = formData.get(tai)
        const fourthAnswer = formData.get(foai)
        const correctAnswerTemp = formData.get(cai)
        let correctAnswer: number
        if(correctAnswerTemp === firstAnswer){
            correctAnswer = 1
        }
        else if(correctAnswerTemp === secondAnswer){
            correctAnswer = 2
        }
        else if(correctAnswerTemp === thirdAnswer){
            correctAnswer = 3
        }
        else if(correctAnswerTemp === fourthAnswer){
            correctAnswer = 4
        }
        else{
            correctAnswer = -1
        }
        const question = await prisma.question.create({
            data: {
                questionContent: questionContent as string,
                firstAnswer: firstAnswer as string,
                secondAnswer: secondAnswer as string,
                thirdAnswer: thirdAnswer as string,
                fourthAnswer: fourthAnswer as string,
                correctAnswer: Number(correctAnswer),
                quizId: Number(classId)
            }
        })
    }

    //if isTest from formdata is "nottest", then redirect works, else it does now redirect (used specifically for testing functions)
    if(isTest ==="nottest"){
        let redirectLink = "../" + classId
        redirect(redirectLink, RedirectType.replace);
    }
}