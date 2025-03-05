function validation() {
    if (document.Formfill.Username.value == "") {
        document.getElementById("result").innerHTML = "Enter Username*";
        return false;
    }
    else if (document.Formfill.Username.value.length<6) {
        document.getElementById("result").innerHTML = "At least six letter*";
        return false;
    }
    else if (document.Formfill.Email.value == "") {
        document.getElementById("result").innerHTML = "Enter your mail*";
        return false;
    }
    else if (document.Formfill.Password.value == "") {
        document.getElementById("result").innerHTML = "Enter your password*";
        return false;
    }else if (document.Formfill.Password.value.length<6) {
        document.getElementById("result").innerHTML = "Password must be six digits or more*";
        return false;
    }else if (document.Formfill.cPassword.value == "") {
        document.getElementById("result").innerHTML = "Enter confirm password*";
        return false;
    } else if (document.Formfill.cPassword.value !== document.Formfill.Password.value) {
        document.getElementById("result").innerHTML = "Password doesn't matched*";
        return false;
    } 
}