document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signin-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent form submission immediately

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if both username and password are filled
        if (username && password) {
            // If both fields are filled, wait 2 seconds before redirecting to home.html
            setTimeout(function () {
                window.location.href = "home.html";  // Redirect to home page
            }, 2000);  // 2-second delay
        } else {
            // If either field is empty, alert the user
            alert("Please fill in both the username and password.");
        }
    });
});

