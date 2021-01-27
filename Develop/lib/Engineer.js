const Employee = require('./Employee');

// TODO: Write code to define and export the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
     super(name, id, email);
      this.github = github;
    }
  
    
    getRole(){
      console.log(`Role: Engineer `);
      return "Engineer";
    }
    getGithub(){
        console.log(`Employee Role: ${this.github} `);
        return this.github;
    }
    

  }

  module.exports = Engineer;
