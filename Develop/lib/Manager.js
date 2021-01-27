const Employee = require('./Employee');

 // TODO: Write code to define and export the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email)
      this.officeNumber = officeNumber;
          }
  
          printInfo(){
            console.log('---Manager---\n');
          }
 
    getRole(role){
      console.log(`Role: Manager`);
      return "Manager";
    }
    getOfficeNumber(){
        console.log(`Employee office number: ${this.officeNumber} `);
        return this.officeNumber;
    }
    
  }

  module.exports = Manager;

