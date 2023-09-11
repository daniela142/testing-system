//Teacher Class
class Teacher {
    constructor(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    createStudentObject() {
        //Prompt student email input and store in variable studentEmail
        //Prompt student password input and store in variable studentPassword
        //Prompt student first name input and store in variable studentFirstName
        //Prompt student last name input and store in variable studentLastName
        //Prompt student starting elo and store in variable studentStartingElo
        //Create student object (new Student(studentEmail, studentPassword, studentFirstName, studentLastName, studentStartingElo))
        //Store object in external student array
    }

    //Method which retrieves student array

    getTeacherEmail() {
        return this.email;
    }
    getTeacherPassword() {
        return this.password;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
}