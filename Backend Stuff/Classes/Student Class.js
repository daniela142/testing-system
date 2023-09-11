//Student Class
class Student {
    streak = 0;
    
    constructor(email, password, firstName, lastName, startingElo) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.elo = startingElo;
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
    getElo() {
        return this.elo;
    }
}

// const astudent = new Student("a", "b", "c", "d", 200);
// console.log(astudent.getElo());