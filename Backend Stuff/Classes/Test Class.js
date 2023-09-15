class Test{
    constructor(testName, teacherName, numQuestions, dueDate, status){
        this.testName = testName;
        this.teacherName = teacherName;
        this.numQuestions = numQuestions;
        this.dueDate = dueDate;
        const questions = []
        questions[0] = new Question("test question", "Multiple Choice", ["A: first answer", "B: second answer"], "A: first answer", 500);
        this.status = status;
    }

    getTestName(){
        return this.testName;
    }

    getQuestions(){
        return this.questions;
    }

    getDueDate(){
        return this.dueDate;
    }

    getStatus(){
        return this.status;
    }

    setStatus(newStatus){
        this.status = newStatus;
    }

}
