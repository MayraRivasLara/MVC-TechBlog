async function signUpHandler(event) {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/home");
    } else {
      alert(response.statusText);
    }
  } else if (!password || !email) {
    alert("You need to provide both: email and password");
  }
}

document.querySelector(".loginButton").addEventListener("click", signUpHandler);
