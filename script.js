document.addEventListener("DOMContentLoaded", function() {
    var userName = prompt("Please enter your name:");

    if (userName !== null) {
        alert("Hello, " + userName + "! Welcome to my website.");
    }
});