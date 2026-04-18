const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");
const topError = document.getElementById("topError");

const disposableDomains = ["tempmail.com", "mailinator.com", "10minutemail.com"];

const locationData = {
    India: {
        Karnataka: ["Bangalore", "Mysore"],
        Telangana: ["Hyderabad", "Warangal"]
    },
    USA: {
        California: ["Los Angeles", "San Francisco"],
        Texas: ["Dallas", "Austin"]
    }
};

const country = document.getElementById("country");
const state = document.getElementById("state");
const city = document.getElementById("city");

country.addEventListener("change", () => {
    state.innerHTML = `<option value="">Select State</option>`;
    city.innerHTML = `<option value="">Select City</option>`;
    if (country.value) {
        Object.keys(locationData[country.value]).forEach(s => {
            state.innerHTML += `<option value="${s}">${s}</option>`;
        });
    }
    validateForm();
});

state.addEventListener("change", () => {
    city.innerHTML = `<option value="">Select City</option>`;
    if (state.value) {
        locationData[country.value][state.value].forEach(c => {
            city.innerHTML += `<option value="${c}">${c}</option>`;
        });
    }
    validateForm();
});

document.querySelectorAll("input, select, textarea").forEach(el => {
    el.addEventListener("input", validateForm);
    el.addEventListener("change", validateForm);
});

document.getElementById("password").addEventListener("input", checkPasswordStrength);

function showError(id, message) {
    document.getElementById(id).innerText = message;
}

function clearError(id) {
    document.getElementById(id).innerText = "";
}

function markInvalid(el, condition) {
    if (condition) el.classList.add("invalid");
    else el.classList.remove("invalid");
}

function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strength = document.getElementById("strength");

    if (password.length < 6) {
        strength.innerText = "Weak";
        strength.style.color = "red";
    } else if (/[A-Z]/.test(password) && /\d/.test(password)) {
        strength.innerText = "Strong";
        strength.style.color = "green";
    } else {
        strength.innerText = "Medium";
        strength.style.color = "orange";
    }
}

function validateForm() {
    let valid = true;
    topError.innerText = "";

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    if (!firstName.value.trim()) {
        showError("firstNameError", "First Name is required");
        markInvalid(firstName, true);
        valid = false;
    } else {
        clearError("firstNameError");
        markInvalid(firstName, false);
    }

    if (!lastName.value.trim()) {
        showError("lastNameError", "Last Name is required");
        markInvalid(lastName, true);
        valid = false;
    } else {
        clearError("lastNameError");
        markInvalid(lastName, false);
    }

    if (!email.value.trim()) {
        showError("emailError", "Email is required");
        valid = false;
    } else {
        const domain = email.value.split("@")[1];
        if (disposableDomains.includes(domain)) {
            showError("emailError", "Disposable email not allowed");
            valid = false;
        } else {
            clearError("emailError");
        }
    }

    if (!phone.value.trim()) {
        showError("phoneError", "Phone number is required");
        valid = false;
    } else {
        clearError("phoneError");
    }

    const genderChecked = document.querySelector('input[name="gender"]:checked');
    if (!genderChecked) {
        showError("genderError", "Please select gender");
        valid = false;
    } else {
        clearError("genderError");
    }

    if (!country.value) {
        showError("countryError", "Country is required");
        valid = false;
    } else {
        clearError("countryError");
    }

    if (!password.value) {
        showError("passwordError", "Password is required");
        valid = false;
    } else {
        clearError("passwordError");
    }

    if (password.value !== confirmPassword.value) {
        showError("confirmPasswordError", "Passwords do not match");
        valid = false;
    } else {
        clearError("confirmPasswordError");
    }

    if (!terms.checked) {
        showError("termsError", "Accept Terms & Conditions");
        valid = false;
    } else {
        clearError("termsError");
    }

    submitBtn.disabled = !valid;
    return valid;
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (!validateForm()) {
        topError.innerText = "Please fix the errors before submitting";
        return;
    }

    alert("Registration Successful! Your profile has been submitted successfully.");
    form.reset();
    submitBtn.disabled = true;
    document.getElementById("strength").innerText = "";
});
