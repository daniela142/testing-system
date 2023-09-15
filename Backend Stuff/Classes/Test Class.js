class Test{
    constructor(testName, numQuestions, description, startDate ,dueDate){
        this.testName = testName;
        this.numQuestions = numQuestions;
        this.description = description;
        this.startDate = startDate;
        this.dueDate = dueDate;
        const questions = [];
        questions[0] = new Question("test question", "Multiple Choice", ["A: first answer", "B: second answer"], "A", 500);
    }

    getTestName(){
        return this.testName;
    }

    getDescription(){
        return this.description;
    }

    getQuestions(){
        return this.questions;
    }

    getstartdate(){
        return this.startDate;
    }

    getDueDate(){
        return this.dueDate;
    }

}
