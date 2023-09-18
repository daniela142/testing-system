// Glicko-2 Algorithm

// Variables
var rd = 350; // Ratings deviation - 350 is the RD of an unrated player
var lastPlay = 0; // Time in weeks since last completed test
var userRating = 350; // User's skill rating
var questionRatings = [350, 350, 350, 350, 350, 350, 350, 350, 350, 350]; // Question (Enemy) skill ratings
var vol = 0; // Player rating volatility

