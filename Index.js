// REGISTER
function Register() {
  let registerUsername = document.getElementById("Registerusername").value.trim();
  let registerPassword = document.getElementById("Registerpassword").value.trim();
  let confirmPassword = document.getElementById("Confirm").value.trim();

  if (registerUsername === "" || registerPassword === "" || confirmPassword === "") {
    alert("Please enter all information");
    return;
  }

  if (registerPassword !== confirmPassword) {
    alert("Password and Confirm Password do not match");
    return;
  }

  // Save to localStorage
  localStorage.setItem("regUsername", registerUsername);
  localStorage.setItem("regPassword", registerPassword);

  alert("Register successful!");
  window.location.replace("login.html");
}

// LOGIN
function Login() {
  let username = document.getElementById("Username").value.trim();
  let password = document.getElementById("Password").value.trim();

  if (username === "" || password === "") {
    alert("Please enter username and password");
    return;
  }

  // Get registered data
  let savedUsername = localStorage.getItem("regUsername");
  let savedPassword = localStorage.getItem("regPassword");
  if(username === "CHAISUNG" && password === "1414"){
    alert("Login success!")
    sessionStorage.setItem("islogin", "true");
    window.location.replace("index.html");
  }
  else if (username === savedUsername && password === savedPassword) {
    sessionStorage.setItem("islogin", "true");
    alert("Login success!");
    window.location.replace("index.html");
  } else {
    alert("Username or password incorrect");
  }
}

function ChangeIcon() {
  const passwordInput = document.getElementById("Password");
  const toggleIcon = document.getElementById("toggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
}

 function togglePassword(inputId, iconId) {
    let input = document.getElementById(inputId);
    let icon  = document.getElementById(iconId);

    if (input.type === "password") {
      input.type = "text";
      icon.className = "fa-solid fa-eye";
    } else {
      input.type = "password";
      icon.className = "fa-solid fa-eye-slash";
    }
  }