//Student Class
class Student {
    streak = 0;
    
    constructor(email, password, firstName, lastName, startingElo) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.studentElo = startingElo;
    }

    updateElo() {
        //return this.elo += //engine function name
    }

    getStudentEmail() {
        return this.email;
    }
    getStudentPassword() {
        return this.password;
    }
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getStudentElo() {
        return this.studentElo;
    }
}


// const ben = new Student("a", "b", "c", "d", 200);
// const dan = new Student("X", "Y", "C", "d", 200);
// console.log(astudent.getElo());