let navLinks = document.querySelectorAll(".link");
const sections = document.querySelectorAll("section");

document.addEventListener("DOMContentLoaded", () => {


    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (
                        link.getAttribute("href").substring(1) ===
                        entry.target.id
                    ) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }, observerOptions);
    sections.forEach((section) => {
        observer.observe(section);
    });
});
