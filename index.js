let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let homeScore = 0;
let guestScore = 0;
function plusOneHome() {
  homeScore += 1;
  scoreHome.textContent = homeScore;
}
function plusTwoHome() {
  homeScore += 2;
  scoreHome.textContent = homeScore;
}
function plusThreeHome() {
  homeScore += 3;
  scoreHome.textContent = homeScore;
}
function plusOneGuest() {
  guestScore += 1;
  scoreGuest.textContent = guestScore;
}
function plusTwoGuest() {
  guestScore += 2;
  scoreGuest.textContent = guestScore;
}
function plusThreeGuest() {
  guestScore += 3;
  scoreGuest.textContent = guestScore;
}
