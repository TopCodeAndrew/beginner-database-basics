// --------------PERSON SECTION------------

// CREATE TABLE person(
//     id SERIAL PRIMARY KEY,
//     name TEXT,
//     age INTEGER,
//     height INTEGER,
//     city VARCHAR(30),
//     favorite_color VARCHAR(20)
// );

// INSERT INTO person
//     (name, age, height, city, favorite_color)
// VALUES
//     ('John', 20, 177, 'Los Angeles', 'blue'),
//     ('Frank', 20, 187, 'Denver', 'green'),
//     ('Sue', 29, 145, 'Chicago', 'red'),
//     ('Tom', 60, 67, 'Charlotte', 'orange'),
//     ('Jenna', 10, 107, 'Atlanta', 'pink');

// SELECT * FROM person ORDER BY	height DESC;

// SELECT * FROM person ORDER BY height ASC;

// SELECT * FROM person ORDER BY age DESC;

// SELECT * FROM person WHERE age > 20;

// SELECT * FROM person WHERE age = 18;

// SELECT * FROM person WHERE age < 20 OR age > 30;

// SELECT * FROM person WHERE age != 27;

// SELECT * FROM person WHERE favorite_color != 'red';

// SELECT * FROM person
// WHERE favorite_color != 'red'
// AND favorite_color != 'blue';

// SELECT * FROM person
// WHERE favorite_color = 'orange'
// OR favorite_color = 'green';

// SELECT * FROM person
// WHERE favorite_color IN('orange', 'green', 'blue');

// SELECT * FROM person
// WHERE favorite_color IN('yellow', 'purple'); 




















// ------- TABLE ORDERS SECTION ----------

// CREATE TABLE orders(
//     order_id SERIAL PRIMARY KEY,
//     person_id INT,
//     product_name TEXT,
//     product_price INT,
//     quantity INT);


// INSERT INTO orders
//     (person_id, product_name, product_price, quantity)
// VALUES
//     (2, 'double whammy', 2, 2),
//     (3, 'triple decker', 3, 1),
//     (4, 'single', 1, 1),
//     (5, 'single', 1, 3),
//     (6, 'double whammy', 2, 1);

// SELECT * FROM orders;

// SELECT SUM(quantity) FROM orders;

// SELECT SUM(product_price * quantity) FROM orders;

// SELECT SUM(product_price * quantity)
// FROM orders
// WHERE person_id = 2;















// ------- ARTIST SECTION ----------


// INSERT INTO artist
//     (name)
// VALUES
//     ('Aaron'),
//     ('Adoniram'),
//     ('Aasa');


// SELECT * FROM artist
// WHERE artist_id
// BETWEEN 1 AND 10
// ORDER BY name DESC;

// SELECT * FROM artist
// WHERE artist_id
// BETWEEN 1 AND 5
// ORDER BY name ASC;

// SELECT * FROM artist WHERE name LIKE 'Black%';

// SELECT * FROM artist WHERE name LIKE '%Black%';









// ------- EMPLOYEE SECTION ----------

// SELECT first_name, last_name
// FROM employee
// WHERE city = 'Calgary';

// SELECT max(birth_date) FROM employee;
// SELECT min(birth_date) FROM employee;

// SELECT * FROM employee
// WHERE reports_to = 2;


// SELECT count(*) FROM employee
// WHERE city = 'Lethbridge';

















// ------- INVOICE SECTION ----------

// SELECT count(*) FROM invoice
// WHERE billing_country = 'USA';

// select max(total) FROM invoice;


// select min(total) FROM invoice;

// SELECT * FROM invoice
// WHERE total > 5;

// SELECT count(*) FROM invoice
// WHERE total < 5;

// SELECT count(*) FROM invoice
// WHERE billing_state IN('CA', 'TX', 'AZ');

// SELECT avg(total) FROM invoice;

// SELECT sum(total) FROM invoice;