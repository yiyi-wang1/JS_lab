/*
LAB 1
*/

--Insert student record
INSERT INTO students
(first_name, last_name, age, email, registration_date, phone_number)
VALUES
('John', 'Smith', 46, 'john@smith.com', TO_DATE('01/01/2016', 'DD/MM/YYYY'), '778.778.7787');

--Select that student from the database by fetching the last record
SELECT * FROM students WHERE first_name = 'John';

--Update the student age to 50
UPDATE students                                  
SET age = 50
WHERE id = 505;

--Delete that record using its id
DELETE FROM students WHERE id = 505;


/*
LAB 2
*/

--Select the first 10 students whose ages are between 35 and 45
SELECT * FROM students WHERE age BETWEEN 35 AND 45 LIMIT 10;

--Select the third set of 10 students whose ages are more than 25 and whose first names contain `le`. 
--The students must be ordered by their id in ascending order then first name in a descending order.
SELECT * FROM students WHERE age > 25 AND first_name ILIKE '%le%' ORDER BY id ASC, first_name DESC LIMIT 10 OFFSET 20;
-- SELECT first_name FROM students WHERE AGE > 25 AND first_name ILIKE '%le%' ORDER BY first_name DESC;


--Select the 10 oldest students (You should ignore students with an age that is `NULL`).
SELECT * FROM students WHERE age IS NOT NULL ORDER BY age DESC LIMIT 10;


--Select all students with age 45 whose last names contain the letter n.
SELECT * FROM students WHERE age = 45 AND last_name ILIKE '%n%';


--Select all the products that are on sale.
SELECT * FROM products WHERE price > sale_price;

--Select all the products that are on sale and have remaining items in stock ordered by the sale price in ascending order.
SELECT * FROM products WHERE price > sale_price AND remaining_quantity > 0 ORDER BY sale_price ASC;

--Select all the products priced between 25 and 50 (regular price) and that are on sale.
SELECT * FROM products WHERE price BETWEEN 25 AND 50 AND price > sale_price;


/*
LAB 3
*/

--Select the product whose stock has the most value (use sale price)
SELECT * (sales_price * remaining_quantity) AS stock_value FROM products WHERE remaining_quantity > 0 ORDER BY stock_value DESC LIMIT 1;

--Select the most expensive product whose price is between 25 and 50 with remaining quantity
SELECT * FROM products WHERE remaining_quantity > 0 AND price BETWEEN 25 AND 50 ORDER BY price DESC LIMIT 1;

--Select all products on sale with remaining quantity ordered by their price and then their name
SELECT * FROM products WHERE price > sale_price AND remaining_quantity > 0 ORDER BY price, name;

--Select the second set 20 results based on the previous query
SELECT * FROM products WHERE price > sale_price AND remaining_quantity > 0 ORDER BY price, name LIMIT 20 OFFSET 20;

--Find the average price of all products
SELECT AVG(price) AS avg_price FROM products;

--Find the average sale_price of all products that are on sale
SELECT AVG(sale_price) AS avg_sale_price FROM products WHERE price > sale_price;

--Find the average price of all products that are on sale with remaining quantity.
SELECT AVG(sale_price) AS avg_sale_price FROM products WHERE price > sale_price AND remaining_quantity > 0;

--Update all the products whose name contains `paper` (case insensitive) to have a remaining quantity of 0
UPDATE products
SET remaining_quantity = 0
WHERE name ILIKE '%paper%';

--Update all the products whose name contains `paper` or `steel` to have a remaining quantity of a random number between 5 and 25
UPDATE products
SET remaining_quantity = FLOOR(RANDOM()*(25-5+1))+5
WHERE name ILIKE '%paper%' OR name ILIKE '%steel%';

--Select the second set of 10 cheapest products (by `price` or `sale_price`) with remaining quantity
SELECT * FROM products WHERE remaining_quantity > 0 ORDER BY price ASC LIMIT 10 OFFSET 10;

--Build a query that groups the products by their sale price and show the number of products in that price and the sum of remaining quantity. 
--Label the count `product_count`
SELECT COUNT(*) AS product_count, SUM(remaining_quantity) AS remaining FROM products GROUP BY sale_price;

--[stretch] Update the most expensive product to have double its quantity in a single query
UPDATE products 
SET remaining_quantity = 2 * remaining_quantity 
WHERE id IN(
    SELECT id FROM products
    ORDER BY price DESC LIMIT 1
    FOR UPDATE
);

SELECT * FROM products ORDER BY price DESC LIMIT 1; 

/*
LAB 4
*/

--Find the number of students named 'Elinore'.
SELECT COUNT(*) FROM students WHERE first_name = 'Elinore' OR last_name = 'Elinore';

--List the `first_name`s that occur more than once in students, with the number occurrences of that name.
SELECT first_name, COUNT(*) AS occurences FROM students GROUP BY first_name HAVING COUNT(*) > 1;

--Refine the above query to list the 20 most common first_names among students, 
--in order first of how common they are, and alphabetically when names have the same count.
SELECT first_name, COUNT(*) AS occurences FROM students GROUP BY first_name ORDER BY COUNT(*) DESC, first_name ASC LIMIT 20;

--Find the most expensive product.
SELECT * FROM products ORDER BY price DESC LIMIT 1;

--Find the cheapest product that is on sale.
SELECT * FROM products WHERE price > sale_price ORDER BY price ASC LIMIT 1;

--Find the total value of all inventory in stock (use sale price).
SELECT SUM(sale_price) FROM products WHERE remaining_quantity > 0;