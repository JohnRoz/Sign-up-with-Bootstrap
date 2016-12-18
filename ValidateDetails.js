function validate_details() {
    var isValidUsername = is_valid_username();
    var isValidEmail = is_valid_email();
    var isValidPassword = is_valid_password();
    var isPasswordConfirmed = is_password_confirmed();
    var isFullNameValid = is_full_name_valid();
    var isValidPhoneNum = is_valid_phone_num();
    var isBirthDateReal = is_birth_date_real();
    var hasAgreedToTerms = has_agreed_to_terms();

    if (
        isValidUsername
        && isValidEmail
        && isValidPassword
        && isPasswordConfirmed
        && isFullNameValid
        && isValidPhoneNum
        && isBirthDateReal
        && hasAgreedToTerms
    )
        alert("THANK'S FOR SIGNING UP !");
}

// *** REMEMBER THIS IF YOU ENTER THIS CODE IN THE FUTURE !!!! ***
var currentYear = 2017;


function is_valid_username() {
    var username = document.getElementById("usernameInput").value;

    // Check is the length of the username is between 2 and 20 characters.
    if (username.length > 20 || username.length < 2) {
        alert("username's length must be between 2 and 20 characters !")
        return false;
    }
    return true;
}

function is_valid_email() {
    var email = document.getElementById("emailAddressInput").value;

    // Check if email address was entered.
    if (email.length == 0) {
        alert("You must enter your Email address.");
        return false;
    }

    // Check if the email input string contains the '@' char.
    if (!email.includes("@")) {
        alert("Not valid email address ! Please re-enter your email address.");
        return false;
    }
    return true;
}

function is_valid_password() {
    var password = document.getElementById("passwordInput").value;
    // Check if the password input is empty.
    if (password.length == 0) {
        alert("You must have a password.");
        return false;
    }

    var containsSmallLetter = /[a-z]/.test(password);
    var containsCapitalLetters = /[A-Z]/.test(password);
    var containsDigit = /\d/.test(password);
    var containsSpecial = /[^a-zA-Z\d\s]/.test(password);

    // Check the password contains at least one lowercase letter, one uppercase letter, one digit and one special character.
    if (!containsSmallLetter || !containsCapitalLetters || !containsDigit || !containsSpecial) {
        alert("Password needs to contain lowercase letters, uppercase letters, digits and special characters !");
        return false;
    }


    // Check the password's length is longer than 8 characters.
    if (password.length < 8) {
        alert("Password's length must be longer that 8 characters !");
        return false;
    }


    return true;

}

function is_password_confirmed() {
    var confirmedPassword = document.getElementById("confirmPasswordInput").value;
    var password = document.getElementById("passwordInput").value;

    // Check if password was confirmed.
    if (confirmedPassword.length == 0) {
        alert("You must confirm your password")
        return false;
    }

    // Check if the value of the confirmPassword input is equal to the password input.
    if (confirmedPassword.localeCompare(password) == 0)
        return true;

    alert("The 'confirm password' input must be identical to the 'password' input.");
    return false;
}

function is_full_name_valid() {
    var fullName = document.getElementById("FullNameInput").value;

    // Check if the FullName input is empty.
    if (fullName.length == 0) {
        alert("You must enter your full name.");
        return false;
    }

    var containsDigit = /\d/.test(fullName);
    var containsSpecial = /[^a-zA-Z\d\s]/.test(fullName);

    // If the user's name contains digits or special characters return false.
    if (containsDigit || containsSpecial) {
        alert("Your full name must contain only letters.");
        return false;
    }

    return true;
}

function is_valid_phone_num() {

    var phoneInput = document.getElementById("phoneNumInput").value

    // Check if phone number was entered.
    if (phoneInput.length == 0) {
        alert("You must enter your phone number.")
        return false;
    }

    var containsOnlyDigits = /^\d+$/.test(phoneInput);
    // Check if the phone number doesn't contain onlt digits.
    if (!containsOnlyDigits) {
        alert("A phone number must contain only digits.")
        return false;
    }

    return true;
}

function is_birth_date_real() {
    var birthDate = document.getElementById("dateOfBirthInput").value;

    // Check if the user entered a birth date.
    if (birthDate.length == 0) {
        alert("You must enter your birth date.");
        return false;
    }

    var year = parseInt(birthDate.split("-")[0]);

    // Check if the birth date is in the future
    if (currentYear - year < 0) {
        alert("Looks like we have a time traveller over here...");
        return false;
    }

    // Check if the birth date is in the distant past.
    if (currentYear - year >= 100) {
        alert("come on...You're NOT more than 100 years old...");
        return false;
    }

    return true;


}

function has_agreed_to_terms() {
    var isChecked = document.getElementById("termsAndConditionsCheckBox").checked;
    // Check if the user did not accept my ridiculous terms & conditions.
    if (!isChecked)
        alert("You must accept our Terms & Conditions.");

    return (isChecked);
}
