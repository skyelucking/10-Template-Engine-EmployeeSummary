const inquirer = require('inquirer');
const fs = require('fs');
// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

// const promptUser = () => {
//     return inquirer.prompt([
//       {
//           type: 'input',
//           name: 'id',
//           message: 'Please enter employee ID:',
//         },
//       {
//         type: 'input',
//         name: 'name',
//         message: 'Please enter employee name:',
//       },
//       {
//           type: 'input',
//           name: 'email',
//           message: 'Please enter employee email:',
//         },       
//     ]);
//   };

 
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(id, name, email, role) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
    }
  
    getName(){
        console.log(`Employee Name: ${this.name} `);
    }
    getId(){
        console.log(`Employee ID: ${this.id} `);
    }
    getEmail(){
        console.log(`Employee email address: ${this.email} `);
    }
    getRole(){
        this.role = 'Employee';
        console.log(`Employee Role: ${this.role} `);
    }

  }


// Bonus using async/await and try/catch
// const init = async () => {
//     console.log("Let's Get This Read-Me Party Started! Please Answer the Following Questions...");
//     try {
//       const answers = await promptUser();
  
//       const html = generateReadMe(answers);
  
//       await writeFileAsync('Employee_Write.html', html);
  
//       console.log('Successfully wrote to Employee File');
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const employeeNew = new Employee(15, 'Skye', 'lucking@gmail.com');

  
// console.log('---Employee---');
// employeeNew.printInfo();
// employeeNew.getName();
// employeeNew.getId();
// employeeNew.getEmail();
// employeeNew.getRole();
// init();
  module.exports = Employee;
  