'use server'
import { redirect } from 'next/navigation'
import React from 'react';
import { PrismaClient, Prisma } from '@prisma/client'
import BackButton from "@/app/Components/BackButton";
import { doesAssignment } from './doesAssignmentFunction/doesAssignment';
const prisma = new PrismaClient();

const checkParam = (assignmentId: string): boolean => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(assignmentId);
}
export default async function Assignment({ params }: {
    params: { assignmentId: string }
}) {
    if (!(checkParam(params.assignmentId))) {
        redirect('../../../../../Error');
    }
    const assignment = await prisma.assignment.findFirst({
        where: {
            assignmentId: Number(params.assignmentId)
        }
    });
    return (
        <main className="px-4 bg-gradient-to-b from-amber-100 to-amber-500 min-h-screen flex items-center flex-col">
            <BackButton
                params={{
                    link: "../"
                }}
            />
            <div className="bg-white rounded-lg p-6 md:w-[75rem] w-full mt-8">
                <h1 className="text-3xl font-bold mb-4 text-black">{assignment?.assignmentName}</h1>
                <p className="text-lg mb-4 text-black">{assignment?.assignmentQuestion}</p>
                <div className="mb-4">
                    <form action={doesAssignment} method="POST">
                        <input name="istest" id="istest" type="hidden" value="nottest"></input>
                        <input name="assignmentId" id="assignmentId" type="hidden" value={params.assignmentId}></input>
                        <label htmlFor="essay" className="block text-xl font-medium text-gray-700">Answer the prompt below:</label>
                        <div className="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 rounded-md">
                            {/* Textarea for the essay */}
                            <textarea id="essay" name="essay" className="text-black w-full h-40 sm:h-60 md:h-80 lg:h-96 xl:h-120 rounded-md overflow-auto focus:outline-none focus:ring-2 focus:ring-blue-200" placeholder="Write your answer here" required></textarea>
                        </div>
                        <br></br>
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
                    </form>
                </div>
            </div>
        </main>
    );
}