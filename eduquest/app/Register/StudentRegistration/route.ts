import prisma from "@/app/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
    studentUid: number;
    studentFirstName: string;
    studentLastName: string;
    studentUsername: string;
    studentPassword: string;
    studentEmail: string;
    overallGrade: number;
    attendence: number;
    leaderboardPosition: number;
}

export async function POST(request: Request){
    const body:RequestBody = await request.json();

    const student = await prisma.student.create({
        data: {
            studentUid: body.studentUid,
            studentFirstName: body.studentFirstName,
            studentLastName: body.studentLastName,
            studentUsername: body.studentUsername,
            // studentPassword: await bcrypt.hash(body.studentPassword, 10),
            studentPassword: body.studentPassword,
            studentEmail: body.studentEmail,
            overallGrade: body.overallGrade,
            attendence: body.attendence,
            leaderboardPosition: body.leaderboardPosition
        }
    })

    const { studentPassword, ...result } = student;
    return new Response(JSON.stringify(result));
}
