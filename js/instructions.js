const agreeCheckbox = document.getElementById("agree");
const startButton = document.getElementById("startBtn");

agreeCheckbox.addEventListener("change", function () {
    if (this.checked) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
});

startButton.addEventListener("click", function () {
    window.location.href = "exam.html";
});
