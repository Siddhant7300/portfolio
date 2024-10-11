
function beginning() {
    const messages = [
        "Crafting Digital Dreams",
        "Solving Problems with Code",
        "Empowering Ideas through Technology",
        "Building the Future, One Line at a Time",
        "Creating Innovative Solutions",
        "Turning Concepts into Reality",
        "Passionate about Code and Creativity"
    ];
        let index = 0;
    const userNameElement = document.getElementById("display-text");
    let currentMessage = '';
    let letterIndex = 0;

    function type() {
        if (letterIndex < messages[index].length) {
            currentMessage += messages[index].charAt(letterIndex);
            userNameElement.textContent = currentMessage;
            letterIndex++;
            setTimeout(type, 100); // Adjust typing speed here
        } else {
            setTimeout(erase, 1000); // Wait before erasing
        }
    }

    function erase() {
        if (letterIndex > 0) {
            currentMessage = currentMessage.substring(0, letterIndex - 1);
            userNameElement.textContent = currentMessage;
            letterIndex--;
            setTimeout(erase, 100); // Adjust erasing speed here
        } else {
            index = (index + 1) % messages.length; // Cycle through messages
            letterIndex = 0; // Reset letter index for the next message
            setTimeout(type, 500); // Wait before typing the next message
        }
    }

    type(); // Start the typing effect
}

// Call the function to start the animation
beginning();




// form javascript here
function Connection(event) {
    event.preventDefault(); // Prevent the default form submission

    var userName = document.getElementById("name").value.trim();
    var userEmail = document.getElementById("email").value.trim();
    var userMessage = document.getElementById("message").value.trim();

    // Clear previous error messages
    document.getElementById("name-error").innerText = "";
    document.getElementById("email-error").innerText = "";
    document.getElementById("message-error").innerText = "";

    // Validate username
    var containsNumbersOrSymbols = /[0-9!@#$%^&*(),.?":{}|<>]/.test(userName);
    if (containsNumbersOrSymbols) {
        document.getElementById("name-error").innerText = "Username should not contain numbers or special symbols.";
        return;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
        document.getElementById("email-error").innerText = "Please enter a valid email address.";
        return;
    }

    // Validate message
    if (userMessage.length < 5) {
        document.getElementById("message-error").innerText = "Message must be at least 5 characters long.";
        return;
    }

    // If all validations pass
    alert("Form submitted successfully!");

    // Reset the form
    document.querySelector(".myForm").reset();
}

