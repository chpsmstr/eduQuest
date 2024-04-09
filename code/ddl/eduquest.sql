CREATE DATABASE IF NOT EXISTS eduquest;

USE eduquest;

DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS course;
DROP TABLE IF EXISTS assignment;
DROP TABLE IF EXISTS doesAssignment;
DROP TABLE IF EXISTS quiz;
DROP TABLE IF EXISTS doesQuiz;
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
    teacherId           INT NOT NULL,
    PRIMARY KEY(courseId)
) ENGINE=InnoDB;

CREATE TABLE assignment(
    assignmentId        INT NOT NULL AUTO_INCREMENT,
    assignmentName      VARCHAR(40),
    startDate           DATETIME,
    dueDate             DATETIME,
    worth               DECIMAL(3,2),
    assignmentQuestion  VARCHAR(500),
    classId             INT,
    PRIMARY KEY(assignmentId)
) ENGINE=InnoDB;

CREATE TABLE doesAssignment(
    doesAssignmentId        INT NOT NULL AUTO_INCREMENT,
    assignmentId            INT NOT NULL,
    studentId               INT NOT NULL,
    response                VARCHAR(1000),
    assignmentGrade         DECIMAL(5,2),
    PRIMARY KEY(doesAssignmentId)
) ENGINE=InnoDB;

CREATE TABLE quiz(
    quizId        INT NOT NULL AUTO_INCREMENT,
    quizName      VARCHAR(40),
    startDate           DATETIME,
    dueDate             DATETIME,
    worth               DECIMAL(3,2),
    classId             INT,
    PRIMARY KEY(quizId)
) ENGINE=InnoDB;

CREATE TABLE doesQuiz(
    doesQuizId        INT NOT NULL AUTO_INCREMENT,
    quizId            INT NOT NULL,
    studentId          INT NOT NULL,
    quizGrade         DECIMAL(5,2),
    PRIMARY KEY(doesQuizId)
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
    enrollId            INT NOT NULL AUTO_INCREMENT,
    studentId           INT NOT NULL,
    courseId            INT NOT NULL,
    PRIMARY KEY(enrollId)
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
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('History', 303, 5, 75.25, 'WNS1HFIR', 'pink', 3);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('Robotics', 404, 4, 82.00, 'PJPO702D', 'indigo', 1);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('English', 505, 4, 91.50, 'C5BONDSV', 'blue', 2);
INSERT INTO course (courseName, courseSection, numEnrolled, courseAverage, courseCode, courseColour, teacherId) VALUES ('Film Studies', 606, 5, 98.00, '93XFQYXG', 'orange', 3);

-- -- assignment dummy data being inserted for testing: 
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Quadratics  Assignment', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 
'What strategies can be employed to determine the vertex of a quadratic function without graphing it?', 1);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Derivatives Assignment', '2024-03-22 08:00:00', '2024-03-23 23:59:59', '6.00', 
'How can the concept of derivatives be applied to determine critical points and identify extrema in a given mathematical function?', 1);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Critical Application Assignment', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '7.50', 
'How does the application of the Pythagorean theorem extend beyond basic geometry to solve real-world problems in fields such as architecture, engineering, and physics?', 1);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Biology  Assignment', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 
'How does the process of cellular respiration contribute to the production of ATP, and what role do different organelles, such as mitochondria and chloroplasts, play in this energy conversion process?', 2);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Physics Assignment', '2024-03-22 08:00:00', '2024-03-23 23:59:59', '8.00', 
'Explain the concept of momentum conservation in collisions, and how it applies to both elastic and inelastic collisions. Provide examples to illustrate the principles involved.', 2);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('18th Century History Assignment', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '7.50', 
'How did the Enlightenment shape political ideas and governance systems in 18th-century Europe and North America?', 3);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Industrial Revolution Assignment', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 
'What were the main causes and consequences of the Industrial Revolution in the 19th century?', 3);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Robotics History Assignment', '2024-03-22 08:00:00', '2024-03-23 23:59:59', '4.00', 
'How have advancements in robotics revolutionized various industries and impacted society, particularly in fields such as manufacturing, healthcare, and exploration?', 4);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Engineering Assignment', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '7.50', 
'How do engineers use kinematics and dynamics to design robots for precise motion control and manipulation?', 4);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Actuators  Assignment', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 
'How do robotic actuators contribute to the movement and functionality of robotic systems, and what are some common types of actuators used in modern robotics?', 4);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Literature Assignment', '2024-03-22 08:00:00', '2024-03-23 23:59:59', '9.00', 
'How do authors use symbolism to convey deeper meanings and themes in literature? Provide examples from a novel or poem you have studied.', 5);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Critical Reading Assignment', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '7.50', 
'How does the use of point of view affect the your understanding and interpretation of a story? Provide examples of different narrative perspectives and their impact on storytelling.', 5);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Literary Devices Assignment', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 
'How do literary devices such as metaphor, simile, and imagery contribute to the development of themes and characterization in poetry? Provide examples from a poem you have analyzed.', 5);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Cinematography Assignment', '2024-03-22 08:00:00', '2024-03-23 23:59:59', '3.00', 
'How do cinematographic techniques, such as framing, lighting, and camera movement, contribute to the narrative depth and emotional impact of a film, exemplified through specific scenes or sequences?', 6);
INSERT INTO assignment (assignmentName, startDate, dueDate, worth, assignmentQuestion, classId) VALUES ('Sound Design Assignment', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '7.50', 
"How does the use of sound design influence the viewer's perception and immersion in a film's narrative and atmosphere? Provide examples of how sound is utilized effectively in a particular movie to enhance storytelling and evoke emotional responses.", 6);

