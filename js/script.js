var loginForm = document.getElementById('container3');
var signUpForm = document.getElementById('container4');
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");

function signUpClicked() {
    signUpForm.style.left = "240px";
    button1.disabled = true;
    setTimeout(function() {
        button1.disabled = false;
    }, 1000);
    var position = 660;
    var id = setInterval(slide, 1);
    function slide() {
        if (position == 240) {
            clearInterval(id);
            signUpForm.style.visibility = "visible";
            loginForm.style.visibility = "hidden";
        } else {
            position -= 5;
            loginForm.style.left = position + 'px';
        }
    }
    document.title = "Sign Up";
}

function loginClicked() {
    loginForm.style.left = "660px";
    button2.disabled = true;
    setTimeout(function() {
        button2.disabled = false;
    }, 1000);
    var position = 240;
    var id = setInterval(slide, 1);
    function slide() {
        if (position == 660) {
            clearInterval(id);
            signUpForm.style.visibility = "hidden";
            loginForm.style.visibility = "visible";
        } else {
            position += 5;
            signUpForm.style.left = position + 'px';
        }
    }
    document.title = "Login";
}

var input = document.getElementsByClassName("inputField");
var label = document.getElementsByTagName("label");
var logos = document.getElementsByClassName("logos");
var logosA = document.getElementsByClassName("logosA");
var i;
for (i = 0; i < input.length; i++) {
    input[i].addEventListener("focus", focusFunction);
    input[i].addEventListener("blur", blurFunction);

    function focusFunction() {
        for (i = 0; i < label.length; i++) {
            label[i].style.fontSize = "11px";
            label[i].style.textTransform = "uppercase";
            label[i].style.fontWeight = "bold";
            label[i].style.letterSpacing = "1px";
        }
        for (i = 0; i < logos.length; i++) logos[i].style.opacity = "0";
        for (i = 0; i < logosA.length; i++) logosA[i].style.opacity = "1";
        for (i = 0; i < input.length; i++) input[i].style.marginTop = "1px";
    }

    function blurFunction() {
        for (i = 0; i < label.length; i++) {
            label[i].style.fontSize = "16px";
            label[i].style.textTransform = "none";
            label[i].style.fontWeight = "normal";
            label[i].style.letterSpacing = "0";
        }
        for (i = 0; i < logos.length; i++) logos[i].style.opacity = "1";
        for (i = 0; i < logosA.length; i++) logosA[i].style.opacity = "0";
        for (i = 0; i < input.length; i++) input[i].style.marginTop = "0";
    }
}