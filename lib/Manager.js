/* props:           | methods:
- name              |   -getName()
- id                |   -getId()        -getRole() // returns Manager
- email             |   -getEmail()
- officeNumber
*/
const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email,officeNumber){
        super (name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole () {
        console.log('Manager');
        return 'Manager';
    }
    getOfficeNumber () {
        console.log(this.officeNumber)
        return this.officeNumber;
    }
}

module.exports = Manager;