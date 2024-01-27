
function beginning()
{
    window.scrollTo(top);
}


// form javascript here
function Connection() {
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userMessage = document.getElementById("message").value;

    if (userName.trim() === "" || userEmail.trim() === "" || userMessage.trim() === "") {
        alert("Please fill all the fields correctly.");
        return
    }

    var containsNumbersOrSymbols = /[0-9!@#$%^&*(),.?":{}|<>]/.test(userName);
    if (containsNumbersOrSymbols) {
        alert("Username should not contain numbers or special symbols.");
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        alert("Please enter a valid email address.");
        return;
    }

    alert("Form submitted successfully!");
}

