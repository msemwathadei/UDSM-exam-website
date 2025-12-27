window.onload = function () {
    alert("Welcome to UDSM Online Examination Portal");
    document.getElementById("year").textContent = new Date().getFullYear();
};

function login(role) {
    alert(role + " login selected");
}
