const emailInput = document.getElementById('eml');
function validateEmail() {
    var email = document.getElementById("eml").value;
    var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email)) {
        window.location.href = "./index.html";
        return true;
    } else {
        alert("Please enter a valid email address");
        return false;
    }
}
