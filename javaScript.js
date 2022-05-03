let num = Math.trunc(Math.random() * 50) + 1;
console.log(num);
let Score = 20;
const displayMassage = function (message) {
  document.querySelector(".start").textContent = message;
};

document.querySelector(".bts").addEventListener("click", function () {
  const guess = Number(document.querySelector(".space").value);
  // console.log(guess, typeof guess);

  if (!guess) {
    // document.querySelector(".start").textContent = "No Number";
    displayMassage("No Number");
  } else if (guess === num) {
    // document.querySelector(".start").textContent = "🥳 correct number!";
    displayMassage("🥳 correct number!");
    document.querySelector(".head").style.backgroundColor = "#60b347";
    document.querySelector(".unknow").style.backgroundColor = "#60b347";
    document.querySelector("main").style.backgroundColor = "#60b347";
    document.querySelector(".space").style.backgroundColor = "#60b347";
    document.querySelector(".questionMark").textContent = num;
    document.querySelector(".highscore").textContent = Score;
  } else if (guess > num) {
    if (Score > 1) {
      // document.querySelector(".start").textContent = "📈To High";
      displayMassage("📈To High");
      Score--;
      document.querySelector(".Score").textContent = Score;
    } else {
      // document.querySelector(".start").textContent = "🤯 You lost the game";
      displayMassage("🤯 You lost the game");
      document.querySelector(".Score").textContent = "0";
    }
  } else if (guess < num) {
    if (Score > 1) {
      // document.querySelector(".start").textContent = "📉To Low";
      displayMassage("📉To Low");
      Score--;
      document.querySelector(".Score").textContent = Score;
    } else {
      // document.querySelector(".start").textContent = "🤯 You lost the game";
      displayMassage("🤯 You lost the game");
      document.querySelector(".Score").textContent = "0";
    }
  }
});

document.querySelector(".bt").addEventListener("click", function () {
  Score = 20;
  // document.querySelector(".start").textContent = "Start guessing...";
  displayMassage("Start guessing...");
  document.querySelector(".head").style.backgroundColor = "#000";
  document.querySelector(".unknow").style.backgroundColor = "#000";
  document.querySelector("main").style.backgroundColor = "#000";
  document.querySelector(".space").style.backgroundColor = "#000";
  num = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".Score").textContent = Score;
  document.querySelector(".space").value = " ";
  document.querySelector(".questionMark").textContent = "?";
});
