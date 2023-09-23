// Question Selection Algorithm

// Used alongside the Elo Algorithm to select questions based on the user's skill

// Variables
// Question pools should be replaced with a database later
var bronzeOnePool = ["Bronze 1 Q1", "Bronze 1 Q2", "Bronze 1 Q3", "Bronze 1 Q4", "Bronze 1 Q5", "Bronze 1 Q6"];
var bronzeTwoPool = ["Bronze 2 Q1", "Bronze 2 Q2", "Bronze 2 Q3", "Bronze 2 Q4", "Bronze 2 Q5"];
var silverOnePool = ["Silver 1 Q1", "Silver 1 Q2", "Silver 1 Q3", "Silver 1 Q4"];
var silverTwoPool = ["Silver 2 Q1", "Silver 2 Q2", "Silver 2 Q3", "Silver 2 Q4", "Silver 2 Q5", "Silver 2 Q6"];
var goldOnePool = ["Gold 1 Q1", "Gold 1 Q2", "Gold 1 Q3", "Gold 1 Q4", "Gold 1 Q5"];
var goldTwoPool = ["Gold 2 Q1", "Gold 2 Q2", "Gold 2 Q3", "Gold 2 Q4", "Gold 2 Q5"];
var platinumOnePool = ["Platinum 1 Q1", "Platinum 1 Q2", "Platinum 1 Q3", "Platinum 1 Q4", "Platinum 1 Q5"];
var platinumTwoPool = ["Platinum 2 Q1", "Platinum 2 Q2", "Platinum 2 Q3", "Platinum 2 Q4", "Platinum 2 Q5"];
var diamondOnePool = ["Diamond 1 Q1", "Diamond 1 Q2", "Diamond 1 Q3", "Diamond 1 Q4", "Diamond 1 Q5"];
var diamondTwoPool = ["Diamond 2 Q1", "Diamond 2 Q2", "Diamond 2 Q3", "Diamond 2 Q4", "Diamond 2 Q5"];

// Constants
const sd = 100; // Standard deviation. Should always be set to 100.

// Returns a random question with a rating of multiples of 100, including 0
// The question rating can only be within a specified range from the user rating
const selectQuestionRating = (userRating) => {
    const floorUserRating = Math.floor(userRating / 100) * 100;
    const rand = Math.floor(Math.random() * 100);

    // 60% chance to select a question from the user's rating pool
    if (rand >= 0 && rand <= 59) {
        return floorUserRating;
    }
    // 35% chance to select a question 1 standard deviation away from the user's rating pool
    else if (rand >= 60 && rand <= 84) {
        // 50/50 chance for this question to be 1 SD above or below
        const rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 1) {
            return floorUserRating + sd;
        }
        else {
            return floorUserRating - sd;
        }
    }
    // 5% chance to select a question 2 standard deviations away from the user's rating pool
    else if (rand >= 85 && rand <= 99) {
        // 50/50 chance for this question to be 1 SD above or 
        const rand2 = Math.floor(Math.random() * 2);
        if (rand2 == 1) {
            return floorUserRating + (sd * 2);
        }
        else {
            return floorUserRating - (sd * 2);
        }
    }
}

const selectQuestion = (questionRating) => {
    let newQuestion;
    switch (questionRating) {
        case 0:
            newQuestion = bronzeOnePool[Math.floor(Math.random() * bronzeOnePool.length)];
            break;
        case 100:
            newQuestion = bronzeTwoPool[Math.floor(Math.random() * bronzeTwoPool.length)];
            break;
        case 200:
            newQuestion = silverOnePool[Math.floor(Math.random() * silverOnePool.length)];
            break;
        case 300:
            newQuestion = silverTwoPool[Math.floor(Math.random() * silverTwoPool.length)];
            break;
        case 400:
            newQuestion = goldOnePool[Math.floor(Math.random() * goldOnePool.length)];
            break;
        case 500:
            newQuestion = goldTwoPool[Math.floor(Math.random() * goldTwoPool.length)];
            break;
        case 600:
            newQuestion = platinumOnePool[Math.floor(Math.random() * platinumOnePool.length)];
            break;
        case 700:
            newQuestion = platinumTwoPool[Math.floor(Math.random() * platinumTwoPool.length)];
            break;
        case 800:
            newQuestion = diamondOnePool[Math.floor(Math.random() * diamondOnePool.length)];
            break;
        case 900:
            newQuestion = diamondTwoPool[Math.floor(Math.random() * diamondTwoPoolPool.length)];
            break;
    }
    return newQuestion;
}

module.exports = { selectQuestionRating, selectQuestion}