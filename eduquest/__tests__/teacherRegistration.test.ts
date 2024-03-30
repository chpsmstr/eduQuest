import { expect, test, vi } from 'vitest';
import { submitTeacherInfo } from '@/app/Register/TeacherRegistration/TeacherRegistrationFunction/submitTeacherInfo';
import prisma from '@/app/lib/prisma';
import { fireEvent, getByText, getByTitle, render, screen } from "@testing-library/react";
import React from 'react'
import StudentRegistration from "@/app/Register/StudentRegistration/page";

vi.mock('@/app/Register/StudentRegistration/page')
test('testing that student information being submitted properly to database', async () => {
    
    const formData = new FormData();
    
    const fname = "test"
    const lname = "teacher"
    const username = "testteacher"
    const email = "testteacher@example.com"
    const facultyId = "123"
    const password = "testpass"
    const facultyIdNum = 123

    formData.append("fname", fname)
    formData.append("lname", lname)
    formData.append("username", username)
    formData.append("email", email)
    formData.append("facultyId", facultyId)
    formData.append("password", password)

    submitTeacherInfo(formData)

    const teacher = await prisma.teacher.findFirst({
        where: {
            teacherFirstName: "test"
        }
    })

    const tuid = teacher?.teacherUid as number;
    const tfname = teacher?.teacherFirstName as string;
    const tlname = teacher?.teacherLastName as string;
    const tuser = teacher?.teacherUsername as string;
    const tpass = teacher?.teacherPassword as string;
    const temail = teacher?.teacherEmail as string;
    const educationlevel = teacher?.educationLevel as null;
    const noc = teacher?.numOfCourses as null;
    const nos = teacher?.numOfSessions as null;

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