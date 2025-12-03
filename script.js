// FORM VALIDATION
const form = document.getElementById("contactForm");
const errorMsg = document.getElementById("errorMsg");

if (form) {
    form.addEventListener("submit", (e) => {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            e.preventDefault();
            errorMsg.textContent = "All fields are required.";
            return;
        }

        if (!emailPattern.test(email)) {
            e.preventDefault();
            errorMsg.textContent = "Please enter a valid email.";
            return;
        }

        errorMsg.textContent = "";
    });
}
