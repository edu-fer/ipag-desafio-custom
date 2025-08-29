create table if not exists customer (
    id serial primary key,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
)