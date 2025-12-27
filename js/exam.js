let time = 900; // 15 minutes
const timerEl = document.getElementById('timer');
const form = document.getElementById('examForm');
const cancelBtn = document.getElementById('cancelBtn');

const interval = setInterval(() => {
  if (time <= 0) {
    clearInterval(interval);
    alert("Time is up! Exam submitted automatically.");
    form.submit();
  }
  time--;
  const minutes = String(Math.floor(time / 60)).padStart(2, '0');
  const seconds = String(time % 60).padStart(2, '0');
  timerEl.textContent = `00:${minutes}:${seconds}`;
}, 1000);

// Submit confirmation
form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (confirm("Are you sure you want to submit your exam?")) {
    alert("Exam submitted successfully!");
    form.submit();
  }
});

// Cancel exam
cancelBtn.addEventListener('click', function () {
  if (confirm("Are you sure you want to cancel the exam?")) {
    window.location.href = "../index.html";
  }
});
