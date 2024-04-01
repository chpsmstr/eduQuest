import { submitStudentInfo } from "@/app/Register/StudentRegistration/StudentRegisterFunction/submitStudentInfo";
import { submitTeacherInfo } from "@/app/Register/TeacherRegistration/TeacherRegistrationFunction/submitTeacherInfo";

    const studentFormData = new FormData();
    
    const studentFname = "Test"
    const studentLname = "User"
    const studentUsername = "testuser"
    const studentEmail = "testuser@example.com"
    const studentId = "123"
    const studentPassword = "testpass"
    const studentIdNum = 123

    studentFormData.append("fname", studentFname)
    studentFormData.append("lname", studentLname)
    studentFormData.append("username", studentUsername)
    studentFormData.append("email", studentEmail)
    studentFormData.append("studentId", studentId)
    studentFormData.append("password", studentPassword)

    submitStudentInfo(studentFormData)

    const teacherFormData = new FormData();

    const teacherFname = "test"
    const teacherLname = "teacher"
    const teacherUsername = "testteacher"
    const teacherEmail = "testteacher@example.com"
    const facultyId = "123"
    const teacherPassword = "testpass"
    const facultyIdNum = 123

    teacherFormData.append("fname", teacherFname)
    teacherFormData.append("lname", teacherLname)
    teacherFormData.append("username", teacherUsername)
    teacherFormData.append("email", teacherEmail)
    teacherFormData.append("facultyId", facultyId)
    teacherFormData.append("password", teacherPassword)

    submitTeacherInfo(teacherFormData)

