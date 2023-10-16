//Student Class
class Student {
    streak = 0;
    
    constructor(email, password, firstName, lastName, startingElo) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.elo = startingElo;
        this.studentElo = startingElo;

        this.lastDate = new Date();
        this.currentDate = new Date();
        this.timeSinceLogin = [];
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
    getTimeSinceLogin(){   
        years = this.currentDate.getFullYear - this.lastDate.getFullYear
        months = this.currentDate.getMonth - this.lastDate.getMonth
        days = this.currentDate.getDay - this.lastDate.getDay

        this.timeSinceLogin = [years, months, days];
        return this.timeSinceLogin;
    }
}


// const ben = new Student("a", "b", "c", "d", 200);
// const dan = new Student("X", "Y", "C", "d", 200);
// console.log(astudent.getElo());