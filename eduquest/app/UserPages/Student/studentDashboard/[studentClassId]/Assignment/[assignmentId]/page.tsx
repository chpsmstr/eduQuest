import React from 'react';
import { PrismaClient, Prisma } from '@prisma/client'
import BackButton from "@/app/Components/BackButton";
const prisma = new PrismaClient();

export default async function Assignment({ params }: {
    params: { assignmentId: string }
}) {
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
                    {/* File submission box */}
                    <label htmlFor="file" className="block text-xl font-medium text-gray-700">Submit your file:</label>
                    <div className="mt-1 flex flex-col items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                        <div className="space-y-1 text-center">
                            <div className="flex text-sm text-gray-600">
                                <label htmlFor="file" className="relative cursor-pointer bg-white rounded-md font-medium text-amber-600 hover:text-amber-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-amber-500">
                                    <span className="text-lg">Upload a file</span>
                                    <input id="file" name="file" type="file" accept=".doc,.docx,.pdf" className="sr-only" />
                                </label>
                                <p className="pl-1 text-lg">or drag and drop</p>
                            </div>
                            <p className="text-lg text-gray-500">Allowed file types: .doc, .docx, .pdf</p>
                        </div>
                    </div>
                </div>
                <button className="bg-amber-500 text-white py-2 px-4 rounded-md hover:bg-amber-600">Submit</button>
            </div>
        </main>
    );
}