- Create your postgresql database
- Run the following SQL

CREATE DATABASE granify;
\c granify;

CREATE TABLE granifyTest (
    id serial  Primary Key ,
    username VARCHAR(50),
    phone_number VARCHAR(50),
    input_one VARCHAR(355),
    input_two VARCHAR(355),
    created_on TIMESTAMP NOT NULL
);
CREATE TABLE input_time(id serial PRIMARY KEY, time_stamp int);


node ./server/index.js
npm start

- Copy example.env to .env and adapt to your environment


