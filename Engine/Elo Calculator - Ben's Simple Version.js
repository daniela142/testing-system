//Elo Calculator

//constants
const baseConstant = 10;
const streakConstant = 0.25

//variables
var userElo = 500;
var questionElo = 400;
var winLoss = 1;
var streak = 3;
var totalQuestionsAnswered = 20;

//calculatables
var volatility = 0;
var streakMultiplier = 0;
var questionsAnsweredMultiplier = 0;

function questionsAnsweredCalculation (totalQuestionsAnswered) {
    return questionsAnsweredMultiplier = 1 / Math.log(totalQuestionsAnswered);
}
//I thought it might be a good idea to separate these two functions from
//the volatility calculation incase we wanna calculate it separately
function streakCalculation (streak) {
    return streakMultiplier = streak * streakConstant;
}

function volatilityCalculation (streakMultiplier, questionsAnsweredMultiplier) {
    return volatility = 1 + streakMultiplier + questionsAnsweredMultiplier
}

function updateUserElo (winLoss, oldUserElo, questionElo, volatility) {
    //console.log(winLoss * (questionElo/userElo) * volatility * baseConstant);
    return userElo = oldUserElo + winLoss * (questionElo/oldUserElo) * volatility * baseConstant;
}

console.log("questionsAnsweredMultipler BEFORE = " + questionsAnsweredMultiplier);
console.log("streakMultiplier BEFORE = " + streakMultiplier);
console.log("volatility BEFORE = " + volatility);
console.log("userElo BEFORE = " + userElo);
questionsAnsweredCalculation(totalQuestionsAnswered);
streakCalculation(streak);
volatilityCalculation(streakMultiplier, questionsAnsweredMultiplier);
updateUserElo(winLoss, userElo, questionElo, volatility);
console.log("questionsAnsweredMultipler AFTER = " + questionsAnsweredMultiplier);
console.log("streakMultiplier AFTER = " + streakMultiplier);
console.log("volatility AFTER = " + volatility);
console.log("userElo AFTER = " + userElo);