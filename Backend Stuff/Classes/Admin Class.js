//Admin Class
class Admin {
    constructor(email, password, firstName, lastName, classroomObjectArray) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.classroomObjectArray = classroomObjectArray;
    }

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

