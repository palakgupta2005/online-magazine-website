document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("subscriptionForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();  // Prevent the form from submitting immediately
        
        const email = document.getElementById("email").value;
        
        // Check if the email field is filled and valid
        if (email) {
            // If the email is provided, redirect to premium.html
            window.location.href = "premium.html";  // Redirect to the subscription page
        } else {
            // If email is not filled, alert the user
            alert("Please enter a valid email address.");
        }
    });
});
