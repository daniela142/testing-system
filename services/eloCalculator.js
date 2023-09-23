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

module.exports = { calculateExpected, updateElo, updateRank };