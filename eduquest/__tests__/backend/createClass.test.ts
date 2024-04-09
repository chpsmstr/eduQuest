"use server";

import { expect, test, vi } from 'vitest';
import prisma from '@/app/lib/prisma';

const courseName = "Test"
const teacherId = 123
const courseColor = "red"
const courseSection = 101
const classCode = "ABCD1234"

test('testing that class information being submitted properly to database', async () => {
    const course = await prisma.course.findFirst({
        where: {
            courseName: "Test"
        }
    })

    const cname = course?.courseName as string
    const cSection = course?.courseSection as number
    const numEnrolled = course?.numEnrolled as number
    const cAvg = Number(course?.courseAverage)
    const cCode = course?.courseCode as string
    const cColor = course?.courseColour as string
    const tId = course?.teacherId as number

    expect(cname).toBe(courseName)
    expect(cSection).toBe(courseSection)
    expect(numEnrolled).toBe(null)
    expect(cAvg).toBe(0)
    expect(cCode).toBe(classCode)
    expect(cColor).toBe(courseColor)
    expect(tId).toBe(teacherId)
})
