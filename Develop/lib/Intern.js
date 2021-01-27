const Employee = require('./Employee');
const inquirer = require('inquirer');



 // TODO: Write code to define and export the Intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email)
      this.school = school;
      
    }
  
    printInfo(){
      console.log('---Intern---\n');
    }
    getRole(){
      console.log(`Role: Intern `);
      return "Intern";
    }
    getSchool(){
        
        console.log(`School: ${this.school} `);
        return this.school;
    }

  }

module.exports = Intern;
