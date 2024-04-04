import { expect, test, vi } from 'vitest';
import { submitTeacherInfo } from '@/app/Register/TeacherRegistration/TeacherRegistrationFunction/submitTeacherInfo';
import prisma from '@/app/lib/prisma';
import { fireEvent, getByText, getByTitle, render, screen } from "@testing-library/react";
import React from 'react'
import StudentRegistration from "@/app/Register/StudentRegistration/page";
    //constant variables for testing
    const fname = "test"
    const lname = "teacher"
    const username = "testteacher"
    const email = "testteacher@example.com"
    const facultyId = "123"
    const password = "testpass"
    const facultyIdNum = 123
//starting testing
test('testing that teacher information being submitted properly to database', async () => {
    //finding test teacher values
    const teacher = await prisma.teacher.findFirst({
        where: {
            teacherFirstName: "test"
        }
    })
    //assigning teacher values to variables
    const tuid = teacher?.teacherUid as number;
    const tfname = teacher?.teacherFirstName as string;
    const tlname = teacher?.teacherLastName as string;
    const tuser = teacher?.teacherUsername as string;
    const tpass = teacher?.teacherPassword as string;
    const temail = teacher?.teacherEmail as string;
    const educationlevel = teacher?.educationLevel as null;
    const noc = teacher?.numOfCourses as null;
    const nos = teacher?.numOfSessions as null;

    //ensuring that retireved values are correct
    expect(tuid).toBe(facultyIdNum)
    expect(tfname).toBe(fname)
    expect(tlname).toBe(lname)
    expect(tuser).toBe(username)
    expect(tpass).toBe(password)
    expect(temail).toBe(email)
    expect(educationlevel).toBe(null)
    expect(noc).toBe(null)
    expect(nos).toBe(null)
})