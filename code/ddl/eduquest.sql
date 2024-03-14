CREATE DATABASE IF NOT EXISTS eduquest;

USE eduquest;

DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS assignment;
DROP TABLE IF EXISTS administrator;


CREATE TABLE student(
    studentId INT,
    studentFirstName    VARCHAR(40),
    studentLastName     VARCHAR(40),
    studentUsername     VARCHAR(40),
    studentPassword     VARCHAR(40),
    studentEmail        VARCHAR(50),
    overallGrade        DECIMAL(3,2),
    attendence          DECIMAL(3,2),
    leaderboardPosition INT,
    PRIMARY KEY(studentId)
) ENGINE=InnoDB;

CREATE TABLE teacher (
    teacherId           INT,
    teacherFirstName    VARCHAR(40),
    teacherLastName     VARCHAR(40),
    teacherUsername     VARCHAR(40),
    teacherPassword     VARCHAR(40),
    teacherEmail        VARCHAR(50),
    educationLevel      VARCHAR(20),
    numOfCourses        INT,
    numOfSessions       INT,
    PRIMARY KEY(teacherId)
) ENGINE=InnoDB;

CREATE TABLE administrator(
    adminId             INT,
    adminFirstName      VARCHAR(40),
    adminLastName       VARCHAR(40),
    adminusername       VARCHAR(40),
    adminPassword       VARCHAR(40),
    adminEmail          VARCHAR(50),
    PRIMARY KEY(adminId)
) ENGINE=InnoDB;

CREATE TABLE course (
    courseId            INT,
    courseName          VARCHAR(40),
    courseSection       INT,
    numEnrolled         INT,
    courseAverage       DECIMAL(3,2),
    PRIMARY KEY(courseId)
) ENGINE=InnoDB;

CREATE TABLE assignment(
    assignmentId        INT,
    assignmentName      VARCHAR(40),
    startDate           DATETIME,
    dueDate             DATETIME,
    worth               DECIMAL(3,2),
    assignmentType      VARCHAR(40),
    PRIMARY KEY(assignmentId)
) ENGINE=InnoDB;

INSERT INTO student (studentId, studentFirstName, studentLastName, studentUsername, studentEmail) VALUES ('1', 'Joe', 'Smith', 'JSmith', 'jsmith@gmail.com');
INSERT INTO teacher (teacherId, teacherFirstName, teacherLastName, teacherUsername, teacherEmail) VALUES ('1', 'Jane', 'Doe', 'JDoe', 'jdoe@gmail.com');
INSERT INTO administrator (adminId, adminFirstName, adminLastName, adminUsername, adminEmail) VALUES ('1', 'Jack', 'Wright', 'JWright', 'jwright@gmail.com');
INSERT INTO course (courseId, courseName, courseSection) VALUES ('310', 'COSC', '1');
INSERT INTO assignment (assignmentId, assignmentName) VALUES ('1', 'Assignment 1');