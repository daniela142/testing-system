// Elo Algorithm

// Used for each individual question within a test
// The userRating variable is temporary and only lasts for the duration of the test

// Skill Ratings
// 0 - 99      Bronze 1
// 100 - 199   Bronze 2
// 200 - 299   Silver 1
// 300 - 399   Silver 2
// 400 - 499   Gold 1
// 500 - 599   Gold 2
// 600 - 699   Platinum 1
// 700 - 799   Platinum 2
// 800 - 899   Diamond 1
// 900 - 999   Diamond 2

// userRating must be defined as an integer between 0 inclusive to 999 inclusive
// questionRating must be an integer multiple of 100 between 0 to 900

// EXAMPLE
// Questions from the Bronze 1 question pool will always have a rating of 0.
// Questions from the Bronze 2 question pool will always have a rating of 100.
// Questions from the Gold 1 question pool will always have a rating of 400.
// Questions from the Diamond 2 question pool will always have a rating of 900.

// Constants
const kFactor = 32; // Integer influencing rating gained or lost per question answered

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
    updateRank(userRating);
}

// Updates the user's displayed rank
function updateRank(userRating)
{
    switch(true)
    {
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

// Outputs an example test scenario
function exampleTest(questionRating, answeredCorrect)
{
    updateRank(userRating);
    console.log("User rank: " + userRank);
    console.log("User rating: " + userRating);
    console.log("Question rating: " + questionRating);
    console.log("The user has a " + (calculateExpected(userRating, questionRating) * 100).toFixed(2) + "% likelihood of answering this question correctly.");

    const oldUserRating = userRating;
    const oldUserRank = userRank;
    updateElo(questionRating, answeredCorrect);
    if(answeredCorrect === true)
    {
        console.log("Question answered correctly.");
    }
    else
    {
        console.log("Question answered incorrectly.");
    }

    if(userRating < oldUserRating && userRank != oldUserRank)
    {
        console.log("Rank decreased...");
    }
    else if(userRating > oldUserRating && userRank != oldUserRank)
    {
        console.log("Rank increased!");
    }

    console.log("New user rank: " + userRank);
    console.log("New user rating: " + userRating);
    console.log("================================");
}

// ================================
// EXAMPLE TEST
// ================================
var userRating = 350;
let userRank;
exampleTest(300, true);
exampleTest(400, true);
exampleTest(500, true);
exampleTest(100, false);
