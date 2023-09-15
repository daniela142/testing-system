class Test{
    constructor(testName, numQuestions, description, startDate ,dueDate){
        //the name of the created test
        this.testName = testName;
        //the number of questions the student must answer in this test
        this.numQuestions = numQuestions;
        this.description = description;
        this.startDate = startDate;
        this.dueDate = dueDate;
        //the array of questions the test can pull from (can be larger than numQuestions)
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
