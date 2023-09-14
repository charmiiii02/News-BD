
var form = document.getElementById("form");
addEventListener("submit", (e) => {
  e.preventDefault();

  var email = document.getElementById("mail").value;
  var pass = document.getElementById("pass").value;

  var savedEmail = localStorage.getItem("email");
  var savedPassword = localStorage.getItem("pass");

  if (email === savedEmail && pass === savedPassword) {
    alert("Login successfull!");
    window.location.href = "./index.html";
  }
  else {
    alert("Invalid credentials. Please try again.");
  }
});