import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


interface RequestBody{
    fname: string;
    lname: string;
    username: string;
    email: string;
    facultyId: number;
    password: string;
  }

export async function POST(request: Request) {
    const body:RequestBody = await request.json();
    await prisma.teacher.create({
      data: {
        teacherFirstName: body.fname,
        teacherLastName: body.lname,
        teacherUsername: body.username,
        teacherEmail: body.email,
        teacherUid: body.facultyId,
        teacherPassword: body.password
      }
    })
    return;
  }