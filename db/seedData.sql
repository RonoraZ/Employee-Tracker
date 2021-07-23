use employees_db; 

-- Creating an array for department 

INSERT INTO department (name) 

VALUES  
('Sales'), 
('Legal'), 
('Accounting'), 
('Human Resources'),
('Engineering'), 

INSERT INTO role (title,salary,department_id) 

VALUES 
('SalesManager',80000,1), 
('SalesPerson',50000,1), 
('Senior Lawyer',140000,2), 
('Lawyer',85000,2), 
('Head Accountant',95000,3), 
('Accountant',55000,3), 
('HR Director',135000,4), 
('HR Employee',50000,4), 
('Engineer Chief',105000,5), 
('Engineer',65000,5),  

INSERT INTO employee (first_name,last_name,role_id,manager_id) 

VALUES 
('Rick','Sanchez',1,NULL), 
('Beth','Sanchez',1,1), 
('Summer','Sanchez',2,NULL),
('Morty','Sanchez',2,2), 
('Jerry','Sanchez',3,NULL),
('Homer','Simpson',3,3),
('Lisa','Simpson',4,NULL),
('Bart','Simpson',4,4),
('Marge','Simpson',5,NULL), 
('Ned','Flanders',5,5)


