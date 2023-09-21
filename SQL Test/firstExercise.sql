/* Task 1: Table Creation
Create the following tables for an e-commerce system:
1. Customers
○ Columns: customer_id, first_name, last_name, email, phone
2. Products
○ Columns: product_id, product_name, price, stock_quantity
3. Orders
○ Columns: order_id, customer_id , order_date
4. OrderItems
○ Columns: order_item_id, order_id, product_id, quantity, subtotal */

-- Customer Table
CREATE TABLE Customer (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    phone VARCHAR(20)
);

-- Product Table
CREATE TABLE Product (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(100),
    price DECIMAL(10, 2), -- Assuming prices are stored with 2 decimal places
    stock_quantity INT
);

-- Order Table
CREATE TABLE Orders (
    order_id SERIAL PRIMARY KEY,
    customer_id INT,
    order_date DATE,
    FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

-- OrderItem Table
CREATE TABLE OrderItem (
    order_item_id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT,
    subtotal DECIMAL(10, 2), -- Assuming subtotals are stored with 2 decimal places
    FOREIGN KEY (order_id) REFERENCES Orders(order_id),
    FOREIGN KEY (product_id) REFERENCES Product(product_id)
);
