console.log("Hi Krishna How Are You??");

let signup_link = document.querySelector(".a1");
let login_link = document.querySelector(".a2");

let signup_form = document.querySelector(".signup-form");
let login_form = document.querySelector(".login-form");

let sign_sub = document.querySelector(".sign-sub");
let login_sub = document.querySelector(".login-sub");

sign_sub.addEventListener("click",signupAlert);
login_sub.addEventListener("click",loginAlert);


function signupAlert(){
    alert("Form Successfully Signup");
}
function loginAlert(){
    alert("You are Successfully Logged in")
}


login_link.addEventListener("click",signup_hidden);
signup_link.addEventListener("click",login_hidden);

function signup_hidden(){
    signup_form.style.display = "none";
    login_form.style.display = "block";
    signup_link.style.background = "#34495e";
    login_link.style.background = "#2981bc";

}

function login_hidden(){
    signup_form.style.display = "block";
    login_form.style.display = "none";
    signup_link.style.background = "#2981bc";
    login_link.style.background = "#34495e";

}