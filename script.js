// ===============================
// FORM VALIDATION
// ===============================
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

if (form) {
    form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Required field check
        if (!name || !email || !message) {
            e.preventDefault();
            errorMsg.textContent = "All fields are required.";
            return;
        }

        // Email format check
        if (!emailPattern.test(email)) {
            e.preventDefault();
            errorMsg.textContent = "Please enter a valid email.";
            return;
        }

        // If valid, clear errors
        errorMsg.textContent = "";
    });
}


// ===============================
// MOBILE NAV TOGGLE
// ===============================
const toggle = document.getElementById("menuToggle"); // corrected ID
const navLinks = document.getElementById("navLinks"); // UL element

if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
}
