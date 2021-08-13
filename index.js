//Setting up my variables 

const inquirer = require("inquirer");
const mysql = require("mysql"); 
const ctable = require("console.table"); 
const connection = require("./config/connection") 
const{prompt} = require("inquirer"); 


//Starting the application
connection.connect(function(err){ 
    if(err) throw(err) 
    startAction();
});  

//Welcome message for the user 
console.table( 
    "Welcome to Dimension C-137 Employee Tracking System"
) 

//Creating an initial set of question to ask an User and what they want to do . 

const startAction = async () => { 
    try{ 
        const response = await inquirer.prompt({ 
            name:"start", 
            type:"list", 
            message:"What would you like to do ?", 
            choices:[ 
                "View Employees", 
                "View Departments", 
                "View Roles", 
                "Add Employees", 
                "Add Departments", 
                "Add Roles", 
                "Remove Roles",
                "Remove Departments",
                "Update Employee Roles", 
                "Quit"
            ]

        }); 

        switch(response.start){ 
            case 'View Employees': 
            employeeView(); 
            break; 
            
            case 'View Departments': 
            departmentView(); 
            break; 

            case 'View Roles': 
            roleView(); 
            break; 

            case 'Add Employees': 
            employeeAdd(); 
            break; 

            case 'Add Departments': 
            departmentAdd(); 
            break; 

            case 'Add Roles': 
            rolesAdd(); 
            break; 

            case 'Remove Department': 
            departmentRemove(); 
            break; 

            case 'Remove Role': 
            roleRemove(); 
            break; 
 

            case 'Update Employee Roles': 
            employeeUpdate(); 
            break;  

            case 'Quit': 
            connection.quit(); 
            break; 
        };
    }catch(err){ 
        console.log(err) 
        startAction();
    };
} 

//Creating a selection in order to view all employees 

const employeeView = async () => {  
    console.log(employeeView);
    try {  
        const query = "SELECT * FROM employee";
        connection.query(query,function(err,res){ 
            if(err) throw err; 
            const employeeA = []; 

            res.forEach(employee => employeeA.push(employee));
            console.table(employeeA) 
            startAction(); 
            console.log(employeeA); 
        }); 

        
    } catch(err){ 
        console.log(err); 
        startAction();
    }
} 

////Creating a selection in order to view all departments  

const departmentView = async () => { 
    try { 
        const query = 'SELECT * FROM department'; 
        connection.query(query,function(err,res){ 
            if(err) throw err; 
            const departmentA = []; 
            res.forEach(department =>  departmentA.push(department)); 
            console.table(departmentA) 
            startAction(); 

        });
    } catch(err){ 
        console.log(err); 
        startAction();
    }
}  

////Creating a selection in order to view all the roles available  

const roleView = async () =>{ 
    try { 
        const query = 'SELECT * FROM role'; 
        connection.query(query,(err,res)=>{ 
            if(err) throw err; 
            const roleA = []; 
            res.forEach(role => roleA.push(role)); 
            console.table(roleA);
            startAction();  

            console.log(console.table(roleA));

        });
    } catch(err){ 
        console.log(err); 
        startAction();
    }
}  

//Creating a selection in order to add new employees  

const employeeAdd = async () => { 
    try { 
        const roles = await connection.query('SELECT * FROM role'); 
        const managers = await connection.query('SELECT * FROM employee'); 
        const answer = await inquirer.prompt([ 
            { 
                name:'firstName', 
                type:'input', 
                message:'Insert first name of employee'
            }, 
            { 
                name:'lastName', 
                type:'input', 
                message:'Insert last name of employee'
            },
            { 
                name:'employee_roleID', 
                type:'list', 
                choices:roles.map((role)=>{ 
                    return{ 
                        name:role.title, 
                        value:role.id
                    }
                }), 
                message:"Select the employee's role id "
            }, 
            { 
                name:'managers_roleID', 
                type:'list', 
                choices:managers.map((managers)=>{ 
                    return{ 
                        name:managers.first_name + ''+managers.last_name, 
                        value:managers.id
                    }
                }), 
                message:"Select the manager's  id "
            }, 
        
        ]) 

        const reply = await connection.query("INSERT INTO employee SET ?",{ 
            first_name : answer.firstName, 
            last_name : answer.lastName, 
            role_id: (answer.employee_roleID), 
            manager_id: (answer.managers_roleID)
        }); 
        console.log(`${answer.firstName}${answer.lastName} were added to the system.\n`) 
        startAction(); 


    } catch(err){ 
        console.log(err); 
        startAction();
    }
}  


