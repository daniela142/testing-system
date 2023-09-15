class Question{
    constructor(question, questionType, answers, correctAnswer, rank){
        this.question = question;
        this.questionType = questionType;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
        this.rank = rank;
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