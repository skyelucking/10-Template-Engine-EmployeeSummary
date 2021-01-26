const Employee = require('./Employee');
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'id',
          message: 'Please enter ID:',
        },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter name:',
      },
      {
          type: 'input',
          name: 'email',
          message: 'Please enter email:',
        },  
      {
          type: 'input',
          name: 'officeNumber',
          message: 'Please enter office number:',
        },
             
    ]);
  };

 // TODO: Write code to define and export the Employee class
class Manager extends Employee {
    constructor(id, name, email, role) {
     super(id, name, email, 'Manager');
      this.id = id;
      this.name = name;
      this.email = email;
      this.role = role;
    }
  
    printInfo(){
    //   console.log(`Manager Name: ${this.name} `);
    //   console.log(`This Manager has an id of ${this.id}`);
    //   console.log(`This Employee has a role of ${this.role}`);
    //   console.log(`This Employee has an email address of ${this.email}`);
    //   console.log(`This Manager went to school ${this.school}`);
    }

    getName(){
        console.log(`Employee Name: ${this.name} `);
        return this.name;
    }
    getId(){
        console.log(`Employee ID: ${this.id} `);
        return this.id;
    }
    getEmail(){
        console.log(`Employee Name: ${this.email} `);
        return this.email
    }
    getRole(){
        this.role = 'Manager';
        console.log(`Employee Role: ${this.role} `);
        return this.role;
    }
    getOffice(){
        console.log(`Employee Role: ${this.officeNumber} `);
        return this.officeNumber;
    }
    

  }


// Bonus using async/await and try/catch

const generateReadMe = (answers) =>
`
<div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${answers.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i></h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${answers.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${answers.email}">${answers.email}</a></li>
            <li class="list-group-item">Office Number: ${answers.officeNumber}</li>
        </ul>
    </div>
</div>

 `;

const init = async () => {
    console.log("Let's Get This Read-Me Party Started! Please Answer the Following Questions...");
    try {
      const role = ManagerNew.getRole();
      const answers = await promptUser();
      const html = generateReadMe(answers);
  
      await writeFileAsync('../templates/manager.html', html);
  
      console.log('Successfully wrote to Manager File');
    } catch (err) {
      console.log(err);
    }
  };

const ManagerNew = new Manager(15, 'Skye', 'lucking@gmail.com');

  
console.log('---Manager---\n');
ManagerNew.printInfo();
ManagerNew.getName();
ManagerNew.getId();
ManagerNew.getEmail();
ManagerNew.getRole();
init();
  module.exports = Employee;

