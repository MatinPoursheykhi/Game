let items = document.querySelectorAll("#userPlace > span");
let userScore = 0;
let pcScore = 0;
let result = document.getElementById("result");

for (i = 0; i < items.length; i++) {
  items[i].addEventListener("click", function () {
    for (j = 0; j < items.length; j++) {
      items[j].style.opacity = ".6";

      document.getElementById("PC").setAttribute("class", "");
    }
    userSelect = this.getAttribute("class");
    this.style.opacity = "1";

    let array = ["rock", "paper", "scissors"];
    let pc = array[Math.floor(Math.random() * array.length)];
    document.getElementById("PC").setAttribute("class", pc);

    if (userSelect == pc) {
      result.innerText = "DRAW";
      result.style.color = "gray";
    } else if (userSelect == "paper" && pc == "rock") {
      userScore++;
      result.innerText = "WIN";
      result.style.color = "green";
    } else if (userSelect == "scissors" && pc == "paper") {
      userScore++;
      result.innerText = "WIN";
      result.style.color = "green";
    } else if (userSelect == "rock" && pc == "scissors") {
      userScore++;
      result.innerText = "WIN";
      result.style.color = "green";
    } else if (pc == "paper" && userSelect == "rock") {
      pcScore++;
      result.innerText = "LOSE";
      result.style.color = "red";
    } else if (pc == "scissors" && userSelect == "paper") {
      pcScore++;
      result.innerText = "LOSE";
      result.style.color = "red";
    } else if (pc == "rock" && userSelect == "scissors") {
      pcScore++;
      result.innerText = "LOSE";
      result.style.color = "red";
    }
    document.getElementById("userScorePlace").innerText = userScore;
    document.getElementById("pcScorePlace").innerText = pcScore;
  });
}

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("userScorePlace").innerText = "0";
  document.getElementById("pcScorePlace").innerText = "0";
  userScore = 0;
  pcScore = 0;
  document.getElementById("PC").setAttribute("class", "");
  result.innerText = "VS";
  result.style.color = "#fff";

  for (i = 0; i < items.length; i++) {
    items[i].style.opacity = ".6";
  }
});
