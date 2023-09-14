//Teacher Class

// const heyx = require("/Users/benjaminbagala/Documents/GitHub/testing-system/Backend Stuff/Engine/Elo Calculator - Ben's Simple Version.js");
// heyx.hellWorld();

class Teacher {
    constructor(email, password, firstName, lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

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