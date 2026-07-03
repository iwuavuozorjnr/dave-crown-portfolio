// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const overlay = document.querySelector(".overlay");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");
    menuToggle.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", function () {

    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
    overlay.classList.remove("active");

});

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item){

    item.addEventListener("click", function(){

        navLinks.classList.remove("active");
        menuToggle.classList.remove("active");
        overlay.classList.remove("active");

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const hiddenSections = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(function(entries){

    entries.forEach(function(entry){

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }else{

            entry.target.classList.remove("show");

        }

    });

},{
    threshold: 0.2
});

hiddenSections.forEach(function(section){

    observer.observe(section);

});

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navLinksList = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinksList.forEach(function(link){

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// STICKY NAVBAR
// ===============================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});

// ===============================
// TYPING ANIMATION
// ===============================

const text = "Front-End Web Developer";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeText(){

    if(index < text.length){

        typingText.textContent += text.charAt(index);

        index++;

        setTimeout(typeText,100);

    }

}

typeText();

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle = document.querySelector(".theme-toggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light");
    themeToggle.textContent = "☀️";

}else{

    themeToggle.textContent = "🌙";

}

themeToggle.addEventListener("click",function(){

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        themeToggle.textContent = "☀️";
        localStorage.setItem("theme","light");

    }else{

        themeToggle.textContent = "🌙";
        localStorage.setItem("theme","dark");

    }

});

// ===============================
// TOAST NOTIFICATION
// ===============================

const toast = document.getElementById("toast");

function showToast(message){

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(function(){

        toast.classList.remove("show");

    },3000);

}

// ===============================
// CONTACT FORM (EMAILJS)
// ===============================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    emailjs.sendForm(

        "service_ztvcn2c",
        "template_xsjl7xk",
        this

    )

    .then(function () {

        showToast("Message sent successfully!");

        contactForm.reset();

    })

    .catch(function (error) {

        console.log(error);

        showToast("Failed to send message!");

    });

});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if(window.scrollY > 300){

        backToTop.classList.add("show");

    }else{

        backToTop.classList.remove("show");

    }

});

backToTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// ===============================
// PRELOADER
// ===============================

const preloader = document.getElementById("preloader");

window.addEventListener("load", function(){

    setTimeout(function(){

        preloader.classList.add("hide");

    },1000);

});

// ===============================
// ANIMATED COUNTERS
// ===============================

const counters = document.querySelectorAll(".counter");

let counterStarted = false;

function startCounters(){

    if(counterStarted) return;

    const statsSection = document.querySelector(".stats");

    const sectionTop = statsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight - 100){

        counterStarted = true;

        counters.forEach(function(counter){

            const target = Number(counter.getAttribute("data-target"));

            let count = 0;

            const speed = target / 80;

            const updateCounter = function(){

                count += speed;

                if(count < target){

                    counter.textContent = Math.ceil(count);

                    requestAnimationFrame(updateCounter);

                }else{

                    counter.textContent = target + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);
