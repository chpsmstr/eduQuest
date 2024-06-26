import { submitStudentInfo } from "@/app/Register/StudentRegistration/StudentRegisterFunction/submitStudentInfo";
import { submitTeacherInfo } from "@/app/Register/TeacherRegistration/TeacherRegistrationFunction/submitTeacherInfo";
import { submitClassInfo } from "@/app/UserPages/Admin/CreateClass/submitClassInfo/submitClassInfo";
    //formdata sent to studentSubmitInfor
    const studentFormData = new FormData();
    //test values in formdata that is sent
    const istest = "test"
    const studentFname = "Test"
    const studentLname = "User"
    const studentUsername = "testuser"
    const studentEmail = "testuser@example.com"
    const studentId = "123"
    const studentPassword = "testpass"
    const studentIdNum = 123
    //add values to form data
    studentFormData.append("istest", istest)
    studentFormData.append("fname", studentFname)
    studentFormData.append("lname", studentLname)
    studentFormData.append("username", studentUsername)
    studentFormData.append("email", studentEmail)
    studentFormData.append("studentId", studentId)
    studentFormData.append("password", studentPassword)
    //send to student submit info function
    submitStudentInfo(studentFormData)
    //new teacher form data
    const teacherFormData = new FormData();
    //test values in formdata that is sent
    const teacherFname = "test"
    const teacherLname = "teacher"
    const teacherUsername = "testteacher"
    const teacherEmail = "testteacher@example.com"
    const facultyId = "123"
    const teacherPassword = "testpass"
    const facultyIdNum = 123
    //adds test values to form data
    teacherFormData.append("istest", istest)
    teacherFormData.append("fname", teacherFname)
    teacherFormData.append("lname", teacherLname)
    teacherFormData.append("username", teacherUsername)
    teacherFormData.append("email", teacherEmail)
    teacherFormData.append("facultyId", facultyId)
    teacherFormData.append("password", teacherPassword)
    //sends form data to submit teacher function
    submitTeacherInfo(teacherFormData)

    const courseFormData = new FormData()
    //setting variables to be testing values
    const courseName = "Test"
    const teacherId = "123"
    const courseColor = "red"
    const courseSection = "101"
    const classCode = "ABCD1234"
    //adding testing values to course form data
    courseFormData.append("className", courseName)
    courseFormData.append("teacherId", teacherId)
    courseFormData.append("classColor", courseColor)
    courseFormData.append("classSection", courseSection)
    courseFormData.append("classCode", classCode)
    //sending form data to submitClassInfo function
    submitClassInfo(courseFormData)

