const API_URL = "https://rentcar.stepprojects.ge/api/Users";

let currentUser = null;

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document loaded");

loadUserFromStorage();

updateNavigation();

checkAuthAndShopPage();

attachEventListeners();

});


function loadUserFromStorage() {
    try {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("userData");

    if (token && userData) {
        if(!isTokenExpired(token)) {
        
            currentUser = JSON.parse(userData);
            console.log("User loaded from storage:", currentUser);
        } else {
            console.log("No user data found in storage.");
            logOut();
        }
    }

    } catch (error) {
        console.error("Error loading user from storage:", error);
        logOut();
    }
}

function checkAuthAndShopPage() {
    if(currentUser) {
        showPage("home")
    } else {
        showPage("Home")
    }
}

function updateNavigation() {
    const navLinks = document.querySelectorAll(".nav-links");

    if(currentUser) {
        navLinks.innerHTML = `
        <li><a href="#" onclick="showPage('home')">MAIN</a></li>
        <li><a href="#" onclick="showPage('profile')" class="user-name">${getUserDisplayName()}</a></li>
        <li><a href="#" onclick="logOut()">Log out</a></li>
        `
    }else {
        navLinks.innerHTML = `
        <li><a href="#" onclick="showPage('home')">MAIN</a></li>
        <li><a href="#" onclick="showPage('login')">Login</a></li>
        <li><a href="#" onclick="showPage('register')">Register</a></li>
        `
    }
}

function getUserDisplayName() {
    if (!currentUser) return "Guest";

    if (currentUser.firstName && currentUser.lastName) {
        return `${currentUser.firstName} ${currentUser.lastName}`;
    }else if (currentUser.firstName){
        return currentUser.firstName;
    }else if (currentUser.phoneNumber) {
        return currentUser.phoneNumber;
    } else {
        return "User";
    }
}

function showPage(pageId) {
    console.log(`Showing page: ${pageId}`);
    const pages = document.querySelectorAll(".page");

    pages.forEach((page) => {
        pages.forEach((page) => page.classList.add("hidden"));
    });

    const targetPage = document.getElementById(pageId + "Page");
    if(targetPage) {
        targetPage.classList.remove("hidden");

        if (pageId === "profile"){
            updateProfilePage();
        }

        clearMessage();
    }
}

function clearMessage() {
    const messages = document.querySelectorAll(".success-message, .error-message");
    messages.forEach((message) => {
        message.classList.add("hidden");
    })
}

function logOut() {
    console.log("Logged out");
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    currentUser = null;

    updateNavigation();
    showPage("home");
}

function attachEventListeners() {

    const logInForm = document.getElementById("login-form");

    if(logInForm) {
        logInForm.addEventListener("submit", handleLogIn);
    }

    const registerForm = document.getElementById("register-form");

    if(registerForm) {
        registerForm.addEventListener("submit", handleRegister);
    }
}

