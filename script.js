function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "1234") {
    alert("Login successful!");
  } else {
    alert("Invalid credentials.");
  }

  return false; // Prevent form submission and reload
}

