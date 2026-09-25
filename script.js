const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const form = document.getElementById("enquiryForm");
const statusText = document.querySelector(".form-status");
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        const menuOpen = mainNav.classList.toggle("menu-open");
        navToggle.setAttribute("aria-expanded", String(menuOpen));
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("menu-open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name")?.toString().trim();

        if (!name) {
            statusText.textContent = "Please enter your name.";
            return;
        }

        statusText.textContent = `Thank you, ${name}! Your enquiry has been received. Our team will contact you soon.`;
        form.reset();
    });
}
