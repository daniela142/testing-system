// Elo Algorithm

// Used for each individual question within a test
// The userRating variable is temporary and only lasts for the duration of the test

// Variables
var userRating = 350; // Integer

// Constants
const kFactor = 32; // Integer

// Chance for the user to answer the question correctly
// Returns a number between 0 exclusive to 1 exclusive
function calculateExpected(userRating, questionRating)
{
    var expectedOutcome = 1 / (1 + Math.pow(10, (questionRating - userRating) / 400));
    return expectedOutcome;
}

// Calculates and updates the user's new rating after answering a question
// answeredCorrect is a boolean - true if question was answered correctly
function updateElo(questionRating, answeredCorrect)
{
    var expectedOutcome = calculateExpected(userRating, questionRating);
    userRating = Math.round(userRating + kFactor * (answeredCorrect - expectedOutcome));
}

// Outputs an example test scenario
function exampleTest(questionRating, answeredCorrect)
{
    console.log("User rating: " + userRating);
    console.log("Question rating: " + questionRating);
    console.log("The user has a " + (calculateExpected(userRating, questionRating) * 100).toFixed(2) + "% likelihood of answering this question correctly.");
    updateElo(questionRating, answeredCorrect);
    console.log("New user rating: " + userRating);
    console.log("================================");
}

// ================================
// Example test
// ================================
exampleTest(300, true);
exampleTest(320, true);
exampleTest(330, false);
