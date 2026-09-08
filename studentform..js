<!DOCTYPE html>
<html>
<head>
    <title>User Registration Form</title>
    <style>
        .error { color: red; font-size: 12px; }
        input { margin-bottom: 10px; }
    </style>
</head>
<body>

<h2>User Registration Form</h2>

<form name="regForm" onsubmit="return validateForm()">
    
    Name: <input type="text" id="name">
    <span id="nameError" class="error"></span> <br>

    Email: <input type="text" id="email">
    <span id="emailError" class="error"></span> <br>

    Password: <input type="password" id="password">
    <span id="passError" class="error"></span> <br>

    Age: <input type="text" id="age">
    <span id="ageError" class="error"></span> <br>

    Mobile: <input type="text" id="mobile">
    <span id="mobileError" class="error"></span> <br>

    <input type="submit" value="Submit">
</form>

<script>
function validateForm() {
   
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";

    let isValid = true;

    // 1. Name Validation - Only characters and space
    let name = document.getElementById("name").value;
    let nameRegex = /^[A-Za-z\s]+$/;
    if(name == "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    } else if(!nameRegex.test(name)) {
        document.getElementById("nameError").innerHTML = "Only characters allowed";
        isValid = false;
    }

    // 2. Email Validation - proper email format
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email == "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if(!emailRegex.test(email)) {
        document.getElementById("emailError").innerHTML = "Invalid email format";
        isValid = false;
    }

    // 3. Password Validation - exactly 6 digits
    let password = document.getElementById("password").value;
    let passRegex = /^\d{6}$/; // 6 digits only
    if(password == "") {
        document.getElementById("passError").innerHTML = "Password is required";
        isValid = false;
    } else if(!passRegex.test(password)) {
        document.getElementById("passError").innerHTML = "Password must be 6 digits";
        isValid = false;
    }

    // 4. Age Validation - number only
    let age = document.getElementById("age").value;
    let ageRegex = /^\d+$/;
    if(age == "") {
        document.getElementById("ageError").innerHTML = "Age is required";
        isValid = false;
    } else if(!ageRegex.test(age)) {
        document.getElementById("ageError").innerHTML = "Age must be number";
        isValid = false;
    }

    // 5. Mobile Validation - exactly 10 digits
    let mobile = document.getElementById("mobile").value;
    let mobileRegex = /^\d{10}$/;
    if(mobile == "") {
        document.getElementById("mobileError").innerHTML = "Mobile is required";
        isValid = false;
    } else if(!mobileRegex.test(mobile)) {
        document.getElementById("mobileError").innerHTML = "Mobile must be 10 digits";
        isValid = false;
    }

    return isValid; // form will submit only if true
}
</script>

</body>
</html>