// Variables
var tempElo = 0;
var tempSum = 0;
var totalQuestions = 0;
var questionRatings = [];

// Constants
const kFactor = 32; // Integer influencing rating gained or lost per question answered

// RUN AT BEGINNING OF EACH TEST
function setTempElo (userRating) {
    return tempElo = userRating;
}

// RUN AT QUESTION 'SUBMIT'
function updateTempElo (tempElo) {
    questionRatings[totalQuestions] = questionRating;
    ++totalQuestions;
    var oldTempElo = tempElo;
    updateElo(tempElo, questionRating, answeredCorrect);
    return tempSum += (tempElo - oldTempElo);
}

// RUN AT TEST 'SUBMIT'
const getExpectedChange = (totalQuestions, userRating) => {
    var expectedOutcome = 0;
    for (i = 0; i < totalQuestions; i++) {
        expectedOutcome += 1 / (1 + Math.pow(10, (questionRatings[i] - userRating) / 400));
    }
    return expectedOutcome;
}

// RUN AFTER TEST COMPLETION
function resetValues() {
    questionRatings = [];
    tempElo = 0;
    totalQuestions = 0;
    tempSum = 0;
}

////////////////////////////////////////// bens work section

// Chance for the user to answer the question correctly
// Returns a number between 0 exclusive to 1 exclusive
const calculateExpected = (userRating, questionRating) => {
    var expectedOutcome = 1 / (1 + Math.pow(10, (questionRating - userRating) / 400));
    return expectedOutcome;
}

// Calculates and updates the user's new rating after answering a question
// answeredCorrect is a boolean - true if question was answered correctly
const updateElo = (userRating, questionRating, answeredCorrect) => {
    var expectedOutcome = calculateExpected(userRating, questionRating);
    userRating = Math.round(userRating + kFactor * (answeredCorrect - expectedOutcome));
}

module.exports = { calculateExpected, updateElo };