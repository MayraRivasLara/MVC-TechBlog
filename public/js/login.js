// logging in
const { response } = require("express");

async function loginFormHandler(event) {
    event.preventDefault();
    console.log("aaaaaaaa");

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("password-login").value.trim();

    if (email && password) {
        const respond = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/home")
        } else {
            alert("Incorrect email or password");
            document.location.reload();
        }
    } else if (!password || email) {
            alert("Please provide email and password.");
        }
    }

document
.querySelector("#loginBtn")
.addEventListener("click",loginFormHandler);
     