const login = document.getElementById("loginForm");
const signup = document.getElementById("signupForm");

const toLogin = document.getElementById("toLogin");
const toSignup = document.getElementById("toSignup");

login.style.display = "none";

const loginButton = document.getElementById("loginBtn");
const signupButton = document.getElementById("signupBtn");

toLogin.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("signupForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
})

toSignup.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("signupForm").style.display = "block";
})


loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.getElementById("exampleInputEmail1").value;
    const password = document.getElementById("exampleInputPassword1").value;
    const rememberMe = document.getElementById("exampleCheck1").checked;

    const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const validUser = accounts.find(account => account.email === email && account.password === password);

    if (validUser) {
        if (rememberMe)
            localStorage.setItem("savedEmail", email);
        else
            localStorage.removeItem("savedEmail");

        localStorage.setItem("isLoggedIn", email);

        Swal.fire({
            title: "Login successful!",
            icon: "success",
            text: `Logged in as ${email}`,
            draggable: true
        }).then(() => {
            window.location.href = "index.html";
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Login Failed",
            text: "Incorrect Email or Password",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

})

signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.getElementById("exampleInputEmail2").value;
    const password = document.getElementById("exampleInputPassword2").value;

    const accounts = JSON.parse(localStorage.getItem("accounts")) || []; //Get existing accounts or initialize empty array
    const existingAccount = accounts.find(account => account.email === email);

    if (!email || !password) {
        Swal.fire({
            icon: "error",
            title: "Sign Up Failed",
            text: "Please enter both email and password",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }

    if (existingAccount) {
        Swal.fire({
            title: "Account Exists",
            text: "This email is already registered. Redirecting to login...",
            icon: "warning"
        }).then(() => {
            window.location.href = "login.html"; // Redirect after alert
        });
    }
    else {
        accounts.push({ email, password});
        localStorage.setItem("accounts", JSON.stringify(accounts));
        Swal.fire("Success!", "Account created. Please log in.", "success")
            .then(() => {
                window.location.href = "login.html";
            });
    }

})

window.onload = function () {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
        document.getElementById("exampleInputEmail1").value = savedEmail;
        document.getElementById("exampleCheck1").checked = true;
    }

}


const forgotPassword = document.getElementById("forgotPassword");

forgotPassword.addEventListener("click", function (e) {
    e.preventDefault();
    Swal.fire({
        title: "Reset Password",
        text: "Please enter your email to receive a reset link",
        input: "email",
        inputAttributes: {
            autocapitalize: "off"
        },
        showCancelButton: true,
        confirmButtonText: "Send Rest Link",
        showLoaderOnConfirm: true,
    }).then((result) => {
        if (result.isConfirmed) {
            const email = result.value;
            // Simulate sending email
            Swal.fire({
                title: `A reset link has been sent to ${email}`,
                icon: "success",
                draggable: true
            });
        }
    });
});



