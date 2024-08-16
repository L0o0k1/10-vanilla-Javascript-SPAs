// Func to Computer Random Choice:
const getChoice = () => {
  const choice = ["rock", "paper", "scissors"];
  const random = Math.floor(Math.random() * choice.length);
  return choice[random];
};
// Func to play :
const playing = (usrChoice) => {
  const compChoice = getChoice();
  const result = knownWinner(usrChoice, compChoice);
  dispResult(usrChoice, compChoice, result);
};
// Func to know who Wins:
const knownWinner = (usr, comp) => {
  if (usr === comp) {
    return "Its Tie! :)";
  } else if (
    (usr === "rock" && comp === "scissors") ||
    (usr === "scissors" && comp === "paper") ||
    (usr === "paper" && comp === "rock")
  ) {
    return "U Win ! :)";
  } else {
    return "U Lost :(";
  }
};

// Display the results:
function dispResult(usr, comp, result) {
  const resDiv = document.getElementById("result");
  resDiv.innerHTML = `<h3>You Chose : ${usr}</h3>
    <h3>Computer Chose : ${comp}</h3>
    <h3>${result}</h3>`;
}
