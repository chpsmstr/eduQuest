CREATE DATABASE IF NOT EXISTS eduquest;

USE eduquest;

DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS assignment;
DROP TABLE IF EXISTS quiz;
DROP TABLE IF EXISTS question;
DROP TABLE IF EXISTS administrator;
DROP TABLE IF EXISTS enrolled;


CREATE TABLE student(
    studentId           INT NOT NULL AUTO_INCREMENT,
    studentUid          INT,    
    studentFirstName    VARCHAR(40),
    studentLastName     VARCHAR(40),
    studentUsername     VARCHAR(40),
    studentPassword     VARCHAR(40),
    studentEmail        VARCHAR(50),
    overallGrade        DECIMAL(4,2),
    attendence          DECIMAL(4,2),
    leaderboardPosition INT,
    PRIMARY KEY(studentId)
) ENGINE=InnoDB;

CREATE TABLE teacher (
    teacherId           INT NOT NULL AUTO_INCREMENT,
    teacherUid          INT,
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
    adminId             INT NOT NULL AUTO_INCREMENT,
    adminUid            INT,
    adminFirstName      VARCHAR(40),
    adminLastName       VARCHAR(40),
    adminUsername       VARCHAR(40),
    adminPassword       VARCHAR(40),
    adminEmail          VARCHAR(50),
    PRIMARY KEY(adminId)
) ENGINE=InnoDB;

CREATE TABLE course (
    courseId            INT NOT NULL AUTO_INCREMENT,
    courseName          VARCHAR(40),
    courseSection       INT,
    numEnrolled         INT,
    courseAverage       DECIMAL(4,2),
    courseCode          VARCHAR(20),
    courseColour        VARCHAR(20),
    teacherId           INT,
    PRIMARY KEY(courseId)
) ENGINE=InnoDB;

CREATE TABLE assignment(
    assignmentId        INT NOT NULL AUTO_INCREMENT,
    assignmentName      VARCHAR(40),
    startDate           DATETIME,
    dueDate             DATETIME,
    worth               DECIMAL(3,2),
    assignmentQuestion  VARCHAR(500),
    assignmentResponse  VARCHAR(1000),
    PRIMARY KEY(assignmentId)
) ENGINE=InnoDB;

CREATE TABLE quiz(
    quizId        INT NOT NULL AUTO_INCREMENT,
    quizName      VARCHAR(40),
    startDate           DATETIME,
    dueDate             DATETIME,
    worth               DECIMAL(3,2),
    PRIMARY KEY(quizId)
) ENGINE=InnoDB;

CREATE TABLE question(
    questionId      INT NOT NULL AUTO_INCREMENT,
    questionContent VARCHAR(100),
    firstAnswer     VARCHAR(100),
    secondAnswer     VARCHAR(100),
    thirdAnswer     VARCHAR(100),
    fourthAnswer     VARCHAR(100),
    correctAnswer   INT,
    quizId          INT NOT NULL,
    PRIMARY KEY(questionId, quizId)
) ENGINE=InnoDB;

CREATE TABLE enrolled(
    studentId           INT NOT NULL,
    courseId            INT NOT NULL,
    PRIMARY KEY(studentId, courseId)
) ENGINE=InnoDB;

-- student dummy data being inserted for testing:
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (1234, 'John', 'Doe', 'johndoe123', 'password123', 'johndoe@example.com', 85.50, 92.00, 2);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (5678, 'Jane', 'Smith', 'janesmit456', 'password456', 'janesmith@example.com', 78.28, 87.50, 3);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (9876, 'Michael', 'Johnson', 'michaeljohnson789', 'password789', 'michaeljohnson@example.com', 92.75, 95.75, 1);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (1111, 'Edward', 'Knight', 'eddwardknight111', 'password111', 'edwardknight@example.com', 68.25, 78.25, 5);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (3333, 'Robert', 'Adams', 'robertadams333', 'password333', 'robertadams@example.com', 75.00, 85.00, 4);
INSERT INTO student (studentUid, studentFirstName, studentLastName, studentUsername, studentPassword, studentEmail, overallGrade, attendence, leaderboardPosition) VALUES (5555, 'Trisha', 'Gao', 'trishagao555', 'password555', 'trishagao@example.com', 43.50, 48.00, 6);

