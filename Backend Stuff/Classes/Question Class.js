class Question{
    constructor(question, questionType, answers, correctAnswer, rank, imgAddress){
        //the question description to answer
        this.question = question;
        //the type of question e.g. multiple choice, short answer etc.
        this.questionType = questionType;
        //the array of answer choices for multiple choice questions
        this.answers = answers;
        //the correct answer to look for
        this.correctAnswer = correctAnswer;
        //the hidden elo rank of this question
        this.rank = rank;
        this.imgAddress = imgAddress;
    }

    getQuestion(){
        return this.question;
    }

    getAnswers(){
        return this.answers;
    }

    getCorrectAnswer(){
        return this.correctAnswer;
    }

    getRank(){
        return this.rank;
    }
}