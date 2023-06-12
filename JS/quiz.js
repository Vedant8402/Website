//Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let total = 0;
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();
  let input3 = document.getElementById("input3").value.toLowerCase();
  let input4 = document.getElementById("input4").value.toLowerCase();

  if (input1 === "stoick") {
    total = total + 1;
    document.getElementById("output1").innerHTML = "Correct";
    document.getElementById("output1").style.color = "darkgreen";
  } else {
    document.getElementById("output1").innerHTML = "Incorrect";
    document.getElementById("output1").style.color = "darkred";
  }

  if (input2 === "toothless" || input2 === "nightfury") {
    total = total + 1;
    document.getElementById("output2").innerHTML = "Correct";
    document.getElementById("output2").style.color = "darkgreen";
  } else {
    document.getElementById("output2").innerHTML = "Incorrect";
    document.getElementById("output2").style.color = "darkred";
  }

  if (input3 === "2010") {
    total = total + 1;
    document.getElementById("output3").innerHTML = "Correct";
    document.getElementById("output3").style.color = "darkgreen";
  } else {
    document.getElementById("output3").innerHTML = "Incorrect";
    document.getElementById("output3").style.color = "darkred";
  }

  if (input4 === "john powell") {
    total = total + 1;
    document.getElementById("output4").innerHTML = "Correct";
    document.getElementById("output4").style.color = "darkgreen";
  } else {
    document.getElementById("output4").innerHTML = "Incorrect";
    document.getElementById("output4").style.color = "darkred";
  }

  let percentTotal = (total / 4) * 100;
  document.getElementById("output").innerHTML = `${percentTotal}%`;
  if (total === 0) {
    document.getElementById("output-txt").innerHTML =
      "You are banished from the tribe";
  } else if (total === 1) {
    document.getElementById("output-txt").innerHTML =
      "Back to Dragon School";
  } else if (total === 2) {
    document.getElementById("output-txt").innerHTML =
      "Stoick would be dissapointed";
  } else if (total >= 3) {
    document.getElementById("output-txt").innerHTML =
      "Congrats, here's some dragon nip";
  }
}
