function verifyForm() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const username = document.getElementById("username");

  if (
    email.value.includes("@") &&
    password.value.length >= 8 &&
    username.value != ""
  ) {
    const p = document.createElement("p");
    p.innerHTML = "proceed";
    p.style.color = "green";
    document.body.appendChild(p);
  } else {
    const p = document.createElement("p");
    p.innerHTML = "WRONG INFO";
    p.style.color = "red";
    document.body.appendChild(p);
  }
}
