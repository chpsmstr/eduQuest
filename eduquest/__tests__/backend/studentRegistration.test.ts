"use server";

import { expect, test, vi } from 'vitest';
import { submitStudentInfo } from '@/app/Register/StudentRegistration/StudentRegisterFunction/submitStudentInfo';
import prisma from '@/app/lib/prisma';
import React from 'react'
    //constant values to ensure correct testing
    const fname = "Test"
    const lname = "User"
    const username = "testuser"
    const email = "testuser@example.com"
    const password = "testpass"
    const studentIdNum = 123

//start of testing
test('testing that student information being submitted properly to database', async () => {  
    //finds test student
    const student = await prisma.student.findFirst({
        where: {
            studentUid: 123
        }
    })
    //getting test student values
    const suid = student?.studentUid as number;
    const sfname = student?.studentFirstName as string;
    const slname = student?.studentLastName as string;
    const suser = student?.studentUsername as string;
    const spass = student?.studentPassword as string;
    const semail = student?.studentEmail as string;
    const grade = student?.overallGrade as null;
    const attendence = student?.attendence as null;
    const leaderboard = student?.leaderboardPosition as null;

    //ensuring test values are what is expected
    expect(suid).toBe(studentIdNum)
    expect(sfname).toBe(fname)
    expect(slname).toBe(lname)
    expect(suser).toBe(username)
    expect(spass).toBe(password)
    expect(semail).toBe(email)
    expect(grade).toBe(null)
    expect(attendence).toBe(null)
    expect(leaderboard).toBe(null)
})

