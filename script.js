let interval;

function startTimer() {
  let time = Number(document.getElementById("seconds").value);
  const display = document.getElementById("display");

  if (isNaN(time) || time <= 0) {
    display.textContent = "Enter valid seconds";
    return;
  }

  clearInterval(interval);
  display.textContent = "Time: " + time;

  interval = setInterval(() => {
    time--;
    display.textContent = "Time: " + time;

    if (time <= 0) {
      clearInterval(interval);
      display.textContent = "Time's up!";
    }
  }, 1000);
}
