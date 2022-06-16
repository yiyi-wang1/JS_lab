--student projects by whose id is 2
SELECT title FROM projects WHERE student_id = 2;

--student ids and scores for the course with id 1
SELECT student_id, score FROM enrolments WHERE course_id = 1;

--CROSS JOIN
-- multiplies Table 1 rows by Table 2 rows
SELECT * FROM students CROSS JOIN projects;

--INNER JOIN (SOMETIMES JUST CALLED JOIN)
--ADDS THE "ON" CLAUSE 
SELECT * FROM students
INNER JOIN projects
ON students.id = projects.student_id;

--FIRST JOIN
SELECT students.id, students.first_name, projects.title 
FROM students
INNER JOIN projects
ON students.id = projects.student_id
ORDER BY students.first_name;

SELECT students.id, students.first_name, projects.title
FROM students
INNER JOIN projects
ON students.id = projects.student_id
ORDER BY projects.title;

--retreive new column with count of projects
SELECT students.id, students.first_name, COUNT(projects.title) AS project_count
FROM students
INNER JOIN projects
ON students.id = projects.student_id
GROUP BY students.id
ORDER BY project_count DESC;

--Mutiple Join
SELECT students.id, students.first_name, courses.title
FROM students
JOIN enrolments ON students.id = enrolments.student_id
JOIN courses ON enrolments.course_id = courses.id
WHERE courses.title ILIKE '%hybrid matrix%';

SELECT courses.title, students.first_name, students.last_name, enrolments.score
FROM students
JOIN enrolments ON students.id = enrolments.student_id
JOIN courses ON enrolments.course_id = courses.id
WHERE students.first_name ILIKE 'Re%';

> FULL OUTER JOIN
SELECT * FROM students
FULL OUTER JOIN projects
ON students.id = projects.student_id;

> LEFT JOIN
SELECT * FROM students
LEFT JOIN projects
ON students.id = projects.student_id;

Above will first do CROSS JOIN, the INNER JOIN, then
add unjoined rows for students table

> RIGHT JOIN
SELECT * FROM students
RIGHT JOIN projects
ON students.id = projects.student_id;

Above will first do CROSS JOIN, the INNER JOIN, then
add unjoined rows for projects table



--LEFT JOIN
--STUDENTS AND PROJECTS
SELECT students.id, students.first_name, projects.title AS project_title
FROM students
LEFT JOIN projects
ON students.id = projects.student_id
ORDER BY students.id;

--WITHOUT PROJECT
SELECT students.id, students.first_name, projects.title AS project_title
FROM students LEFT JOIN projects
ON students.id = projects.student_id
WHERE projects.title IS NULL;

--Group by age
SELECT ARRAY_AGG(first_name), age, COUNT(*) AS age_count
FROM students
GROUP BY age
ORDER BY age_count DESC;

--Avg scorce of course
SELECT courses.title, AVG(enrolments.score) AS avg_score
FROM courses
INNER JOIN enrolments
ON courses.id = enrolments.course_id
GROUP BY courses.title
ORDER BY avg_score DESC;

--LAST ENROLLED
SELECT courses.id, courses.title, MAX(enrolments.created_at) AS recent
FROM courses
INNER JOIN enrolments ON courses.id = enrolments.course_id
GROUP BY courses.id
ORDER BY recent DESC;

--No of Enrolled students
SELECT * 
FROM (
    SELECT courses.title, COUNT(*) AS student_count
    FROM courses
    INNER JOIN enrolments
    ON courses.id = enrolments.course_id
    GROUP BY courses.id
    ORDER BY student_count DESC
) AS results
WHERE student_count >= 5;

--Failing Classes
SELECT * FROM(
    SELECT courses.id, courses.title, ROUND(AVG(enrolments.score)) AS avg_score, COUNT(*) AS count
    FROM courses
    INNER JOIN enrolments
    ON courses.id = enrolments.course_id
    GROUP BY courses.id
    ORDER BY avg_score DESC
) AS results
WHERE avg_score < 60;

--IN
SELECT id, first_name, last_name
FROM students
-- WHERE id =2 OR id = 5 OR, etc
WHERE id IN (2,3,4,500,1000);

--CONSTRAINTS
--NOT NULL
CREATE TABLE cars (
    make VARCHAR(50) CONSTRAINT must_exist NOT NULL,
    model VARCHAR(50) CONSTRAINT must_exist NOT NULL
);

--UNIQUE
ALTER TABLE students
ADD CONSTRAINT unique_email
UNIQUE (email);

ALTER TABLE cars
ADD CONSTRAINT unique_model
UNIQUE(model);
