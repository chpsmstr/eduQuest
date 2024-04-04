import { submitStudentInfo } from "@/app/Register/StudentRegistration/StudentRegisterFunction/submitStudentInfo";
import { submitTeacherInfo } from "@/app/Register/TeacherRegistration/TeacherRegistrationFunction/submitTeacherInfo";
    //formdata sent to studentSubmitInfor
    const studentFormData = new FormData();
    //test values in formdata that is sent
    const studentFname = "Test"
    const studentLname = "User"
    const studentUsername = "testuser"
    const studentEmail = "testuser@example.com"
    const studentId = "123"
    const studentPassword = "testpass"
    const studentIdNum = 123
    //add values to form data
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
    teacherFormData.append("fname", teacherFname)
    teacherFormData.append("lname", teacherLname)
    teacherFormData.append("username", teacherUsername)
    teacherFormData.append("email", teacherEmail)
    teacherFormData.append("facultyId", facultyId)
    teacherFormData.append("password", teacherPassword)
    //sends form data to submit teacher function
    submitTeacherInfo(teacherFormData)

