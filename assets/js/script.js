/* =====================================================
   DIVYESH PORTFOLIO
   Premium Vanilla JavaScript
===================================================== */


/* =========================
   MOBILE NAVIGATION
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        menuBtn.innerHTML = navLinks.classList.contains("active")
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

}


/* =========================
   CLOSE MOBILE MENU
========================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuBtn) {
            menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }

    });

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,8,22,0.92)";
        navbar.style.backdropFilter = "blur(16px)";

    } else {

        navbar.style.background = "rgba(5,8,22,0.70)";
        navbar.style.backdropFilter = "blur(12px)";

    }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    "section, .glass, .project-card, .about-card, .story-card, .education-card, .leadership-card"
);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.15

});

revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAVBAR LINK
========================= */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* =========================
   AUTO FOOTER YEAR
========================= */

const footer = document.querySelector("footer p");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Divyesh M Perabattula. All Rights Reserved.`;

}


/* =========================
   PROFILE IMAGE
========================= */

/*
    No profile photo yet.

    On 27th simply add:

    assets/images/profile/profile.jpg

    and use:

    <img src="assets/images/profile/profile.jpg">

    No JavaScript required.
*/


/* =========================
   PRELOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});