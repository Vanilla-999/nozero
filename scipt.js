let time = 900;
let interval;

const tasks = {
  low: [
    "Make your bed",
    "Drink a glass of water",
    "Clean your desk for 5 minutes"
  ],
  mid: [
    "Read 3 pages",
    "Do 10 push-ups",
    "Plan the rest of the day"
  ],
  good: [
    "Work on your project",
    "Study for 15 minutes",
    "Do a focused task"
  ]
};

function setMood(mood) {
  const list = tasks[mood];
  const randomTask = list[Math.floor(Math.random() * list.length)];
  document.getElementById("task").innerText = "Your task: " + randomTask;
}

function startTimer() {
  clearInterval(interval);
  time = 900;

  interval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    document.getElementById("timer").innerText =
      ${minutes}:${seconds < 10 ? "0" : ""}${seconds};

    time--;

    if (time < 0) {
      clearInterval(interval);
      document.getElementById("timer").innerText = "Done. You are not zero anymore.";
    }
  }, 1000);
}