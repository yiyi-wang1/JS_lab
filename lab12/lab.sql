/*

Lab 1

*/

--[Note] the total price in the line_items table is price per unit and not total price.

--Find the average line_item total price (meaning quantity * price) for each order that were completed in January 2016 month.

SELECT orders.id, orders.completed_on, AVG(line_items.quantity * line_items.price) AS avg_total_prices
FROM line_items
INNER JOIN orders
ON line_items.order_id = orders.id
WHERE orders.completed_on BETWEEN '2016-01-01' AND '2016-01-31'
GROUP BY orders.id;



--Select product names, product prices and the lowest price they were sold at during the last 50 months.
SELECT products.name, products.price, MIN(line_items.price) AS lowest_sold_price
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE orders.completed_on > current_date - 1500
GROUP BY products.id;

/*

LAB 2

*/

--Calculate how many items in stock we've ever had for each product (remaining or sold) in the database.
SELECT products.name, (products.remaining_quantity + SUM(line_items.quantity)) AS stock_quantity
FROM products
INNER JOIN line_items
ON products.id = line_items.product_id
GROUP BY products.id;


--Find the average order total price for all the orders in the system
--total line_items value / total number of orders
SELECT SUM(line_items.quantity * line_items.price)/(SELECT COUNT(*) FROM orders)
FROM line_items;

SELECT SUM(line_items.quantity * line_items.price)/COUNT(DISTINCT orders.id)
AS avg_order_total_price
FROM line_items
INNER JOIN orders
ON orders.id = line_items.order_id;



/*

LAB 3

*/

-- Select all the products that have been purchased in the last 24 months.
SELECT products.name 
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on >= NOW() - INTERVAL '80' MONTH
GROUP BY products.id;
--Can group or cannot group

-- Select the top 10 products in terms of last year's gross sales.
SELECT products.name, SUM(line_items.quantity * line_items.price) AS gross_sales
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON line_items.order_id = orders.id
WHERE orders.completed_on >= NOW() - INTERVAL '100' MONTH
GROUP BY products.id
ORDER BY gross_sales DESC
LIMIT 10;

-- Select all the products that weren't purchased during the last 24 months.
SELECT products.name FROM
products
WHERE products.name NOT IN (
    SELECT products.name
    FROM products
    INNER JOIN line_items ON products.id = line_items.product_id
    INNER JOIN orders ON line_items.order_id = orders.id
    WHERE orders.completed_on >= NOW() - interval '24 months'
    GROUP BY products.id
);

/*

LAB 4

*/
SELECT products.name, AVG(line_items.price * line_items.quantity) AS avg_orders_total_price
FROM products
INNER JOIN line_items ON products.id = line_items.product_id
INNER JOIN orders ON orders.id = line_items.order_id
WHERE products.name ILIKE 'Lightweight Marble%'
GROUP BY products.id;

/*

LAB 5

*/

SELECT groups.id, groups.group_name
FROM users
INNER JOIN user_group_memberships ON users.id = user_group_memberships.user_id
INNER JOIN groups ON user_group_memberships.group_id = groups.id
WHERE users.email = 'GIVEN STRING';


/*

LAB 6

*/

SELECT products.name FROM products
WHERE products.id NOT IN (
    SELECT products.id 
    FROM products
    INNER JOIN line_items
    ON products.id=line_items.product_id
    INNER JOIN orders
    ON orders.id=line_items.order_id
    WHERE completed_on > NOW()-INTERVAL '1' MONTH 
);