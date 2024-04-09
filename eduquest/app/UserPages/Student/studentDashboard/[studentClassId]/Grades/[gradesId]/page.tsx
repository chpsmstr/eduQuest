'use server';
import React from "react";
import BackButton from '@/app/Components/BackButton';
import { cookies } from 'next/headers';
import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

interface Assignment {
    assignmentName: string|null;
    grade: string;
  }

export default async function Grades({ params }: {
    params: { studentClassId: string }
}) {
    const cookieStore = cookies();
const id = cookieStore.get('id')?.value;
    const thisCourse = await prisma.course.findFirst({
        where: {
            courseId: Number(params.studentClassId)
        }
    });

    const doesAssignments = await prisma.doesAssignment.findMany({
        where:{
          studentId: Number(id)
        }
      });
      const doesQuizzes = await prisma.doesQuiz.findMany({
        where:{
          studentId: Number(id)
        }
      });

    const assignments = await prisma.assignment.findMany({
        where: {
            classId: Number(params.studentClassId)
        }
    });
    const quizzes = await prisma.quiz.findMany({
        where: {
            classId: Number(params.studentClassId)
        }
    });

    let gradedAssignments: Assignment[] = new Array();
    let ungradedAssignments: Assignment[] = new Array();
    assignments.forEach((e)=>{
        doesAssignments.forEach((element)=>{
            if(e.assignmentId == element.assignmentId){
                if(!Number.isNaN(element.assignmentGrade)){
                    let temp : Assignment = {
                        assignmentName: e.assignmentName,
                        grade: element.assignmentGrade+""
                    }
                    gradedAssignments.push(temp);
                }
                else{
                    let temp : Assignment = {
                        assignmentName: e.assignmentName,
                        grade: "Submitted"
                    }
                    ungradedAssignments.push(temp);
                }
            }
        });
        });
    quizzes.forEach((e)=>{
        doesQuizzes.forEach((element)=>{
            if(e.quizId == element.quizId){
                if(!Number.isNaN(element.quizGrade)){
                    let temp : Assignment = {
                        assignmentName: e.quizName,
                        grade: element.quizGrade+""
                    }
                    gradedAssignments.push(temp);
                }
                else{
                    let temp : Assignment = {
                        assignmentName: e.quizName,
                        grade: "Submitted"
                    }
                    ungradedAssignments.push(temp);
                }
            }
        });
    });
    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <BackButton
      params={{
        link: "../"
      }}
    />
            {/*Show student grades based on the class Id, classId is passed from studentClassId when a student clicks view grades.
            Both graded assignments and ungraded assignments will be shown to the user along with an average grade for the class.*/}
             <br></br>
                <div className={`${"bg-" + thisCourse?.courseColour +"-500"} w-[75rem] h-64 rounded-lg px-6`}><h1 className="text-5xl relative bottom-20 px-4">{thisCourse?.courseName+ " " + thisCourse?.courseSection}</h1>
                    <h1 className="text-white text-6xl pt-[8rem]">{thisCourse?.courseName+ " " + thisCourse?.courseSection}</h1>
            </div>
            <br></br>
            <div className="grid grid-rows-[25rem,8fr] grid-cols-[25rem,8fr] gap-20 justify-items-center">
                <div className="col-span-12 row-start-1 row-end-12 bg-white text-black w-full rounded-lg">
                    <h1 className="text-4xl text-center mt-2">Graded Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    {gradedAssignments.map((e)=>(
                        <p className="text-3xl bg-orange-400 text-white mt-2 px-20 py-3 text-center rounded-lg">{/*Assignment Name*/}{e.assignmentName+":"}<span className="text-3xl px-20">
                        {/*Grade*/}{e.grade+"%"}</span></p>
                    ))}
                    <h1 className="text-4xl text-center mt-20">Ungraded Assignments</h1>
                    <hr className="h-1 my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    {ungradedAssignments.map((e)=>(
                        <p className="text-3xl bg-orange-400 text-white mt-2 px-20 py-3 text-center rounded-lg">{/*Assignment Name*/}{e.assignmentName}<span className="text-3xl px-20">
                        {/*Grade*/}{e.grade}</span></p>
                    ))}
                </div></div>
        </main>
    )
}