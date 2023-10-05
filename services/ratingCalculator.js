// Variables
var volatility = 2;
var untestedPeriods;
var totalExpectedChange;

// Constants
const maxVolatility = 2; // Maximum possible value for volatility - Default for new users
const maxPeriod = 5;
const kFactor = 32;

// Calculates and updates the user's new rating after answering a question
// answeredCorrect is a boolean - true if question was answered correctly
const updateRating = (userRating, totalChange) => {
    userRating += totalChange * volatility * maxVolatility;
}

// totalChange is the cumulative sum of the change in elo for all questions answered
// expectedChange is the sum of the expected outcomes comparing the user's real rating to the question difficulty
const updateRealRating = (userRating, totalChange) => {
    // var expectedChange = (method to calculate total expected here)
    userRating = Math.round(userRating + kFactor * (totalChange - expectedChange));
    updateRank(userRating);
}

// Updates the user's displayed rank
const updateRank = (userRating) => {
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
}

module.exports = { calculateExpected, updateRating, updateRank };