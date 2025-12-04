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
// FEATURE CARD INTERACTIVITY
// ===============================
const featureCards = document.querySelectorAll('.feature-card');

featureCards.forEach(card => {
    card.addEventListener('click', () => {
        const fullDesc = card.querySelector('.full-desc');
        if(fullDesc.style.display === "block") {
            fullDesc.style.display = "none";
        } else {
            fullDesc.style.display = "block";
        }
    });
});
// --- IMAGE POPUP ENLARGE FEATURE ---

const img = document.querySelector(".image-section img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-modal");

img.addEventListener("click", () => {
    modal.style.display = "flex";  
    modalImg.src = img.src;        // Load clicked image into modal
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Allow clicking anywhere outside the image to close
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// =============================
//  HIDE / SHOW HEADER ON SCROLL
// =============================

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 50) {
        // scrolling down
        header.classList.add("hide");
    } else {
        // scrolling up or at top
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});
