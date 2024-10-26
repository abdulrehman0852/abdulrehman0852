function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required!";
        return false;
    } else if (username.length < 4) {
        errorMessage.textContent = "Username must be at least 4 characters!";
        return false;
    } else if (password.length < 6) {
        errorMessage.textContent = "Password must be at least 6 characters!";
        return false;
    } else {
        alert("Login successful!");
        return true;
    }
}


