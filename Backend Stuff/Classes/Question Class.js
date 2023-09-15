class Question{
    constructor(question, questionType, answers, correctAnswer, rank, imgAddress){
        this.question = question;
        this.questionType = questionType;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
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