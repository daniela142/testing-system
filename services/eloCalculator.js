// Variables
var tempSum = 0;
var questionRatings = [];

// Constants
const kFactor = 32; // Integer influencing rating gained or lost per question answered
const maxVolatility = 2; // Maximum possible value for volatility - Default for new users
const maxPeriods = 5; // Maximum amount of time periods

const maxChange = 50;

// #region TempRating
// ===============================================================================================

// RUN AT BEGINNING OF EACH TEST
// This should be in a different class for running the quiz
function setTempElo (userRating) {
    tempRating = userRating;
}

// RUN AT QUESTION 'SUBMIT'
function updateSum (tempElo, questionRating, answeredCorrect) {
    var oldTempElo = tempElo;
    updateElo(tempElo, questionRating, answeredCorrect);
    return tempSum += (tempElo - oldTempElo);
}

// RUN AFTER TEST COMPLETION
// This should be in a different class for running the quiz
const resetValues = () => {
    questionRatings = [];
    tempElo = 0;
    tempSum = 0;
}

// Chance for the user to answer the question correctly
// Returns a number between 0 exclusive to 1 exclusive
const calculateExpected = (userRating, questionRating) => {
    var expectedOutcome = 1 / (1 + Math.pow(10, (questionRating - userRating) / 400));
    return expectedOutcome;
}

// Calculates and updates the user's new rating after answering a question
// answeredCorrect is a boolean - true if question was answered correctly
const updateTempElo = (userRating, questionRating, answeredCorrect) => {
    var expectedOutcome = calculateExpected(userRating, questionRating);
    userRating = Math.round(userRating + kFactor * (answeredCorrect - expectedOutcome));
    return userRating;
}

// ===============================================================================================
// #endregion

// #region RealRating
// ===============================================================================================

// RUN AT TEST 'SUBMIT'
// Calculates and updates the user's new rating after answering a question
// answeredCorrect is a boolean - true if question was answered correctly
const updateRealElo = (userRating, totalChange, totalQuestionsAnswered, untestedPeriods) => {
    var volatility = getVolatility(untestedPeriods);
    userRatingBefore = userRating;
    userRating = getActualChange(userRating, totalChange, totalQuestionsAnswered) * volatility;
    userRatingAfter = userRating;

    if (userRatingAfter - userRatingBefore > maxChange) {
        userRating += maxChange;
    }
    else if (userRatingAfter - userRatingBefore < -maxChange) {
        userRating -= maxChange;
    }

    if (userRating > 1000) {
        userRating = 1000;
    }
    else if (userRating < 0) {
        userRating = 0;
    }
    
    return userRating;
}

// Returns expected amount of elo rating lost or gained over the course of an entire test
const getExpectedChange = (totalQuestionsAnswered, questionRatings, userRating) => {
    var expectedOutcome = 0;
    for (i = 0; i < totalQuestionsAnswered; i++) {
        expectedOutcome += 1 / (1 + Math.pow(10, (questionRatings[i] - userRating) / 400));
    }
    return expectedOutcome;
}

// totalChange is the cumulative sum of the change in elo for all questions answered
// expectedChange is the sum of the expected outcomes comparing the user's real rating to the question difficulty
const getActualChange = (userRating, totalChange, totalQuestionsAnswered) => {
    var expectedChange = getExpectedChange(totalQuestionsAnswered, userRating);
    return Math.round(userRating + kFactor * (totalChange - expectedChange));
}

// Returns volatility depending on amount of untested periods of time
const getVolatility = (untestedPeriods) => {
    return 1 + (untestedPeriods / maxPeriods) * maxVolatility;
}

// Returns rank given a user skill rating
const getRank = (userRating) => {
    var userRank;
    switch (true) {
        case userRating >= 0 && userRating <= 99:
            {
                userRank = "Bronze 1";
                break;
            }
        case userRating >= 100 && userRating <= 199:
            {
                userRank = "Bronze 2";
                break;
            }
        case userRating >= 200 && userRating <= 299:
            {
                userRank = "Silver 1";
                break;
            }
        case userRating >= 300 && userRating <= 399:
            {
                userRank = "Silver 2";
                break;
            }
        case userRating >= 400 && userRating <= 499:
            {
                userRank = "Gold 1";
                break;
            }
        case userRating >= 500 && userRating <= 599:
            {
                userRank = "Gold 2";
                break;
            }
        case userRating >= 600 && userRating <= 699:
            {
                userRank = "Platinum 1";
                break;
            }
        case userRating >= 700 && userRating <= 799:
            {
                userRank = "Platinum 2";
                break;
            }
        case userRating >= 800 && userRating <= 899:
            {
                userRank = "Diamond 1";
                break;
            }
        case userRating >= 900 && userRating <= 999:
            {
                userRank = "Diamond 2";
                break;
            }
    }
    return userRank;
}

// ===============================================================================================
// #endregion

module.exports = { calculateExpected, updateTempElo, updateRank: getRank, updateRealElo };