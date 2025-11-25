// Simple hard-coded credentials
const USER = {
  username: "admin",
  password: "1234"
};

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const status = document.getElementById("status");

  if (username === USER.username && password === USER.password) {
    status.style.color = "green";
    status.innerText = "Login successful! ✔️";
  } else {
    status.style.color = "red";
    status.innerText = "Invalid username or password ❌";
  }
}
