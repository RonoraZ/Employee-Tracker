DROP DATABASE IF EXISTS employees_db; 
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department ( 
 id  AUTO_INCREMENT INT NOT NULL, 
 name VARCHAR(30) NOT NULL , 
 PRIMARY KEY(id)

);  



CREATE TABLE role ( 
   /* id  AUTO_INCREMENT INT NOT NULL, 
    title VARCHAR(30)   , 
    salary DECIMAL(10,2)  , 
    department_id INT  , 
    PRIMARY KEY(id)*/ 
     id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30)  UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT, 
    FOREIGN KEY (department_id) REFERENCES department(id),
    PRIMARY KEY (id)

    
);  

CREATE TABLE employee ( 
    id  AUTO_INCREMENT INT NOT NULL, 
    first_name VARCHAR(30) NOT NULL , 
    last_name VARCHAR(30) NOT NULL ,
    role_id INT NOT NULL, 
    manager_id INT, 
    PRIMARY KEY(id)
); 