async function handleLogIn(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("login-phone").value.trim();
    const password = document.getElementById("login-password").value;

    if(!validateLoginForm(phoneNumber, password)) {
        return;
    }

    const loginBtn = document.getElementById("login-btn");
    loginBtn.disabled = true;
    loginBtn.textContent = "Loading...";

    try {
        console.log("Attempting to Log in with phone:", phoneNumber);
        const response = await fetch(`${API_URL}/Login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    phoneNumber: phoneNumber,
                    password: password
                }
            )
        });
        let data;
        try {
            data = await response.json();
        } catch (jsonerror) {
            data = {
                error: `HTTP Error: ${response.status} - ${response.statusText}`
            }
        }
        if(response.ok && data.token) {
            console.log("Login successful:", data);
            localStorage.setItem("token", data.token);

            currentUser = {
                phoneNumber: phoneNumber,
                firstName: data.firstName || "",
                lastName: data.lastName || "",
                email: data.email || ""
            };

            localStorage.setItem("userData", JSON.stringify(currentUser));

            showMessage("home", "Login successful!");
            updateNavigation();

            setTimeout(() => {
                showPage("home");
            }, 1000);
        } else {
            console.error("Login failed:", data);
            showMessage("home", data.error || "Login failed.");
        }
    } catch (error) {
        console.error("Login error:", error);
        showMessage("Error", "An error occurred while logging in. Please try again.");
    } finally {
        loginBtn.disabled = false;
        loginBtn.textContent = "Log In";
    }
}

function validateLoginForm(phoneNumber, password) {
    clearFormErrors();
    let isValid = true;

    if(!phoneNumber) {
        showError("login-phone", "Phone number is required.");
        isValid = false;
    }

    if(!password) {
        showError("login-password", "Password is required.");
        isValid = false;
    }

    return isValid;
}

async function handleRegister(event) {
  event.preventDefault();
 
  const firstName = document.getElementById("register-firstname").value.trim();
  const lastName = document.getElementById("register-lastname").value.trim();
  const phoneNumber = document.getElementById("register-phone").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;
 
  //validation
 
  if (
    !validateRegisterForm(firstName, lastName, phoneNumber, email, password)
  ) {
    return;
  }
 
  // ღილაკის დისაბლება
  const registerBtn = document.getElementById("register-btn");
  registerBtn.disabled = true;
  registerBtn.textContent = "იტვირთება...";
 
  try {
    console.log("რეგისტრაციის მცდელობა:", {
      phoneNumber,
      email,
      firstName,
      lastName,
      password,
    }); // API გამოძახება
 
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        password: password,
        role: "user",
      }),
    });
 
    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      // თუ JSON-ი ვერ პარსირდება, გამოვიყენებთ fallback message
      data = {
        message: `HTTP შეცდომა: ${response.status} ${response.statusText}`,
      };
    }
 
    if (response.ok && data.token) {
      // წარმატებული რეგისტრაცია
      console.log("რეგისტრაცია წარმატებული:", data);
 
      showMessage("register-success", "რეგისტრაცია წარმატებით დასრულდა!");
 
      document.getElementById("register-form").reset();
 
      setTimeout(() => {
        showPage("login");
      }, 1500);
    } else {
      let errorMessage = data.message || data.error || ""; // კონკრეტული error message-ების მუშავება
      if (
        errorMessage.toLowerCase().includes("user already exists") ||
        errorMessage.toLowerCase().includes("phone number already exists") ||
        errorMessage.toLowerCase().includes("email already exists") ||
        errorMessage.toLowerCase().includes("duplicate") ||
        errorMessage.toLowerCase().includes("already exists") ||
        response.status === 409 ||
        response.status === 400
      ) {
        errorMessage =
          "მომხმარებელი უკვე არსებობს. გთხოვთ, სცადოთ სხვა ტელეფონი ან ელფოსტა.";
      } else if (
        errorMessage.toLowerCase().includes("invalid email") ||
        errorMessage.toLowerCase().includes("email format")
      ) {
        errorMessage =
          "ელფოსტის ფორმატი არასწორია. გთხოვთ, შეიყვანოთ სწორი ელფოსტა.";
      } else if (
        errorMessage.toLowerCase().includes("invalid password") ||
        errorMessage.toLowerCase().includes("password too short")
      ) {
        errorMessage =
          "paroli ფორმატი არასწორია. გთხოვთ, შეიყვანოთ სწორი password.";
      } else if (
        errorMessage.toLowerCase().includes("required") ||
        errorMessage.toLowerCase().includes("missing")
      ) {
        errorMessage = "ყველა ველი აუცილებელია. გთხოვთ, შეავსოთ ყველა ველი.";
      }
 
      showMessage("register-error", errorMessage);
    }
  } catch (error) {
    console.error("რეგისტრაციის შეცდომა:", error);
    // ვცდილობთ error response-ის გამოტანას თუ შესაძლებელია
    let errorMessage = "ტექნიკური შეცდომა";
    if (error.message) {
      errorMessage = error.message;
    } else if (
      error.response &&
      error.response.data &&
      error.response.data.message
    ) {
      errorMessage = error.response.data.message;
    } else if (error.toString) {
      errorMessage = error.toString();
    }
    showMessage("register-error", errorMessage);
  } finally {
    registerBtn.disabled = false;
    registerBtn.textContent = "რეგისტრაცია";
  }
}

function validateRegisterForm(firstName, lastName, phoneNumber, email, password) {
    clearFormErrors();

    let isValid = true;

    if (!firstName) {
        showError("register-firstname", "სახელი აუცილებელია.");
        isValid = false;
    }

    if (!lastName) {
        showError("register-lastname", "გვარი აუცილებელია.");
        isValid = false;
    }

    if (!phoneNumber) {
        showError("register-phone", "ტელეფონის ნომერი აუცილებელია.");
        isValid = false;
    }

    if (!email) {
        showError("register-email", "ელფოსტა აუცილებელია.");
        isValid = false;
    } else if (!validateEmail(email)) {
        showError("register-email", "ელფოსტის ფორმატი არასწორია.");
        isValid = false;
    }

    if (!password) {
        showError("register-password", "პაროლი აუცილებელია.");
        isValid = false;
    } else if (password.length < 6) {
        showError("register-password", "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლოს სიგრძის.");
        isValid = false;
    }

    return isValid;
}

function clearFormErrors(formPrefix) {
    const errors = document.querySelectorAll(
        `.${formPrefix ? formPrefix + "-error" : "error"}`
    );
    errors.forEach((error) => {
        error.textContent = "";
        const input = error.previousElementSibling;
        if (input) {
            input.classList.remove("error");
        }
    });
}