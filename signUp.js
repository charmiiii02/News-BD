
// function show() {
//   var x = document.getElementById("pass");
//   var y = document.getElementById("cpass");
//   if (x.type == "password" && y.type == "password") {
//     x.type = "text";
//     y.type = "text";
//   } else {
//     x.type = "password";
//     y.type = "password";
//   }
// }


// document.addEventListener('DOMContentLoaded', function () {
//   const signupForm = document.getElementById('form'); // Select the signup form

//   signupForm.addEventListener('submit', function (e) {
//       e.preventDefault(); // Prevent form submission

//       // Retrieve user input
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('mail').value;
//       const contact = document.getElementById('tel').value;
//       const password = document.getElementById('pass').value;
//       const confirmPassword = document.getElementById('cpass').value;

//       // Add your validation logic here
//       if (password !== confirmPassword) {
//           alert('Passwords do not match. Please try again.');
//           return;
//       }

//       // Store user data (e.g., in a database)

//       // Redirect to login page after successful signup
//       window.location.href = '/Login.html';
//   });
// });


// function show() {
//   var x = document.getElementById("pass");
//   var y = document.getElementById("cpass");
//   if (x.type == "password" && y.type == "password") {
//     x.type = "text";
//     y.type = "text";
//   } else {
//     x.type = "password";
//     y.type = "password";
//   }
// }


// document.addEventListener('DOMContentLoaded', function () {
//   const signupForm = document.getElementById('form'); // Select the signup form

//   signupForm.addEventListener('submit', function (e) {
//       e.preventDefault(); // Prevent form submission

//       // Retrieve user input
//       const name = document.getElementById('name').value;
//       const email = document.getElementById('mail').value;
//       const contact = document.getElementById('tel').value;
//       const password = document.getElementById('pass').value;
//       const confirmPassword = document.getElementById('cpass').value;

//       // Add your validation logic here
//       if (password !== confirmPassword) {
//           alert('Passwords do not match. Please try again.');
//           return;
//       }

//       // Store user data (e.g., in a database)

      
//       // Save email and password to localStorage
//       localStorage.setItem('email', email);
//       localStorage.setItem('pass', password);

//   // Redirect to login page after successful signup
//       window.location.href = 'D:\\News_Website\\Login.html';
//   });
// });


function show() {
  var x = document.getElementById("pass");
  var y = document.getElementById("cpass");
  if (x.type == "password" && y.type == "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}


document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('form'); // Select the signup form

  signupForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent form submission

      // Retrieve user input
      const name = document.getElementById('name').value;
      const email = document.getElementById('mail').value;
      const contact = document.getElementById('tel').value;
      const password = document.getElementById('pass').value;
      const confirmPassword = document.getElementById('cpass').value;

      // Add your validation logic here
      if (password !== confirmPassword) {
          alert('Passwords do not match. Please try again.');
          return;
      }

      // Store user data (e.g., in a database)

      
      // Save email and password to localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('pass', password);

  // Redirect to login page after successful signup
      window.location.href = 'D:\\News_Website\\Login.html';
  });
});


// Adding redirection code for successful signup
document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.getElementById('form'); // Select the signup form

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Signup successful!");
    window.location.href = "./Login.html";
  });
});
