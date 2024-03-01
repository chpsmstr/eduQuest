CREATE DATABASE classes;
go

USE classes;
go

DROP TABLE student;
DROP TABLE course;
DROP TABLE assignment;
DROP TABLE administrator;
DROP TABLE teacher;

CREATE TABLE student (
    studentId           INT IDENTITY
    studentFirstName    VARCHAR(40),
    studentLastName     VARCHAR(40),
    studentUsername     VARCHAR(40),
    studentEmail        VARCHAR(50),
    overallGrade        DECIMAL(3,2),
    attendence          DECIMAL(3,2),
    leaderboardPosition INT,
    PRIMARY KEY(studentId)
);

CREATE TABLE teacher (
    teacherId           INT IDENTITY,
    teacherFirstName    VARCHAR(40),
    teacherLastName     VARCHAR(40),
    teacherUsername     VARCHAR(40),
    teacherEmail        VARCHAR(50),
    educationLevel      VARCHAR(20),
    numOfCourses        INT,
    numOfSessions       INT,
    PRIMARY KEY(teacherId)
);

CREATE TABLE administrator (
    adminId             INT IDENTITY,
    adminFirstName      VARCHAR(40),
    adminLastName       VARCHAR(40),
    adminUsername       VARCHAR(40),
    adminEmail          VARCHAR(50),
    PRIMARY KEY(adminId)
);

CREATE TABLE course (
    courseId            INT IDENTITY,
    courseName          VARCHAR(40),
    courseSection       INT,
    numEnrolled         INT,
    courseAverage       DECIMAL(3,2),
    PRIMARY KEY(courseId)
);

CREATE TABLE assignment (
    assignmentId        INT IDENTITY,
    assignmentName      VARCHAR(40),
    startDate           DATETIME,
    dueDate             DATETIME,
    worth               DECIMAL(3,2),
    assignmentType      VARCHAR(40),
    PRIMARY KEY(assignmentId)
);
