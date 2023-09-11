//Admin Class
class Admin {
    constructor(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    createTeacherObject() {
        //Prompt teacher email input and store in variable teacherEmail
        //Prompt teacher password input and store in variable teacherPassword
        //Prompt teacher first name input and store in variable teacherFirstName
        //Prompt teacher last name input and store in variable teacherLastName
        //Create teacher object (new Teacher(teacherEmail, teacherPassword, teacherFirstName, teacherLastName))
        //Store object in external teacher array
    }

    //Method which retrieves teacher array

    createStudentObject() {
        //Prompt student email input and store in variable studentEmail
        //Prompt student password input and store in variable studentPassword
        //Prompt student first name input and store in variable studentFirstName
        //Prompt student last name input and store in variable studentLastName
        //Prompt student starting elo and store in variable studentStartingElo
        //Create student object (new Student(studentEmail, studentPassword, studentFirstName, studentLastName, studentStartingElo))
        //Store object in external student array
    }

    //Method which retrieves studnet array

    getAdminEmail() {
        return this.email;
    }
    getAdminPassword() {
        return this.password;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
}