-- teacher dummy data being inserted for testing:
INSERT INTO teacher (teacherUid, teacherFirstName, teacherLastName, teacherUsername, teacherPassword, teacherEmail, educationLevel, numOfCourses, numOfSessions) VALUES (10001, 'Alice', 'Johnson', 'alicej123', 'pass123', 'alicej@example.com', 'Bachelor', 3, 6);
INSERT INTO teacher (teacherUId, teacherFirstName, teacherLastName, teacherUsername, teacherPassword, teacherEmail, educationLevel, numOfCourses, numOfSessions) VALUES (10002, 'Bob', 'Smith', 'bobsmith456', 'pass456', 'bobsmith@example.com', 'Master', 5, 8);
INSERT INTO teacher (teacherUId, teacherFirstName, teacherLastName, teacherUsername, teacherPassword, teacherEmail, educationLevel, numOfCourses, numOfSessions) VALUES (10003, 'Charlie', 'Williams', 'charliew789', 'pass789', 'charlierw@example.com', 'PhD', 4, 10);

-- -- admin dummy data being inserted for testing:
INSERT INTO administrator (adminUid, adminFirstName, adminLastName, adminUserName, adminPassword, adminEmail) VALUES (101, 'Emily', 'Taylor', 'admin1', 'adminpass1', 'admin1@example.com');
INSERT INTO administrator (adminUid, adminFirstName, adminLastName, adminUsername, adminPassword, adminEmail) VALUES (202, 'Mathew', 'Clark', 'admin2', 'adminpass2', 'admin2@example.com');
INSERT INTO administrator (adminUid, adminFirstName, adminLastName, adminUsername, adminPassword, adminEmail) VALUES (303, 'Olivia', 'Wilson', 'admin3', 'adminpass3', 'admin3@example.com');

-- -- course dummy data being inserted for testing:
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('Mathematics', 101, 4, 89.50, 'RJF05MD7', 'red', 1);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('Science', 202, 4, 92.75, 'Z47A44X9', 'green', 2);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('History', 303, 5, 75.25, 'WNS1HFIR', 'yellow', 3);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('Robotics', 404, 4, 82.00, 'PJPO702D', 'indigo', 1);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('English', 505, 4, 91.50, 'C5BONDSV', 'blue', 2);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('Film Studies', 606, 5, 98.00, '93XFQYXG', 'orange', 3);

-- -- assignment dummy data being inserted for testing: 
-- -- INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentType) VALUES ('Quiz 1', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 'Quiz');
-- -- INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentType) VALUES ('Assignment 1', '2024-03-22 08:00:00', '2024-03-23 23:59:59', '2.50', 'File Upload');
-- -- INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentType) VALUES ('QUiz 2', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '5.00', 'Quiz');

INSERT INTO enrolled (studentId, courseId) VALUES (1,1);
INSERT INTO enrolled (studentId, courseId) VALUES (1,2);
INSERT INTO enrolled (studentId, courseId) VALUES (2,1);
INSERT INTO enrolled (studentId, courseId) VALUES (2,3);
INSERT INTO enrolled (studentId, courseId) VALUES (3,1);
INSERT INTO enrolled (studentId, courseId) VALUES (3,2);
INSERT INTO enrolled (studentId, courseId) VALUES (3,3);
INSERT INTO enrolled (studentId, courseId) VALUES (4,2);
INSERT INTO enrolled (studentId, courseId) VALUES (4,3);
INSERT INTO enrolled (studentId, courseId) VALUES (5,1);
INSERT INTO enrolled (studentId, courseId) VALUES (5,2);
INSERT INTO enrolled (studentId, courseId) VALUES (5,3);
INSERT INTO enrolled (studentId, courseId) VALUES (6,3);
INSERT INTO enrolled (studentId, courseId) VALUES (1,4);
INSERT INTO enrolled (studentId, courseId) VALUES (1,5);
INSERT INTO enrolled (studentId, courseId) VALUES (2,4);
INSERT INTO enrolled (studentId, courseId) VALUES (2,6);
INSERT INTO enrolled (studentId, courseId) VALUES (3,4);
INSERT INTO enrolled (studentId, courseId) VALUES (3,5);
INSERT INTO enrolled (studentId, courseId) VALUES (3,6);
INSERT INTO enrolled (studentId, courseId) VALUES (4,5);
INSERT INTO enrolled (studentId, courseId) VALUES (4,6);
INSERT INTO enrolled (studentId, courseId) VALUES (5,4);
INSERT INTO enrolled (studentId, courseId) VALUES (5,5);
INSERT INTO enrolled (studentId, courseId) VALUES (5,6);
INSERT INTO enrolled (studentId, courseId) VALUES (6,6);