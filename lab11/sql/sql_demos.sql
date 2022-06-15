-- For a single line comment
/*
This
is a multi
line comment
*/

/*
--Some psql commands:
\l lists all the databases in psql
\c <database_name> to switch to the specific database, in this case "database_name"

--Restoring the database from a backup:
psql -d sql_lab < User/sql_labs.sql (the path of sql file)

--If you in sql_lab (database), 
sql_lab=# \dt to get the list of all the tables in the database
sql_lab=# \d students to get the detail of student table


--Create table: 
sql_lab=# CREATE TABLE cars ("id" SERIAL, "make" VARCHAR(50), "model" VARCHAR(50), "doors" INTEGER, "description" TEXT);

*/

CREATE TABLE "cars" (
    "id" SERIAL, /* Auto incrementing four-byte integer*/
        /*
    --     [BIG]SERIAL is a special data type unique to PostgreSQL.
    --     It creates a [BIG]INT that are auto-incremented. When a new
    --     row is inserted, we'll not specify this column ourselves.
    --     We call this "id" the PRIMARY KEY. It acts as a unique identifier
    --     for rows of the table.
    --   */
    "make" VARCHAR(50), /* A charcter string with max 50 characteres length*/
    "model" VARCHAR(50),
    "doors" INTEGER, /* Whole number*/
    "description" TEXT /* A cahracter string with unlimited length */
);

-- Important Notes:
-- ALWAYS terminate SQL queries with a `;`. This
-- absolutely required!


/*
String in SQL is within ''
Identifier in SQL is within "" (the column name)
*/


--ALTER TABLE
ALTER TABLE students ADD COLUMN graduation_date TIMESTAMP;


--CRUD (CREATE READ UPDATE DELETE)

--!CREATE!
--For single insert
INSERT INTO students
(first_name, last_name, email, phone_number)
VALUES
('Tam', 'Smith', 'example@codecore.ca', '555-555-5555');

--For multiple inserts
INSERT INTO students
(first_name, last_name, email, phone_number)
VALUES
('Tam', 'Bob', 'example2@codecore.ca', '555-555-5555'),
('Tam', 'Doe', 'example3@codecore.ca', '555-555-5555'),
('Tam', 'Black', 'example4@codecore.ca', '555-555-5555');

--!READ!
--SELECT <column> FROM <table> [WHERE] [GROUP] [HAVING] [ORDER BY] [LIMIT] [OFFSET] [FETCH] [FOR]
SELECT * FROM students;

--WHERE is to filter columns
SELECT * FROM students WHERE "first_name" = 'Tam';
--only give first_name and last_name information
SELECT first_name, last_name FROM students WHERE "first_name" = 'Tam'; 

SELECT first_name, last_name FROM students WHERE "id" = 1; 

SELECT first_name, last_name FROM students WHERE "id" < 5; 

SELECT * FROM students WHERE "age" > 40;

SELECT first_name FROM students WHERE "registration_date" >= current_date - 2000; 

--AND/OR
SELECT * FROM students WHERE id > 100 AND id < 200;
SELECT * FROM students WHERE age > 40 OR age < 20;

--NULL/NOT NULL
SELECT * FROM students WHERE age < 20 OR age IS NULL;

--LIKE/ILIKE
--like is exact and case sensitive, ilike is case insensitive
SELECT * FROM students WHERE first_name LIKE 'Jo%';
SELECT * FROM students WHERE first_name ILIKE 'jo%';

SELECT * FROM students WHERE first_name ILIKE '%nn%' OR last_name ILIKE '%nn%';

--BETWEEN
SELECT * FROM students WHERE age BETWEEN 25 AND 35;
SELECT first_name, last_name, registration_date FROM students WHERE registration_date BETWEEN current_date -1500 AND current_date -1000; 

--ORDER BY (ASC / DESC)
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name ASC;
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC;

SELECT first_name, last_name, age FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name, age;

--LIMIT
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC LIMIT 3; 

-- LIMIT  
-- clause used to limit the data to the x rows
-- Must put it at the end of the query

SELECT first_name, last_name FROM students WHERE first_name ILIKE 'ke%' LIMIT 10;

--OFFSET
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC OFFSET 2;
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC OFFSET 10;
SELECT first_name, last_name FROM students WHERE first_name ILIKE 'jo%' ORDER BY last_name DESC LIMIT 3 OFFSET 2;


--AGGREGATE FUNCTIONS
--COUNT
SELECT COUNT(*) FROM students;
SELECT COUNT(*) FROM students WHERE age > 25;

--AS
--For the query purpose to show the result / not creating columns in table
SELECT COUNT(*) AS student_count FROM students;

--SUM
SELECT SUM(age) AS total_years FROM students;

--AVG
SELECT AVG(age) AS avg_age FROM students;

--ROUND
SELECT ROUND(AVG(age)) AS avg_age FROM students;

--MAX/MIN
SELECT MAX(age) AS max_age, MIN(age) AS min_age,  AVG(age) AS avg_age, SUM(age) AS total_years FROM students;

--GROUP BY
SELECT COUNT(*) AS occurences, first_name FROM students GROUP BY first_name;


--!UPDATE!
UPDATE students 
SET first_name = 'Steph'
WHERE id=1;


--!DELETE!
DELETE FROM students where id=504;