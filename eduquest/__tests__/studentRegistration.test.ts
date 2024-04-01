"use server";

import { expect, test, vi } from 'vitest';
import { submitStudentInfo } from '@/app/Register/StudentRegistration/StudentRegisterFunction/submitStudentInfo';
import prisma from '@/app/lib/prisma';
import React from 'react'

    // const formData = new FormData();
    
    const fname = "Test"
    const lname = "User"
    const username = "testuser"
    const email = "testuser@example.com"
    const password = "testpass"
    const studentIdNum = 123

    // formData.append("fname", fname)
    // formData.append("lname", lname)
    // formData.append("username", username)
    // formData.append("email", email)
    // formData.append("studentId", studentId)
    // formData.append("password", password)

    // submitStudentInfo(formData)

test('testing that student information being submitted properly to database', async () => {  

    const student = await prisma.student.findFirst({
        where: {
            studentUid: 123
        }
    })
    
    const suid = student?.studentUid as number;
    const sfname = student?.studentFirstName as string;
    const slname = student?.studentLastName as string;
    const suser = student?.studentUsername as string;
    const spass = student?.studentPassword as string;
    const semail = student?.studentEmail as string;
    const grade = student?.overallGrade as null;
    const attendence = student?.attendence as null;
    const leaderboard = student?.leaderboardPosition as null;


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

