const VALID_USER = "admin";
const VALID_PASSWORD = "1234";

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (username === VALID_USER && password === VALID_PASSWORD) {
        localStorage.setItem("auth", "true");
        window.location.href = "search.html";
    } else {
        errorMsg.textContent = "Incorrect username or password.";
    }
});