//Creating a selection in order to add a new department 
const departmentAdd = async () => { 
    try { 
       ; 
       
        const answer = await inquirer.prompt([ 
            { 
                name:'departmentName', 
                type:'input', 
                message:'Insert name of department'
            }, 
           
            
        
        ]) 

        const reply = await connection.query("INSERT INTO department SET ? ",{ 
            name: answer.departmentName
        }); 
        console.log(`${answer.departmentName} were added to the departments in the system.\n`) 
        startAction(); 


    } catch(err){ 
        console.log(err); 
        startAction();
    }
}    

////Creating a selection in order to add a new role  

const rolesAdd = async () => { 
    try { 
       ;  
        const departments = await connection.query("SELECT * FROM department") 

        const answer = await inquirer.prompt([ 
            { 
                name:'title', 
                type:'input', 
                message:'Insert name of new role'
            }, 
            { 
                name:'salary', 
                type:'input', 
                message:'Salary of the new role'
            },  

            { 
                name:'departmentID', 
                type:'input', 
                choices:departments.map((departmentID)=>{ 
                    return { 
                        name:departmentID.department_name, 
                        value:departmentID.id
                    }
                }), 
                message:'This role uses which department ID?'
            }, 
           
            
           
            
        
        ]) 
        
        // let selectedDepartment;
        // for (i=0;i < departments.length; i++){ 
        //     if(departments[i].department_id === answer.selected){ 
        //         selectedDepartment = departments[i];
        //     }
        // }

        // const reply = await connection.query("INSERT INTO role (title, salary, department_id) VALUES (?)",{ 
        //     title: answer.title, 
        //     salary: answer.salary, 
        //     department_id: answer.departmentID
        // });  

        const reply = await connection.query(`INSERT INTO role (title, salary, department_id) VALUES ("${answer.title}",${answer.salary},${answer.departmentID})`);
          
        console.log(`${answer.title} The role was added with success!.\n`) 
        startAction(); 


    } catch(err){ 
        console.log(err); 
        startAction();
    }
}     

//Creating a selection in order to update an employees role .  

const employeeUpdate = async () =>{ 
    try { 
        const employees = await connection.query("SELECT * FROM employee"); 

        const selectEmployee = await inquirer.prompt([ 
            { 
                name:'employee', 
                type:'list', 
                choices: employees.map((employeeName)=>{ 
                    return{ 
                        name:employeeName.first_name + " " + employeeName.last_name, 
                        value: employeeName.id
                    }
                }), 
                message:'Select employee to update in the system.'
            }
        ]); 

        const roles = await connection.query("SELECT * FROM role"); 

        const selectRole = await inquirer.prompt([ 
            { 
                name:'role', 
                type:'list', 
                choices: roles.map((roleName)=>{ 
                    return{ 
                        name:roleName.title,
                        value:roleName.id
                    }
                }), 
                message:'Select an employee to update role'
            }, 
        ]); 

        const reply = await connection.query("UPDATE employee SET? WHERE?",[{role_id:selectRole.role},{id:selectEmployee.employee}]); 
         
        console.log(` Employee role  was updated with success!.\n`) 
        startAction(); 
    } 

    catch(err){ 
        console.log(err); 
        startAction();
    }

}

