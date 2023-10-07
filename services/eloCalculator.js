// Variables

// Constants
const kFactor = 32; // Integer influencing rating gained or lost per question answered

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