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
        this.timeSinceLogin = 0;
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
        months = this.currentDate.getMonth - this.lastDate.getMonth;
        days = this.currentDate.getDay - this.lastDate.getDay;
        var time = 0;
        var monthdays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        if(days < 0){
            time += monthdays[this.lastDate.getMonth] - this.lastDate.getDay;
            for(i = this.lastDate.getMonth + 1; i != this.currentDate.getMonth; i++){
                if(i > 12){
                    i = 1;
                }
                if(i = this.currentDate.getMonth){
                    time += this.currentDate.getDay
                }
                else{
                    time += monthdays[i]
                }
            }
        }

        this.timeSinceLogin = time/7;
        return this.timeSinceLogin;
    }
}


// const ben = new Student("a", "b", "c", "d", 200);
// const dan = new Student("X", "Y", "C", "d", 200);
// console.log(astudent.getElo());