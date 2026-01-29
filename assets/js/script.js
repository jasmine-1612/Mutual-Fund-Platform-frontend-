document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector(".sign-in-form");
  const registerForm = document.querySelector(".sign-up-form");

  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".container");

  // ===== LOGIN =====
  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = loginForm.querySelector("#email").value;
    const password = loginForm.querySelector("#password").value;

    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    try {
      const response = await fetch("http://localhost:8188/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.status === "success") {
          alert("Login successful!");
          sessionStorage.setItem("sid", data.investorid);
          setTimeout(() => {
            window.location.href = "investor_dashboard.html";
          }, 500);
        } else {
          alert("Login failed: Invalid credentials");
        }
      } else {
        const text = await response.text();
        alert("Login failed: " + text); // show backend message
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during login. Please try again.");
    }
  });

  // ===== REGISTER =====
  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = registerForm.querySelector("#firstName").value;
    const lastName = registerForm.querySelector("#lastName").value;
    const email = registerForm.querySelector("#emailId").value;
    const contactNumber = registerForm.querySelector("#contactNumber").value;
    const password = registerForm.querySelector("#passwordRegister").value;

    if (!firstName || !lastName || !email || !contactNumber || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8188/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, contactNumber, password })
      });

      if (response.ok) {
        const text = await response.text();
        alert("Registration successful: " + text);
        setTimeout(() => {
          window.location.href = "login.html";
        }, 1000);
      } else {
        const text = await response.text();
        alert("Registration failed: "); // shows "Email already exists"
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration. Please try again.");
    }
  });

  // ===== SWITCH SIGN-IN / SIGN-UP =====
  sign_up_btn.addEventListener("click", () => container.classList.add("sign-up-mode"));
  sign_in_btn.addEventListener("click", () => container.classList.remove("sign-up-mode"));
});