-- -- quiz dummy data being inserted for testing:
INSERT INTO quiz (quizName, startDate, dueDate, worth, classId) VALUES ('Algebra Quiz', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 1);
INSERT INTO quiz (quizName, startDate, dueDate, worth, classId) VALUES ('Ancient Civilizations Quiz', '2024-03-24 08:00:00', '2024-03-25 23:59:59', '7.50', 3);
INSERT INTO quiz (quizName, startDate, dueDate, worth, classId) VALUES ('Cinema History Quiz', '2024-03-20 08:00:00', '2024-03-21 23:59:59', '5.00', 6);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('Solve for x: 2x + 5 = 13', '2', '4', '6', '8', 2, 1);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('Solve for y: 3y - 7 = 20', '3', '5', '7', '9', 4, 1);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('Solve for z: 4z/2 + 6 = 14', '4', '6', '8', '10', 1, 1);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('Which ancient chinese dynasty lasted only 15 years?', 'Zhou', 'Qin', 'Han', 'Shang', 2, 2);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('Which ancient civilization first invented roads?', 'Greece', 'Rome', 'Mesopotamia', 'Egypt', 3, 2);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('Who was the first roman emperor?', 'Augustus Caesar', 'Julius Caesar', 'Tiberius', 'Caligula', 1, 2);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('Where was paper invented?', 'Rome', 'Mesopotamia', 'China', 'Egypt', 1, 2);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('In what year was "2001: A Space Odyssey" released? ', '1962', '1968', '1975', '2001', 2, 3);
INSERT INTO question(questionContent, firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, correctAnswer, quizId) VALUES ('In what year was "The Godfather" released?', '1969', '1970', '1971', '1972', 4, 3);

-- -- enrollment dummy data being inserted for testing: 
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
INSERT INTO enrolled (studentId, courseId) VALUES (1,3);
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

-- -- Dummy values for assignments completed
INSERT INTO doesAssignment (assignmentId, studentId, response, assignmentGrade) VALUES (1,1, 
'To determine the vertex of a quadratic function without graphing it, you can use the formula x= -b/(2a) for the x-coordinate of the vertex, where a,  b, and c are coefficients in the quadratic equation ax^2+bx+c. Then, plug this value of x into the quadratic equation to find the corresponding y-coordinate.',
'100');
INSERT INTO doesAssignment (assignmentId, studentId, response, assignmentGrade) VALUES (2,1,
"Derivatives find critical points where stuff might be high or low, and then you check if the stuff goes up and then down or down and then up, which tells you if it's a big hill or a low valley.",
'45.0');
INSERT INTO doesAssignment (assignmentId, studentId, response, assignmentGrade) VALUES (7,1,
'The 19th-century Industrial Revolution, driven by technological innovation, urbanization, and capitalism, sparked unprecedented economic growth and urban development. However, it also brought about significant social upheaval, as rural populations migrated to cities in search of work, leading to the emergence of urban slums and labor movements. Additionally, industrialization contributed to environmental degradation and public health challenges, highlighting the complex and multifaceted impact of this transformative period in history.',
'85.0');
INSERT INTO doesAssignment (assignmentId, studentId, response, assignmentGrade) VALUES (11,1,
'Authors use symbolism in literature to convey deeper meanings and themes by assigning symbolic significance to objects, characters, or events. In F. Scott Fitzgeralds "The Great Gatsby," examples include the green light symbolizing Gatsbys unattainable dream and the valley of ashes representing moral decay beneath the surface of wealth and glamour. These symbols enhance themes of longing, disillusionment, and the corrupting influence of materialism.',
'92.5');
INSERT INTO doesAssignment (assignmentId, studentId, response, assignmentGrade) VALUES (12, 1,
'The narrative perspective used in a story significantly affects our understanding and interpretation. For example, first-person perspective, like in "The Catcher in the Rye," provides intimacy with the protagonist but limits understanding of other characters. Third-person omniscient, as seen in "To Kill a Mockingbird," offers broader insights but may sacrifice immediacy. Second-person perspective, like in "Bright Lights, Big City," creates immersion by directly addressing the reader. Each perspective shapes how we engage with the story and interpret its themes.',
'97.5');

-- -- Dummy values for quizzes completed
INSERT INTO doesQuiz (quizId, studentId, quizGrade) VALUES (1,1,'100');
INSERT INTO doesQuiz (quizId, studentId, quizGrade) VALUES (2,1,'75.0');