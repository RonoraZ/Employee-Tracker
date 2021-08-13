use employees_db; 

-- Creating an array for department 

INSERT INTO department (name) 

VALUES ('Sales');

INSERT INTO department (name) 

VALUES ('Legal');  

INSERT INTO department (name) 

VALUES ('Accounting');

INSERT INTO department (name) 

VALUES ('Human Resources'); 

INSERT INTO department (name) 

VALUES ('Engineering');
/*('Sales'), 
('Legal'), 
('Accounting'), 
('Human Resources'),
('Engineering');*/

-- Creating an array for role

INSERT INTO role (title,salary,department_id) 

VALUES ('SalesManager',80000,1); 

INSERT INTO role (title,salary,department_id) 

VALUES ('SalesPerson',50000,2);  

INSERT INTO role (title,salary,department_id) 

VALUES ('Senior Lawyer',140000,3);  

INSERT INTO role (title,salary,department_id) 

VALUES ('Lawyer',85000,4);  

INSERT INTO role (title,salary,department_id) 

VALUES ('Head Accountant',95000,5);  

INSERT INTO role (title,salary,department_id) 

VALUES ('Accountant',55000,6);  

INSERT INTO role (title,salary,department_id) 

VALUES ('HR Director',135000,7);  

INSERT INTO role (title,salary,department_id) 

VALUES ('HR Employee',50000,8);  

INSERT INTO role (title,salary,department_id) 

VALUES ('Engineer Chief',105000,9);  

INSERT INTO role (title,salary,department_id) 

VALUES ('Engineer',65000,10); 


/*('SalesManager',80000,1), 
('SalesPerson',50000,1), 
('Senior Lawyer',140000,2), 
('Lawyer',85000,2), 
('Head Accountant',95000,3), 
('Accountant',55000,3), 
('HR Director',135000,4), 
('HR Employee',50000,4), 
('Engineer Chief',105000,5), 
('Engineer',65000,5);*/   

-- Creating an array for employee

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Rick','Sanchez',1,NULL); 

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Beth','Sanchez',1,1);

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Summer','Sanchez',2,2); 

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Morty','Sanchez',3,NULL); 

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Jerry','Sanchez',4,4); 

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Homer','Simpson',5,NULL); 

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Lisa','Simpson',6,6); 

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Bart','Simpson',7,NULL); 

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Marge','Simpson',8,8);

INSERT INTO employee (first_name,last_name,role_id,manager_id)  

VALUES ('Ned','Flanders',9,NULL);

/*VALUES 
('Rick','Sanchez',1,NULL), 
('Beth','Sanchez',1,1), 
('Summer','Sanchez',2,NULL),
('Morty','Sanchez',2,2), 
('Jerry','Sanchez',3,NULL),
('Homer','Simpson',3,3),
('Lisa','Simpson',4,NULL),
('Bart','Simpson',4,4),
('Marge','Simpson',5,NULL), 
('Ned','Flanders',5,5);*\


