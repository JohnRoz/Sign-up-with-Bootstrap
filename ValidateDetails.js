function validate_details() {
    if (
        is_real_name_OK()
        && has_agreed_to_terms()
        && is_valid_password()
    )
        alert("THANK'S FOR SIGNING UP !");

    else
        alert("CHECK THE DETAILS AGAIN...");
}

function is_real_name_OK() {
    var realName = $("RealNameInput").val();
    var check = /[a-zA-Z]/.test(realName);
    return (check);
}

function has_agreed_to_terms() {
    var isChecked = document.getElementById("termsAndConditionsCheckBox").checked;
    return (isChecked);
}

function is_valid_password() {
    var username = document.getElementById("passwordInput").value;

    var containsSmallLetter = /[a-z]/.test(username);
    var containsCapitalLetters = /[A-Z]/.test(username);
    var containsDigit = /\d/.test(username);
    var containsSpecial = /[^a-zA-Z\d]/.test(username);

    if (!containsSmallLetter || !containsCapitalLetters || !containsDigit || !containsSpecial)
        alert("Password needs to contain lowercase letters, uppercase letters, digits and special characters !");
    else {
        if (!(username.length >= 8))
            alert("Password's length must be longer that 8 characters !");
        else
            return true;
    }


}

/*
//LAMDA FUNCTION:
$(document).ready(function(){
    $("#signUpButton").onClick = validate_details;
});
*/