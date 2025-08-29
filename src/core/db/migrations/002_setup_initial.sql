drop table customer;
CREATE TABLE if not exists customers  (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    document VARCHAR(20) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone VARCHAR(20)
);

CREATE TYPE order_status AS ENUM (
    'PENDING',
    'WAITING_PAYMENT',
    'PAID',
    'PROCESSING',
    'SHIPPED',
    'DELIVERED',
    'CANCELED'
);
CREATE TABLE if not exists orders  (
    id SERIAL PRIMARY KEY,
    order_id VARCHAR(50) NOT NULL UNIQUE,       -- ORD-12345
    order_number VARCHAR(50) NOT NULL UNIQUE,   -- ORD-12345
    customer_id INT NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
    status order_status NOT NULL DEFAULT 'PENDING',
    total_value NUMERIC(12,2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE TABLE if not exists order_items  (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_name VARCHAR(150) NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    unit_value NUMERIC(12,2) NOT NULL CHECK (unit_value >= 0),
    total_value NUMERIC(12,2) NOT NULL CHECK (total_value >= 0)
);