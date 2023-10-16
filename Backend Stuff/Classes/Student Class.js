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
    getElo() {
        return this.elo;
    }
    getTimeSinceLogin(){   
        years = this.currentDate.getFullYear - this.lastDate.getFullYear
        months = this.currentDate.getMonth - this.lastDate.getMonth
        days = this.currentDate.getDay - this.lastDate.getDay

        this.timeSinceLogin = [years, months, days];
        return this.timeSinceLogin;
    }
}

// const astudent = new Student("a", "b", "c", "d", 200);
// console.log(astudent.getElo());